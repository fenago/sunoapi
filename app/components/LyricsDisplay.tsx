'use client';
import { useState, useEffect, useRef } from 'react';

interface AlignedWord {
  word: string;
  success: boolean;
  startS: number;
  endS: number;
  palign: number;
}

interface LyricsDisplayProps {
  taskId: string;
  audioId: string;
  apiKey: string;
  audioRef: HTMLAudioElement | null;
}

export default function LyricsDisplay({ taskId, audioId, apiKey, audioRef }: LyricsDisplayProps) {
  const [lyrics, setLyrics] = useState<AlignedWord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [showLyrics, setShowLyrics] = useState(false);
  const [activeTab, setActiveTab] = useState<'synchronized' | 'clean'>('clean');
  const lyricsContainerRef = useRef<HTMLDivElement>(null);

  // Reset lyrics when song changes
  useEffect(() => {
    setLyrics([]);
    setShowLyrics(false);
    setError('');
  }, [taskId, audioId]);

  const fetchLyrics = async () => {
    // Check if lyrics already loaded
    if (lyrics.length > 0) {
      setShowLyrics(!showLyrics);
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/lyrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-suno-api-key': apiKey,
        },
        body: JSON.stringify({ taskId, audioId }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setLyrics(data.alignedWords || []);
        setShowLyrics(true);
      }
    } catch (err) {
      setError('Failed to fetch lyrics');
      console.error('Lyrics fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Update current time from audio element
  useEffect(() => {
    if (!audioRef) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.currentTime);
    };

    audioRef.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audioRef.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audioRef]);

  // Auto-scroll to current lyric
  useEffect(() => {
    if (!lyricsContainerRef.current || lyrics.length === 0) return;

    const currentIndex = lyrics.findIndex(
      (word) => currentTime >= word.startS && currentTime <= word.endS
    );

    if (currentIndex !== -1) {
      const element = lyricsContainerRef.current.children[currentIndex] as HTMLElement;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentTime, lyrics]);

  const isCurrentWord = (word: AlignedWord) => {
    return currentTime >= word.startS && currentTime <= word.endS;
  };

  return (
    <div className="space-y-3">
      <button
        onClick={fetchLyrics}
        disabled={loading || showLyrics}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        <span>🎤</span>
        <span>{loading ? 'Loading Lyrics...' : showLyrics ? 'Lyrics Loaded' : 'Lyrics'}</span>
      </button>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {showLyrics && lyrics.length > 0 && (
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-800 flex items-center space-x-2">
              <span>🎵</span>
              <span>Lyrics</span>
            </h3>
            <button
              onClick={() => setShowLyrics(false)}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ✕
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={() => setActiveTab('clean')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                activeTab === 'clean'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              📄 Clean Lyrics
            </button>
            <button
              onClick={() => setActiveTab('synchronized')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                activeTab === 'synchronized'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              🎤 Synchronized
            </button>
          </div>
          
          {/* Synchronized Lyrics Tab */}
          {activeTab === 'synchronized' && (
            <div
              ref={lyricsContainerRef}
              className="max-h-96 overflow-y-auto space-y-2 bg-white rounded-lg p-4 shadow-inner"
            >
              {lyrics.map((word, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 p-2 rounded ${
                    isCurrentWord(word)
                      ? 'bg-purple-600 text-white font-bold scale-105 shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{word.word}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {word.startS.toFixed(2)}s - {word.endS.toFixed(2)}s
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Clean Lyrics Tab */}
          {activeTab === 'clean' && (
            <div className="max-h-96 overflow-y-auto bg-white rounded-lg p-4 shadow-inner">
              <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                {lyrics.map((word) => word.word).join('')}
              </div>
            </div>
          )}
        </div>
      )}

      {showLyrics && lyrics.length === 0 && !loading && (
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700 text-sm">
          No lyrics available for this track.
        </div>
      )}
    </div>
  );
}
