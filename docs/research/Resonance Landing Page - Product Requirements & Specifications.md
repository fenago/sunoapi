# Resonance Landing Page - Product Requirements & Specifications

## Product Requirement

**Product:** Resonance - AI Music Creation Platform with Fractional Rights Trading  
**Page Type:** B2C SaaS Landing Page (Homepage)  
**Purpose:** Convert aspiring music creators who feel creatively blocked by technical barriers into active platform users by demonstrating how Resonance transforms ideas into real music in minutes, while building a sustainable creative career through rights monetization.

**Target Audience:** Problem Aware creators aged 18-35 (primary: 22-29) who have musical ideas but lack technical skills. They are frustrated with traditional DAWs, envious of others' success, and anxious about their creative potential remaining unexpressed.

**Primary Conversion Goal:** Free tier sign-up with email capture  
**Secondary Conversion Goal:** Creator Pro subscription ($29/month) trial

---

## UI Components & Detailed Specifications

### 1. Navigation Bar

**Component Type:** Fixed header navigation with transparent-to-solid scroll behavior

**Layout:**
- Left: Resonance logo (gradient text treatment using brand gradient)
- Center: Navigation links (Features, Pricing, Community, Radio, Marketplace)
- Right: "Sign In" link + "Get Started Free" CTA button

**Specifications:**
```
Height: 80px (desktop), 64px (mobile)
Background: Transparent on load, transitions to rgba(26, 31, 46, 0.95) with backdrop-blur on scroll
Logo: 
  - Text: "Resonance" in DM Serif Display, 1.5rem
  - Gradient: linear-gradient(135deg, #FF6B35 0%, #E91E63 100%)
Navigation Links:
  - Font: Inter Medium (500), 0.875rem
  - Color: #E2E8F0 (cloud gray)
  - Hover: Gradient underline animation (200ms)
  - Active: Full gradient text
CTA Button:
  - Background: Brand gradient
  - Text: "Get Started Free" in Inter Semibold (600)
  - Padding: 0.75rem 1.5rem
  - Border radius: 0.5rem (lg)
  - Hover: Scale 1.05, shadow elevation
Mobile: 
  - Hamburger menu (right side)
  - Slide-out drawer with full navigation
  - Logo remains visible
```

**Behavior:**
- Smooth scroll to sections on link click
- Active section highlighted in navigation
- Mobile menu closes on selection
- Sticky positioning with scroll-triggered background

---

### 2. Hero Section

**Component Type:** Full-viewport hero with gradient background, animated elements, and dual CTAs

**Headline:** "Your Ideas. Real Music. In Minutes."

**Subheadline:** "Stop letting technical barriers trap your creativity. Resonance turns the melody in your head into a finished track—no music theory, no expensive gear, no years of training required."

**Layout:**
```
Container: Full viewport height (min-height: 100vh)
Background: 
  - Base: Deep gradient from #1A1F2E to #0F1419
  - Overlay: Subtle animated particle effect (MagicUI)
  - Accent: Floating gradient orbs (brand colors, blur effect)
  
Content Grid (2 columns on desktop, stacked on mobile):
  Left Column (60%):
    - Eyebrow text: "FOR ASPIRING CREATORS" (uppercase, 0.75rem, letter-spacing: 0.1em, aqua color)
    - H1 Headline: DM Serif Display, 4.5rem (display), line-height 1.1, gradient text
    - Subheadline: Inter Regular, 1.25rem (h5), #E2E8F0, max-width 600px, line-height 1.6
    - CTA Group (flex row, gap 1rem):
      * Primary: "Start Creating Free" (gradient background, white text)
      * Secondary: "Watch How It Works" (transparent with gradient border, gradient text)
    - Trust Indicators (flex row, gap 2rem, margin-top 2rem):
      * "No credit card required"
      * "247 songs created today"
      * "10,000+ creators"
      
  Right Column (40%):
    - Animated visualization: Audio waveform morphing into musical notes
    - Or: Product screenshot with animated gradient border
    - Floating UI elements showing: "Describe your music" → "Generate" → "Your Track"
```

**Specifications:**
```
H1 Gradient: linear-gradient(135deg, #FF6B35 0%, #FDC830 30%, #4ECDC4 50%, #9B59B6 85%)
Primary CTA:
  - Size: 1.125rem text, padding 1rem 2rem
  - Background: Brand gradient
  - Border radius: 0.5rem
  - Shadow: 0 10px 15px -3px rgba(255, 107, 53, 0.3)
  - Hover: Scale 1.05, shadow increase, slight gradient shift
Secondary CTA:
  - Border: 2px solid gradient (requires border-image or pseudo-element)
  - Background: transparent
  - Text: Gradient
  - Hover: Background fills with gradient at 10% opacity
Trust Indicators:
  - Font: Inter Regular, 0.875rem
  - Color: #4A5568 (slate gray)
  - Icons: Heroicons (check-circle, users, sparkles)
  - Icon color: #4ECDC4 (aqua)
```

**Animations:**
- Headline: Fade in + slide up (500ms, stagger 100ms per line)
- CTAs: Fade in + scale (300ms, delay 600ms)
- Visualization: Continuous subtle animation loop
- Particles: Slow float animation (20s loop)

**Mobile Adaptations:**
- H1: 2.5rem
- Single column layout
- Visualization moves below text
- CTAs stack vertically, full width
- Trust indicators: 2x2 grid

---

### 3. Problem Section

**Component Type:** Emotional resonance section with visual storytelling

**Headline:** "We Know That Feeling"

**Subheadline:** "The melody that haunts you at 2 AM. The idea that feels perfect in your head but impossible to make real. The frustration of watching others succeed while your music stays trapped inside."

**Layout:**
```
Container: Full width, padding 6rem vertical (desktop), 4rem (mobile)
Background: Subtle gradient from #0F1419 to #1A1F2E

Content Structure:
  1. Section Header (centered, max-width 800px):
     - Headline: H2 (2.25rem), DM Serif Display, gradient text
     - Subheadline: Body text (1rem), #E2E8F0, line-height 1.6
     
  2. Three-Column Grid (cards, gap 2rem):
     Each card represents a pain point from Alex's journey:
     
     Card 1: "Trapped Ideas"
       - Icon: Cage/lock visual (custom SVG with gradient)
       - Quote: "I have so many ideas for songs, but I get stuck trying to make them real. It's like the music is trapped in my head."
       - Attribution: "— Alex, Graphic Designer"
       
     Card 2: "Technical Overwhelm"
       - Icon: Complex interface/maze visual
       - Quote: "I opened Ableton tonight. Stared at that empty grid for forty-five minutes. All those knobs and menus—it's like a thousand locked doors."
       - Attribution: "— Alex's Journal, March 15th"
       
     Card 3: "Comparison Anxiety"
       - Icon: Social media/comparison visual
       - Quote: "I watched this kid post his new track. 47,000 likes. How does he just... do it? What does he know that I don't?"
       - Attribution: "— Alex's Journal, 2:47 AM"
```

**Card Specifications:**
```
Card Container:
  - Background: rgba(26, 31, 46, 0.5)
  - Border: 1px solid rgba(78, 205, 196, 0.2)
  - Border radius: 1rem (xl)
  - Padding: 2rem
  - Backdrop blur: 10px
  - Hover: Border color intensifies, subtle lift (translateY -4px)
  
Icon:
  - Size: 64px x 64px
  - Gradient fill using brand colors
  - Margin bottom: 1.5rem
  
Quote:
  - Font: Inter Regular, 1.125rem
  - Color: #E2E8F0
  - Line height: 1.6
  - Font style: italic
  - Margin bottom: 1rem
  
Attribution:
  - Font: Inter Medium, 0.875rem
  - Color: #4ECDC4 (aqua)
  - Text align: right
```

**Animations:**
- Cards: Stagger fade-in on scroll (triggered at 80% viewport entry)
- Hover: Smooth lift and border glow

**Mobile:**
- Single column stack
- Cards: Full width
- Reduced padding (1.5rem)

---

### 4. Solution Section

**Component Type:** Feature showcase with interactive demo preview

**Headline:** "From Idea to Track. In Minutes, Not Months."

**Subheadline:** "Resonance is the platform where creativity flows without friction. Describe your music in words, and our AI brings it to life—then you own it, share it, and monetize it."

**Layout:**
```
Container: Full width, padding 6rem vertical
Background: #1A1F2E solid

Content Structure:
  1. Section Header (centered, max-width 900px)
  
  2. Interactive Demo (center, max-width 1200px):
     Visual representation of the creation flow:
     
     Step 1 → Step 2 → Step 3 → Step 4
     [Text Input] → [AI Generation] → [Audio Player] → [Monetization]
     
     Implementation: Animated sequence or interactive component
     
  3. Three-Column Benefit Grid:
     
     Column 1: "Create Effortlessly"
       - Icon: Magic wand / sparkles
       - Headline: "AI-Powered Generation"
       - Description: "Describe your music in plain English. Our AI understands 'warm bassline' and 'shimmering pads'—no MIDI knowledge required."
       - Feature list:
         * Text-to-music in seconds
         * Style presets (lo-fi, ambient, electronic, etc.)
         * Extend and remix your tracks
         * Stem separation (vocals, instruments)
       
     Column 2: "Build Community"
       - Icon: People connected / network
       - Headline: "Your Creative Home"
       - Description: "Create your radio station, collaborate with others, and find your audience. This isn't just a tool—it's a movement."
       - Feature list:
         * Custom radio stations
         * Real-time collaboration
         * 247+ active creators
         * Comment and remix culture
       
     Column 3: "Monetize Your Art"
       - Icon: Currency / growth chart
       - Headline: "Own Your Success"
       - Description: "Every track you create can be monetized. Sell fractional rights, earn from streams, and build a sustainable creative career."
       - Feature list:
         * 8 types of fractional rights (MRR, PUB, SYNC, etc.)
         * Rights trading marketplace
         * Transparent royalty distribution
         * Commercial use rights
```

**Interactive Demo Specifications:**
```
Demo Container:
  - Background: Gradient card (subtle brand gradient at 20% opacity)
  - Border radius: 1.5rem (2xl)
  - Padding: 3rem
  - Box shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5)
  - Margin bottom: 4rem

Step Visualization:
  - Four connected cards showing progression
  - Connection lines: Animated gradient (flowing effect)
  - Each step card:
    * Width: 200px (desktop), full width (mobile)
    * Background: rgba(15, 20, 25, 0.8)
    * Border: 1px solid gradient
    * Padding: 1.5rem
    * Border radius: 0.5rem
    
  Step 1 (Text Input):
    - Mockup of text area with placeholder: "A warm, pulsing bassline..."
    - Typing animation effect
    
  Step 2 (AI Generation):
    - Loading spinner with gradient
    - Progress indicator
    - Text: "Generating..."
    
  Step 3 (Audio Player):
    - Waveform visualization (animated)
    - Play button (gradient)
    - Track title: "2AM Thoughts"
    
  Step 4 (Monetization):
    - Rights icons (8 types)
    - "Share" and "Monetize" buttons
```

**Benefit Column Specifications:**
```
Column Container:
  - Max width: 350px
  - Padding: 2rem
  
Icon:
  - Size: 48px
  - Gradient fill
  - Margin bottom: 1rem
  
Headline:
  - Font: DM Serif Display, 1.5rem (h4)
  - Color: White
  - Margin bottom: 0.5rem
  
Description:
  - Font: Inter Regular, 1rem
  - Color: #E2E8F0
  - Line height: 1.6
  - Margin bottom: 1.5rem
  
Feature List:
  - Font: Inter Regular, 0.875rem
  - Color: #4A5568
  - List style: None
  - Each item:
    * Check icon (aqua color)
    * Padding left: 1.5rem
    * Margin bottom: 0.5rem
```

**Animations:**
- Demo: Auto-play sequence on scroll into view
- Steps: Sequential reveal (300ms stagger)
- Benefit columns: Fade in from bottom (stagger 150ms)

**Mobile:**
- Demo: Vertical stack of steps
- Benefits: Single column
- Reduced padding throughout

---

### 5. Feature/Benefits Highlights

**Component Type:** Expandable feature grid with hover interactions

**Headline:** "Everything You Need to Go From Idea to Income"

**Layout:**
```
Container: Full width, padding 6rem vertical
Background: Subtle gradient (#0F1419 to #1A1F2E)

Grid: 3x2 (6 features), gap 2rem

Feature Cards:
  1. "AI Music Generation"
     - Icon: Robot/AI brain
     - Title: "Describe. Generate. Create."
     - Description: "Access to V5 model, 8-minute songs, custom mode, instrumental toggle"
     - Hover reveal: "No music theory required. Just describe what you hear."
     
  2. "Radio Stations"
     - Icon: Radio tower/broadcast
     - Title: "Your Personal Station"
     - Description: "Curate your space, build followers, become a tastemaker"
     - Hover reveal: "247 followers are waiting to discover your sound."
     
  3. "Rights Trading"
     - Icon: Exchange/marketplace
     - Title: "Fractional Ownership"
     - Description: "Buy, sell, and trade 8 types of music rights"
     - Hover reveal: "Turn your tracks into tradeable assets."
     
  4. "Collaboration Tools"
     - Icon: Users working together
     - Title: "Create Together"
     - Description: "Real-time collaboration, remix culture, comment threads"
     - Hover reveal: "A Berlin producer wants to remix your track."
     
  5. "Advanced Editing"
     - Icon: Sliders/controls
     - Title: "Refine Your Sound"
     - Description: "Stem separation, vocal/instrumental extraction, extend tracks"
     - Hover reveal: "Split your song into 12 separate tracks."
     
  6. "Analytics & Growth"
     - Icon: Chart/growth
     - Title: "Track Your Success"
     - Description: "Stream analytics, rights performance, portfolio dashboard"
     - Hover reveal: "See exactly how your music is performing."
```

**Card Specifications:**
```
Card:
  - Background: rgba(26, 31, 46, 0.3)
  - Border: 1px solid rgba(78, 205, 196, 0.15)
  - Border radius: 1rem
  - Padding: 2rem
  - Transition: all 300ms ease
  - Hover:
    * Background: rgba(26, 31, 46, 0.6)
    * Border: 1px solid rgba(78, 205, 196, 0.5)
    * Transform: translateY(-8px)
    * Shadow: 0 20px 25px -5px rgba(78, 205, 196, 0.2)
    
Icon:
  - Size: 56px
  - Gradient fill
  - Margin bottom: 1.5rem
  
Title:
  - Font: Inter Semibold (600), 1.25rem (h5)
  - Color: White
  - Margin bottom: 0.75rem
  
Description:
  - Font: Inter Regular, 0.875rem
  - Color: #4A5568
  - Line height: 1.5
  - Margin bottom: 1rem
  
Hover Reveal:
  - Font: Inter Medium (500), 1rem
  - Color: #4ECDC4 (aqua)
  - Opacity: 0 (default), 1 (hover)
  - Transition: opacity 200ms
  - Font style: italic
```

**Mobile:**
- 1 column grid
- Cards: Full width
- Hover reveal: Always visible (no hover on mobile)

---

### 6. Social Proof / Testimonials

**Component Type:** Carousel with user testimonials and metrics

**Headline:** "Creators Like You Are Already Thriving"

**Layout:**
```
Container: Full width, padding 6rem vertical
Background: #1A1F2E

Structure:
  1. Section Header (centered)
  
  2. Metrics Bar (4 columns, centered):
     - "10,000+ Creators"
     - "50,000+ Tracks Created"
     - "247 Radio Stations"
     - "$2.1M Rights Traded"
     
  3. Testimonial Carousel (3 visible at once on desktop):
     
     Testimonial 1 (Alex's Story):
       - Avatar: Illustrated profile (non-binary, creative aesthetic)
       - Quote: "I made more music in two weeks on Resonance than in two years of trying to learn Ableton. For the first time, I don't feel like that's a wall I can't climb."
       - Name: "Alex Chen"
       - Role: "Graphic Designer & Music Creator"
       - Track: "2AM Thoughts" (playable embed)
       - Stats: "12 tracks • 247 followers"
       
     Testimonial 2:
       - Avatar: Profile photo
       - Quote: "Someone from Berlin wants to remix my track. ME. I might actually make money from this. But honestly? The money isn't even the point. I wake up excited now."
       - Name: "Jordan Martinez"
       - Role: "Content Creator & Producer"
       - Track: "Urban Echoes" (playable embed)
       - Stats: "8 tracks • 512 followers"
       
     Testimonial 3:
       - Avatar: Profile photo
       - Quote: "I used to feel that stomach-drop of shame when people asked about my music. Now I pull out my phone and play them my tracks. This is really beautiful."
       - Name: "Sam Patel"
       - Role: "Software Engineer & Musician"
       - Track: "Code & Melody" (playable embed)
       - Stats: "15 tracks • 891 followers"
```

**Metrics Bar Specifications:**
```
Metric Item:
  - Text align: center
  - Number:
    * Font: DM Serif Display, 3rem (h1)
    * Gradient text
    * Margin bottom: 0.5rem
  - Label:
    * Font: Inter Regular, 0.875rem
    * Color: #4A5568
    * Text transform: uppercase
    * Letter spacing: 0.1em
```

**Testimonial Card Specifications:**
```
Card:
  - Width: 400px (desktop), full width (mobile)
  - Background: rgba(26, 31, 46, 0.5)
  - Border: 1px solid rgba(78, 205, 196, 0.2)
  - Border radius: 1rem
  - Padding: 2rem
  - Backdrop blur: 10px
  
Avatar:
  - Size: 64px circle
  - Border: 2px solid gradient
  - Margin bottom: 1rem
  
Quote:
  - Font: Inter Regular, 1rem
  - Color: #E2E8F0
  - Line height: 1.6
  - Font style: italic
  - Margin bottom: 1.5rem
  - Before/after quotation marks (gradient color)
  
Name:
  - Font: Inter Semibold (600), 1rem
  - Color: White
  
Role:
  - Font: Inter Regular, 0.875rem
  - Color: #4ECDC4
  - Margin bottom: 1rem
  
Track Embed:
  - Mini audio player
  - Waveform visualization
  - Play button (gradient)
  - Height: 60px
  - Margin bottom: 1rem
  
Stats:
  - Font: Inter Regular, 0.75rem
  - Color: #4A5568
  - Icons: music note, users
```

**Carousel Behavior:**
- Auto-advance: 5 seconds
- Manual controls: Previous/Next arrows
- Dot indicators below
- Smooth slide transition (500ms)
- Pause on hover

**Mobile:**
- 1 testimonial visible
- Swipe gestures enabled
- Metrics: 2x2 grid

---

### 7. Pricing Section

**Component Type:** Three-tier pricing cards with feature comparison

**Headline:** "Start Free. Grow When You're Ready."

**Subheadline:** "No credit card required. Upgrade anytime to unlock advanced features and monetization."

**Layout:**
```
Container: Full width, padding 6rem vertical
Background: Gradient from #0F1419 to #1A1F2E

Pricing Cards (3 columns, centered):

  Card 1: Free Tier
    - Badge: "START HERE"
    - Title: "Free"
    - Price: "$0/month"
    - Description: "Perfect for exploring and learning"
    - Features:
      * 50 credits daily (10 songs)
      * Access to v3.5 model
      * Community features
      * Radio station creation
      * Rights marketplace access
      * Standard features
    - CTA: "Get Started Free" (secondary style)
    
  Card 2: Creator Pro (HIGHLIGHTED)
    - Badge: "MOST POPULAR" (gradient background)
    - Title: "Creator Pro"
    - Price: "$29/month"
    - Savings: "Save $72 with annual"
    - Description: "For serious creators ready to monetize"
    - Features:
      * 2,500 credits/month (500 songs)
      * Access to V5 model
      * Commercial use rights
      * Advanced editing tools
      * Stem separation (12 tracks)
      * Upload 8min audio
      * Priority queue
      * Add vocals/instrumentals
      * Early access to features
    - CTA: "Start Free Trial" (primary style, gradient)
    - Note: "7-day free trial, cancel anytime"
    
  Card 3: Investor
    - Badge: "FOR TRADERS"
    - Title: "Investor"
    - Price: "$99/month"
    - Description: "Advanced tools for rights trading"
    - Features:
      * All Creator Pro features
      * Advanced portfolio analytics
      * AI investment recommendations
      * Bulk rights trading tools
      * Real-time market data
      * Custom watchlists
      * Tax reporting
      * Priority support
    - CTA: "Start Free Trial" (secondary style)
```

**Card Specifications:**
```
Card Container:
  - Width: 350px (desktop), full width (mobile)
  - Background: rgba(26, 31, 46, 0.5)
  - Border: 1px solid rgba(78, 205, 196, 0.2)
  - Border radius: 1rem
  - Padding: 2.5rem
  - Transition: transform 300ms
  
Creator Pro Card (highlighted):
  - Transform: scale(1.05)
  - Border: 2px solid gradient
  - Box shadow: 0 25px 50px -12px rgba(78, 205, 196, 0.3)
  - Z-index: 10
  
Badge:
  - Position: absolute, top -12px
  - Background: gradient (for "Most Popular")
  - Padding: 0.5rem 1rem
  - Border radius: 9999px (full)
  - Font: Inter Semibold (600), 0.75rem
  - Text transform: uppercase
  - Letter spacing: 0.05em
  
Title:
  - Font: DM Serif Display, 1.875rem (h3)
  - Color: White
  - Margin bottom: 0.5rem
  
Price:
  - Font: Inter Bold (700), 3rem
  - Gradient text (for paid tiers)
  - Margin bottom: 0.5rem
  
Savings:
  - Font: Inter Regular, 0.875rem
  - Color: #10B981 (success green)
  - Margin bottom: 1rem
  
Description:
  - Font: Inter Regular, 0.875rem
  - Color: #4A5568
  - Margin bottom: 2rem
  
Features List:
  - Font: Inter Regular, 0.875rem
  - Color: #E2E8F0
  - List style: none
  - Each item:
    * Check icon (aqua)
    * Padding left: 1.5rem
    * Margin bottom: 0.75rem
  - Divider after 3rd item (for Creator Pro)
  
CTA Button:
  - Full width
  - Padding: 1rem
  - Font: Inter Semibold (600), 1rem
  - Border radius: 0.5rem
  - Margin top: 2rem
  
Note:
  - Font: Inter Regular, 0.75rem
  - Color: #4A5568
  - Text align: center
  - Margin top: 0.5rem
```

**Additional Element:**
```
Comparison Link (below cards):
  - Text: "Compare all features →"
  - Font: Inter Medium (500), 0.875rem
  - Color: #4ECDC4
  - Hover: Underline
  - Links to detailed comparison table (modal or separate page)
```

**Mobile:**
- Single column stack
- Creator Pro card: No scale transform (all same size)
- Horizontal scroll option for 3-card view

---

### 8. Final CTA Section

**Component Type:** High-impact conversion section with urgency

**Headline:** "Your Music Is Waiting. Start Creating Today."

**Subheadline:** "Join 10,000 creators who stopped letting technical barriers trap their creativity."

**Layout:**
```
Container: Full width, padding 8rem vertical (desktop), 5rem (mobile)
Background: 
  - Base: #1A1F2E
  - Overlay: Brand gradient at 20% opacity
  - Particle effect (subtle)

Content (centered, max-width 800px):
  1. Eyebrow: "NO CREDIT CARD REQUIRED"
  2. Headline: H2, DM Serif Display, gradient text
  3. Subheadline: Body text, #E2E8F0
  4. CTA Group:
     - Primary: "Start Creating Free" (large, gradient)
     - Secondary: "Watch Demo" (transparent with border)
  5. Trust Signals (row):
     - "✓ Free forever plan"
     - "✓ 247 songs created today"
     - "✓ Cancel anytime"
  6. Social Proof:
     - Row of creator avatars (overlapping circles)
     - Text: "Join Alex, Jordan, Sam, and 9,997 others"
```

**Specifications:**
```
Eyebrow:
  - Font: Inter Semibold (600), 0.75rem
  - Color: #4ECDC4
  - Text transform: uppercase
  - Letter spacing: 0.15em
  - Margin bottom: 1rem
  
Headline:
  - Font: DM Serif Display, 3rem (h1 on mobile: 2.25rem)
  - Gradient text
  - Text align: center
  - Margin bottom: 1rem
  
Subheadline:
  - Font: Inter Regular, 1.25rem
  - Color: #E2E8F0
  - Text align: center
  - Max width: 600px
  - Margin: 0 auto 2rem
  
Primary CTA:
  - Font: Inter Semibold (600), 1.25rem
  - Padding: 1.25rem 3rem
  - Background: Brand gradient
  - Border radius: 0.5rem
  - Shadow: 0 20px 25px -5px rgba(255, 107, 53, 0.4)
  - Hover: Scale 1.08, shadow increase
  - Margin right: 1rem
  
Secondary CTA:
  - Font: Inter Medium (500), 1.125rem
  - Padding: 1.25rem 2rem
  - Background: transparent
  - Border: 2px solid rgba(78, 205, 196, 0.5)
  - Color: #4ECDC4
  - Border radius: 0.5rem
  - Hover: Background rgba(78, 205, 196, 0.1)
  
Trust Signals:
  - Display: flex, justify center, gap 2rem
  - Font: Inter Regular, 0.875rem
  - Color: #4A5568
  - Margin top: 2rem
  - Icons: Check circle (aqua)
  
Avatar Row:
  - Display: flex, justify center
  - Margin top: 3rem
  - Each avatar:
    * Size: 48px circle
    * Border: 2px solid #1A1F2E
    * Margin left: -12px (overlapping effect)
    * First avatar: margin-left 0
  - Text below:
    * Font: Inter Regular, 0.875rem
    * Color: #E2E8F0
    * Margin top: 1rem
```

**Mobile:**
- CTAs: Stack vertically, full width
- Trust signals: 3-column grid or stack
- Avatar row: Smaller avatars (40px)

---

### 9. FAQ Section

**Component Type:** Accordion-style expandable questions

**Headline:** "Questions? We've Got Answers."

**Layout:**
```
Container: Full width, padding 6rem vertical
Background: #0F1419

Content (centered, max-width 900px):
  1. Section Header
  2. FAQ Accordion (6-8 questions)
  
FAQ Items:
  Q1: "Do I need music theory or production experience?"
  A: "Not at all. Resonance is built for people who have ideas but not technical skills. Just describe your music in plain English—'warm bassline,' 'lo-fi vibes,' 'late night energy'—and our AI handles the rest. You can learn production concepts as you create, not before you're allowed to start."
  
  Q2: "What happens after the free trial?"
  A: "You can continue on the free plan forever—no automatic charges. The free tier gives you 50 credits daily (10 songs) and access to all community features. Upgrade to Creator Pro only when you're ready to monetize and access advanced tools."
  
  Q3: "Can I really make money from my music?"
  A: "Yes. Every track you create can be monetized through fractional rights trading. You can sell ownership slices of your master recording, publishing, sync rights, and more. Plus, Creator Pro gives you commercial use rights for streaming revenue. Think of it as turning your creativity into investable assets."
  
  Q4: "How does fractional rights trading work?"
  A: "Each song has 8 types of rights (Master Recording, Publishing, Performance, Sync, Mechanical, Remix, Commercial, Exclusive Access). Each right is divided into thousands of 'slices' you can sell to investors. When your music generates revenue, it's automatically distributed to rights holders via smart contracts."
  
  Q5: "Is my data and music safe?"
  A: "Absolutely. All music is stored on IPFS (decentralized storage) with blockchain-based ownership verification. We're GDPR compliant, and you always own your creations. We never claim rights to your music—you're the creator and owner."
  
  Q6: "Can I collaborate with other creators?"
  A: "Yes! Resonance has real-time collaboration tools, remix features, and a vibrant community. You can invite others to co-create, share stems, and even split rights ownership automatically."
  
  Q7: "What if I want to cancel?"
  A: "Cancel anytime, no questions asked. You'll keep access to your created tracks and can download them. Your radio station and community connections remain active on the free tier."
  
  Q8: "What makes Resonance different from Suno or BandLab?"
  A: "Resonance combines AI music generation with fractional rights ownership and a social platform. It's not just a tool—it's a complete ecosystem where you create, collaborate, monetize, and invest. Plus, our focus is on aspiring creators who feel blocked by traditional production tools."
```

**Accordion Item Specifications:**
```
Item Container:
  - Border bottom: 1px solid rgba(78, 205, 196, 0.2)
  - Padding: 1.5rem 0
  - Cursor: pointer
  
Question (collapsed state):
  - Display: flex, justify between, align center
  - Font: Inter Semibold (600), 1.125rem
  - Color: White
  - Icon: Chevron down (aqua), rotates 180deg when expanded
  - Hover: Color shifts to gradient
  
Answer (expanded state):
  - Font: Inter Regular, 1rem
  - Color: #E2E8F0
  - Line height: 1.6
  - Padding top: 1rem
  - Max height: 0 (collapsed), auto (expanded)
  - Opacity: 0 (collapsed), 1 (expanded)
  - Transition: all 300ms ease
```

**Behavior:**
- Click question to expand/collapse
- Only one item open at a time (accordion behavior)
- Smooth height transition
- Icon rotation animation

---

### 10. Footer

**Component Type:** Comprehensive site footer with navigation and social links

**Layout:**
```
Container: Full width, padding 4rem vertical, 2rem horizontal
Background: #0F1419
Border top: 1px solid rgba(78, 205, 196, 0.2)

Structure (4 columns on desktop, stacked on mobile):

  Column 1: Brand
    - Resonance logo (gradient text)
    - Tagline: "Your ideas. Real music. In minutes."
    - Social icons (gradient on hover):
      * Twitter/X
      * Instagram
      * Discord
      * YouTube
      * TikTok
      
  Column 2: Product
    - Heading: "Product"
    - Links:
      * Features
      * Pricing
      * Radio Stations
      * Marketplace
      * Community
      * API Docs
      
  Column 3: Resources
    - Heading: "Resources"
    - Links:
      * Help Center
      * Tutorials
      * Blog
      * Creator Stories
      * Music Theory Basics
      * Rights Education
      
  Column 4: Company
    - Heading: "Company"
    - Links:
      * About Us
      * Careers
      * Press Kit
      * Terms of Service
      * Privacy Policy
      * Contact

Bottom Bar:
  - Copyright: "© 2025 Resonance. All rights reserved."
  - Built with: "Powered by AI, built for creators"
```

**Specifications:**
```
Logo:
  - Font: DM Serif Display, 1.5rem
  - Gradient text
  - Margin bottom: 0.5rem
  
Tagline:
  - Font: Inter Regular, 0.875rem
  - Color: #4A5568
  - Margin bottom: 1.5rem
  
Social Icons:
  - Size: 24px
  - Color: #4A5568
  - Hover: Gradient fill
  - Gap: 1rem
  - Transition: 200ms
  
Column Heading:
  - Font: Inter Semibold (600), 0.875rem
  - Color: White
  - Text transform: uppercase
  - Letter spacing: 0.1em
  - Margin bottom: 1rem
  
Links:
  - Font: Inter Regular, 0.875rem
  - Color: #4A5568
  - Line height: 2
  - Hover: Color #4ECDC4, slight indent
  - Transition: 200ms
  
Bottom Bar:
  - Border top: 1px solid rgba(78, 205, 196, 0.1)
  - Padding top: 2rem
  - Margin top: 3rem
  - Display: flex, justify between
  - Font: Inter Regular, 0.75rem
  - Color: #4A5568
```

**Mobile:**
- Single column stack
- Columns: Full width, margin bottom 2rem
- Bottom bar: Stack, center align

---

## Visual Style & Theme

### Light/Dark Mode

**Default:** Dark mode (primary experience)  
**Optional:** Light mode toggle in navigation

**Dark Mode Colors:**
- Background primary: #0F1419
- Background secondary: #1A1F2E
- Text primary: #FFFFFF
- Text secondary: #E2E8F0
- Text tertiary: #4A5568
- Borders: rgba(78, 205, 196, 0.2)

**Light Mode Colors** (if implemented):
- Background primary: #FFFFFF
- Background secondary: #F7FAFC
- Text primary: #1A1F2E
- Text secondary: #4A5568
- Text tertiary: #718096
- Borders: rgba(78, 205, 196, 0.3)

### Brand Gradient Application

**Primary Gradient:**
```css
background: linear-gradient(135deg, #FF6B35 0%, #F7931E 15%, #FDC830 30%, #4ECDC4 50%, #556FB5 70%, #9B59B6 85%, #E91E63 100%);
```

**Usage:**
- Hero headline text
- Primary CTA buttons
- Section accent elements
- Icons and decorative elements
- Hover states
- Active navigation indicators
- Badge backgrounds

**Gradient Text Implementation:**
```css
background: linear-gradient(135deg, #FF6B35 0%, #E91E63 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Typography Scale

**Headings:**
- Display: DM Serif Display, 4.5rem (72px)
- H1: DM Serif Display, 3rem (48px)
- H2: DM Serif Display, 2.25rem (36px)
- H3: Inter Semibold, 1.875rem (30px)
- H4: Inter Semibold, 1.5rem (24px)
- H5: Inter Semibold, 1.25rem (20px)

**Body:**
- Large: Inter Regular, 1.125rem (18px)
- Regular: Inter Regular, 1rem (16px)
- Small: Inter Regular, 0.875rem (14px)
- XSmall: Inter Regular, 0.75rem (12px)

### Spacing System

- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)
- 3xl: 4rem (64px)
- 4xl: 6rem (96px)
- 5xl: 8rem (128px)

### Animation Principles

**Timing:**
- Fast: 150ms (micro-interactions)
- Base: 200ms (standard transitions)
- Slow: 300ms (complex animations)
- Slower: 500ms (page transitions)

**Easing:**
- Standard: cubic-bezier(0.4, 0.0, 0.2, 1)
- Decelerate: cubic-bezier(0.0, 0.0, 0.2, 1)
- Accelerate: cubic-bezier(0.4, 0.0, 1, 1)
- Sharp: cubic-bezier(0.4, 0.0, 0.6, 1)

**Reduced Motion:**
All animations must respect `prefers-reduced-motion: reduce` media query:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Technical Implementation Notes

### Framework & Libraries

**Core:**
- React 18+
- Next.js 14+ (App Router)
- TypeScript

**Styling:**
- Tailwind CSS 3.4+
- DaisyUI (theme management)
- Framer Motion (animations)

**UI Components:**
- Heroicons (icons)
- Headless UI (accessible components)
- Custom components as specified

**Audio:**
- Wavesurfer.js (waveform visualizations)
- Howler.js (audio playback)

### Performance Requirements

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

**Optimization:**
- Lazy load images (native loading="lazy")
- Code splitting by route
- Prefetch critical resources
- Optimize fonts (font-display: swap)
- Compress images (WebP with fallback)
- Minimize JavaScript bundle

### Accessibility Requirements

- WCAG 2.1 AA compliance
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation (tab order)
- Focus indicators (visible, high contrast)
- Screen reader tested
- Color contrast: 4.5:1 minimum (text), 3:1 (UI components)
- Skip navigation link
- Alt text for all images
- Captions for video content

### Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1280px
- Large Desktop: > 1280px

**Mobile-First Approach:**
All styles default to mobile, then use min-width media queries to enhance for larger screens.

### Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Android (last 2 versions)

### SEO Requirements

**Meta Tags:**
```html
<title>Resonance - Turn Your Ideas Into Real Music in Minutes</title>
<meta name="description" content="Stop letting technical barriers trap your creativity. AI-powered music creation platform with fractional rights trading. No music theory required. Start free." />
<meta property="og:title" content="Resonance - Your Ideas. Real Music. In Minutes." />
<meta property="og:description" content="Join 10,000 creators making music without technical barriers. Create, collaborate, and monetize your art." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

**Structured Data:**
- Organization schema
- Product schema (for pricing)
- Review schema (for testimonials)
- FAQ schema

### Analytics & Tracking

**Events to Track:**
- Page views
- CTA clicks (all buttons)
- Video plays
- Scroll depth (25%, 50%, 75%, 100%)
- Form interactions
- Pricing card views
- Testimonial carousel interactions
- FAQ expansions
- Navigation clicks
- Social proof impressions

**Conversion Goals:**
- Free sign-up
- Trial start
- Video watch (>50%)
- Pricing page view
- FAQ engagement

---

## Content Guidelines

### Voice & Tone

**Do:**
- Use "you" and "your" (second person)
- Be encouraging and empowering
- Acknowledge creative frustration
- Focus on emotional benefits
- Use concrete examples
- Be conversational but professional
- Celebrate small wins

**Don't:**
- Use jargon without explanation
- Be condescending or teach-y
- Overpromise results
- Use passive voice
- Be overly technical
- Assume prior knowledge
- Create false urgency

### Messaging Hierarchy

**Primary Message:** "Your ideas. Real music. In minutes."

**Supporting Messages:**
1. No technical barriers (accessibility)
2. AI-powered creation (innovation)
3. Monetize your art (empowerment)
4. Community of creators (belonging)

**Proof Points:**
- 10,000+ creators
- 50,000+ tracks created
- 247 radio stations
- $2.1M rights traded
- 2-week transformation (Alex's story)

---

## Assets Required

### Images

1. **Hero Visualization**
   - Animated audio waveform morphing into musical notes
   - Or: Product screenshot with gradient border
   - Dimensions: 1200x800px minimum
   - Format: WebP with PNG fallback

2. **Problem Section Icons** (3)
   - Trapped ideas (cage/lock)
   - Technical overwhelm (maze/complex interface)
   - Comparison anxiety (social media)
   - Format: SVG, gradient fill

3. **Solution Demo**
   - Interactive creation flow mockup
   - 4 connected steps
   - Format: SVG or high-res PNG

4. **Feature Icons** (6)
   - AI brain, radio tower, exchange, collaboration, sliders, chart
   - Format: SVG, 56x56px

5. **Testimonial Avatars** (3+)
   - Illustrated or photo profiles
   - Format: WebP, 64x64px minimum

6. **Social Proof**
   - Creator avatar row (overlapping circles)
   - Format: WebP, 48x48px each

### Videos

1. **Hero Video** (optional)
   - Product demo with voiceover
   - Length: 60-90 seconds
   - Format: MP4/WebM
   - Captions: Required

2. **"Watch How It Works"**
   - Tutorial/walkthrough
   - Length: 2-3 minutes
   - Format: MP4/WebM
   - Captions: Required

### Audio

1. **Track Embeds** (for testimonials)
   - Sample tracks from Alex, Jordan, Sam
   - Format: MP3, 128kbps minimum
   - Length: 30-60 second previews

---

## Development Phases

### Phase 1: Foundation (Week 1)
- Set up Next.js project with TypeScript
- Configure Tailwind CSS + DaisyUI
- Implement design tokens
- Create base layout components
- Set up navigation and footer

### Phase 2: Hero & Problem (Week 2)
- Build hero section with animations
- Implement problem section with cards
- Add scroll-triggered animations
- Integrate video player

### Phase 3: Solution & Features (Week 3)
- Create interactive demo component
- Build feature grid with hover effects
- Implement benefit columns
- Add waveform visualizations

### Phase 4: Social Proof & Pricing (Week 4)
- Build testimonial carousel
- Create pricing cards with comparison
- Add metrics bar with counters
- Implement FAQ accordion

### Phase 5: Polish & Optimization (Week 5)
- Add micro-interactions
- Optimize performance
- Test accessibility
- Cross-browser testing
- Mobile optimization
- SEO implementation

---

## Success Metrics

**Primary KPIs:**
- Free sign-up conversion rate: Target 5-8%
- Trial start rate: Target 2-3%
- Time on page: Target >3 minutes
- Scroll depth: Target 70% reach footer

**Secondary KPIs:**
- Video play rate: Target 30%
- CTA click-through rate: Target 15%
- Pricing page view rate: Target 40%
- FAQ engagement: Target 25%

**User Experience:**
- Page load time: < 2.5s
- Bounce rate: < 40%
- Mobile conversion: > 50% of desktop
- Accessibility score: 100 (Lighthouse)

---

## Windsurf Prompt Template

When implementing this specification in Windsurf, use this prompt structure:

```
I need you to build a landing page for Resonance, an AI music creation platform.

CONTEXT:
- Target audience: Aspiring creators aged 18-35 who feel creatively blocked
- Brand: Modern, accessible, empowering (see brand identity section)
- Goal: Convert visitors to free sign-ups

TECH STACK:
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS + DaisyUI
- Framer Motion for animations

BUILD THIS SECTION: [specify section name]

REQUIREMENTS:
[paste relevant section specifications from this document]

DESIGN TOKENS:
[paste design tokens JSON]

ACCESSIBILITY:
- WCAG 2.1 AA compliant
- Keyboard navigable
- Screen reader friendly
- Respect prefers-reduced-motion

Please implement with:
1. Clean, semantic HTML
2. Mobile-first responsive design
3. Smooth animations (respect reduced motion)
4. Optimized performance
5. TypeScript types for all props
```

---

**Document Version:** 1.0  
**Last Updated:** 2025-10-11  
**Created By:** Manus AI  
**For:** Resonance Landing Page Development

