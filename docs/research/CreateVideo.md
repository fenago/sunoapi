# Create Music Video

> Generate an MP4 video with visualizations for a music track.

## OpenAPI

````yaml suno-api/suno-api.json post /api/v1/mp4/generate
paths:
  path: /api/v1/mp4/generate
  method: post
  servers:
    - url: https://api.sunoapi.org
      description: API Server
  request:
    security:
      - title: BearerAuth
        parameters:
          query: {}
          header:
            Authorization:
              type: http
              scheme: bearer
              description: >-
                # 🔑 API Authentication


                All endpoints require authentication using Bearer Token.


                ## Get API Key


                1. Visit the [API Key Management
                Page](https://sunoapi.org/api-key) to obtain your API Key


                ## Usage


                Add to request headers:


                ```

                Authorization: Bearer YOUR_API_KEY

                ```


                > **⚠️ Note:**

                > - Keep your API Key secure and do not share it with others

                > - If you suspect your API Key has been compromised, reset it
                immediately from the management page
          cookie: {}
    parameters:
      path: {}
      query: {}
      header: {}
      cookie: {}
    body:
      application/json:
        schemaArray:
          - type: object
            properties:
              taskId:
                allOf:
                  - type: string
                    description: >-
                      The task ID of the music generation task.  

                      - Required. This identifies the task containing the audio
                      to be converted to video.  

                      - Both `taskId` and `audioId` are needed to identify the
                      exact track.
                    example: taskId_774b9aa0422f
              audioId:
                allOf:
                  - type: string
                    description: >-
                      The ID of the specific track to convert to video.  

                      - Required. This identifies which specific track within
                      the task to convert.  

                      - Both `taskId` and `audioId` are needed to identify the
                      exact track.
                    example: e231****-****-****-****-****8cadc7dc
              callBackUrl:
                allOf:
                  - type: string
                    format: uri
                    description: >-
                      The URL to receive video generation completion
                      notification.  

                      - Required.  

                      - The callback will include a single downloadable URL for
                      the generated MP4 video.


                      For detailed callback format and implementation guide, see
                      [Music Video Generation
                      Callbacks](./create-music-video-callbacks)

                      - Alternatively, you can use the get music video details
                      endpoint to poll task status
                    example: https://api.example.com/callback
              author:
                allOf:
                  - type: string
                    maxLength: 50
                    description: >-
                      The artist or creator name to display on the video.  

                      - Optional.  

                      - Will be shown prominently in the video, typically at the
                      beginning.  

                      - Maximum 50 characters.
                    example: Suno Artist
              domainName:
                allOf:
                  - type: string
                    maxLength: 50
                    description: >-
                      The website or brand to display as watermark.  

                      - Optional.  

                      - Will appear as a subtle watermark at the bottom of the
                      video.  

                      - Maximum 50 characters.
                    example: music.example.com
            required: true
            requiredProperties:
              - taskId
              - audioId
              - callBackUrl
        examples:
          example:
            value:
              taskId: taskId_774b9aa0422f
              audioId: e231****-****-****-****-****8cadc7dc
              callBackUrl: https://api.example.com/callback
              author: Suno Artist
              domainName: music.example.com
  response:
    '200':
      application/json:
        schemaArray:
          - type: object
            properties:
              code:
                allOf:
                  - type: integer
                    enum:
                      - 200
                      - 400
                      - 401
                      - 404
                      - 405
                      - 409
                      - 413
                      - 429
                      - 430
                      - 455
                      - 500
                    description: >-
                      # Status Codes


                      - ✅ 200 - Request successful

                      - ⚠️ 400 - Invalid parameters

                      - ⚠️ 401 - Unauthorized access

                      - ⚠️ 404 - Invalid request method or path

                      - ⚠️ 405 - Rate limit exceeded

                      - ⚠️ 409 - Conflict - Mp4 record already exists

                      - ⚠️ 413 - Theme or prompt too long

                      - ⚠️ 429 - Insufficient credits

                      - ⚠️ 430 - Your call frequency is too high. Please try
                      again later. 

                      - ⚠️ 455 - System maintenance

                      - ❌ 500 - Server error
              msg:
                allOf:
                  - type: string
                    description: Error message when code != 200
                    example: success
              data:
                allOf:
                  - type: object
                    properties:
                      taskId:
                        type: string
                        description: Task ID for tracking task status
                        example: taskId_774b9aa0422f
        examples:
          example:
            value:
              code: 200
              msg: success
              data:
                taskId: taskId_774b9aa0422f
        description: Request successful
    '500':
      _mintlify/placeholder:
        schemaArray:
          - type: any
            description: Server error
        examples: {}
        description: Server error
  deprecated: false
  type: path
components:
  schemas: {}

````
# Music Video Generation Callbacks

> When music video generation tasks are completed, the system will send results to your provided callback URL via POST request

When you submit a task to the Music Video Generation API, you can use the `callBackUrl` parameter to set a callback URL. When the task is completed, the system will automatically push the results to your specified address.

## Callback Mechanism Overview

<Info>
  The callback mechanism eliminates the need to poll the API for task status. The system will proactively push task completion results to your server.
</Info>

### Callback Timing

The system will send callback notifications in the following situations:

* Music video generation task completed successfully
* Music video generation task failed
* Errors occurred during task processing

### Callback Method

* **HTTP Method**: POST
* **Content Type**: application/json
* **Timeout Setting**: 15 seconds

## Callback Request Format

When the task is completed, the system will send a POST request to your `callBackUrl` in the following format:

<CodeGroup>
  ```json Success Callback theme={null}
  {
    "code": 200,
    "msg": "MP4 generated successfully.",
    "data": {
      "task_id": "taskId_774b9aa0422f",
      "video_url": "https://example.com/videos/video_847715e66259.mp4"
    }
  }
  ```

  ```json Failure Callback theme={null}
  {
    "code": 400,
    "msg": "Music video generation failed",
    "data": {
      "task_id": "taskId_774b9aa0422f",
      "video_url": null
    }
  }
  ```
</CodeGroup>

## Status Code Description

<ParamField path="code" type="integer" required>
  Callback status code indicating task processing result:

  | Status Code | Description                                                        |
  | ----------- | ------------------------------------------------------------------ |
  | 200         | Success - Music video generation completed                         |
  | 400         | Bad Request - Parameter error, unsupported audio file format, etc. |
  | 451         | Download Failed - Unable to download source audio file             |
  | 500         | Server Error - Please try again later                              |
</ParamField>

<ParamField path="msg" type="string" required>
  Status message providing detailed status description
</ParamField>

<ParamField path="data.task_id" type="string" required>
  Task ID, consistent with the taskId returned when you submitted the task
</ParamField>

<ParamField path="data.video_url" type="string">
  Generated MP4 video file download URL, returned on success
</ParamField>

## Callback Reception Examples

Here are example codes for receiving callbacks in popular programming languages:

<Tabs>
  <Tab title="Node.js">
    ```javascript  theme={null}
    const express = require('express');
    const app = express();

    app.use(express.json());

    app.post('/music-video-callback', (req, res) => {
      const { code, msg, data } = req.body;
      
      console.log('Received music video generation callback:', {
        taskId: data.task_id,
        status: code,
        message: msg
      });
      
      if (code === 200) {
        // Task completed successfully
        console.log('Music video generation completed');
        console.log(`Video URL: ${data.video_url}`);
        
        // Download video file
        if (data.video_url) {
          const https = require('https');
          const fs = require('fs');
          
          const filename = `music_video_${data.task_id}.mp4`;
          const file = fs.createWriteStream(filename);
          
          https.get(data.video_url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
              file.close();
              console.log(`Video file saved as ${filename}`);
            });
          }).on('error', (err) => {
            console.error('Video file download failed:', err.message);
          });
        }
        
      } else {
        // Task failed
        console.log('Music video generation failed:', msg);
        
        // Handle failure cases...
        if (code === 400) {
          console.log('Parameter error or unsupported audio file format');
        } else if (code === 451) {
          console.log('Source audio file download failed');
        } else if (code === 500) {
          console.log('Server internal error');
        }
      }
      
      // Return 200 status code to confirm callback received
      res.status(200).json({ status: 'received' });
    });

    app.listen(3000, () => {
      console.log('Callback server running on port 3000');
    });
    ```
  </Tab>

  <Tab title="Python">
    ```python  theme={null}
    from flask import Flask, request, jsonify
    import requests

    app = Flask(__name__)

    @app.route('/music-video-callback', methods=['POST'])
    def handle_callback():
        data = request.json
        
        code = data.get('code')
        msg = data.get('msg')
        callback_data = data.get('data', {})
        task_id = callback_data.get('task_id')
        video_url = callback_data.get('video_url')
        
        print(f"Received music video generation callback: {task_id}, status: {code}, message: {msg}")
        
        if code == 200:
            # Task completed successfully
            print("Music video generation completed")
            print(f"Video URL: {video_url}")
            
            # Download video file example
            if video_url:
                try:
                    response = requests.get(video_url)
                    if response.status_code == 200:
                        filename = f"music_video_{task_id}.mp4"
                        with open(filename, "wb") as f:
                            f.write(response.content)
                        print(f"Video file saved as {filename}")
                except Exception as e:
                    print(f"Video file download failed: {e}")
                    
        else:
            # Task failed
            print(f"Music video generation failed: {msg}")
            
            # Handle failure cases...
            if code == 400:
                print("Parameter error or unsupported audio file format")
            elif code == 451:
                print("Source audio file download failed")
            elif code == 500:
                print("Server internal error")
        
        # Return 200 status code to confirm callback received
        return jsonify({'status': 'received'}), 200

    if __name__ == '__main__':
        app.run(host='0.0.0.0', port=3000)
    ```
  </Tab>

  <Tab title="PHP">
    ```php  theme={null}
    <?php
    header('Content-Type: application/json');

    // Get POST data
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    $code = $data['code'] ?? null;
    $msg = $data['msg'] ?? '';
    $callbackData = $data['data'] ?? [];
    $taskId = $callbackData['task_id'] ?? '';
    $videoUrl = $callbackData['video_url'] ?? '';

    error_log("Received music video generation callback: $taskId, status: $code, message: $msg");

    if ($code === 200) {
        // Task completed successfully
        error_log("Music video generation completed");
        error_log("Video URL: $videoUrl");
        
        // Download video file example
        if ($videoUrl) {
            try {
                $videoContent = file_get_contents($videoUrl);
                if ($videoContent !== false) {
                    $filename = "music_video_{$taskId}.mp4";
                    file_put_contents($filename, $videoContent);
                    error_log("Video file saved as $filename");
                }
            } catch (Exception $e) {
                error_log("Video file download failed: " . $e->getMessage());
            }
        }
        
    } else {
        // Task failed
        error_log("Music video generation failed: $msg");
        
        // Handle failure cases...
        if ($code === 400) {
            error_log("Parameter error or unsupported audio file format");
        } elseif ($code === 451) {
            error_log("Source audio file download failed");
        } elseif ($code === 500) {
            error_log("Server internal error");
        }
    }

    // Return 200 status code to confirm callback received
    http_response_code(200);
    echo json_encode(['status' => 'received']);
    ?>
    ```
  </Tab>
</Tabs>

## Best Practices

<Tip>
  ### Callback URL Configuration Recommendations

  1. **Use HTTPS**: Ensure your callback URL uses HTTPS protocol for secure data transmission
  2. **Verify Source**: Verify the legitimacy of the request source in callback processing
  3. **Idempotent Processing**: The same taskId may receive multiple callbacks, ensure processing logic is idempotent
  4. **Quick Response**: Callback processing should return a 200 status code as quickly as possible to avoid timeout
  5. **Asynchronous Processing**: Complex business logic should be processed asynchronously to avoid blocking callback response
  6. **Video Processing**: Video file download and processing should be done in asynchronous tasks to avoid blocking callback response
</Tip>

<Warning>
  ### Important Reminders

  * Callback URL must be a publicly accessible address
  * Server must respond within 15 seconds, otherwise it will be considered a timeout
  * If 3 consecutive retries fail, the system will stop sending callbacks
  * Please ensure the stability of callback processing logic to avoid callback failures due to exceptions
  * Generated video file URLs may have time limits, recommend downloading and saving promptly
  * MP4 video files are large, pay attention to storage space and download time
  * Ensure sufficient disk space to save video files
  * Video generation may take longer, please be patient for callback notifications
</Warning>

## Troubleshooting

If you do not receive callback notifications, please check the following:

<AccordionGroup>
  <Accordion title="Network Connection Issues">
    * Confirm that the callback URL is accessible from the public network
    * Check firewall settings to ensure inbound requests are not blocked
    * Verify that domain name resolution is correct
  </Accordion>

  <Accordion title="Server Response Issues">
    * Ensure the server returns HTTP 200 status code within 15 seconds
    * Check server logs for error messages
    * Verify that the interface path and HTTP method are correct
  </Accordion>

  <Accordion title="Content Format Issues">
    * Confirm that the received POST request body is in JSON format
    * Check that Content-Type is application/json
    * Verify that JSON parsing is correct
  </Accordion>

  <Accordion title="Video Processing Issues">
    * Confirm that video file URLs are accessible
    * Check video download permissions and network connections
    * Verify video save paths and permissions
    * Note video file size, ensure sufficient storage space
    * Confirm source audio file format is supported
    * Check network bandwidth is sufficient for downloading large files
  </Accordion>
</AccordionGroup>

## Alternative Solution

If you cannot use the callback mechanism, you can also use polling:

<Card title="Poll Query Results" icon="radar" href="/suno-api/get-music-video-details">
  Use the get music video details endpoint to regularly query task status. We recommend querying every 30 seconds.
</Card>


# Get Music Video Details

> Retrieve detailed information about a music video generation task, including status and download link.

## OpenAPI

````yaml suno-api/suno-api.json get /api/v1/mp4/record-info
paths:
  path: /api/v1/mp4/record-info
  method: get
  servers:
    - url: https://api.sunoapi.org
      description: API Server
  request:
    security:
      - title: BearerAuth
        parameters:
          query: {}
          header:
            Authorization:
              type: http
              scheme: bearer
              description: >-
                # 🔑 API Authentication


                All endpoints require authentication using Bearer Token.


                ## Get API Key


                1. Visit the [API Key Management
                Page](https://sunoapi.org/api-key) to obtain your API Key


                ## Usage


                Add to request headers:


                ```

                Authorization: Bearer YOUR_API_KEY

                ```


                > **⚠️ Note:**

                > - Keep your API Key secure and do not share it with others

                > - If you suspect your API Key has been compromised, reset it
                immediately from the management page
          cookie: {}
    parameters:
      path: {}
      query:
        taskId:
          schema:
            - type: string
              required: true
              description: >-
                The task ID returned from the Create Music Video endpoint. Used
                to retrieve detailed information about the video generation
                task, including processing status and download URL.
      header: {}
      cookie: {}
    body: {}
  response:
    '200':
      application/json:
        schemaArray:
          - type: object
            properties:
              code:
                allOf:
                  - type: integer
                    description: >-
                      # Status Codes


                      - ✅ 200 - Request successful

                      - ⚠️ 400 - Invalid parameters

                      - ⚠️ 401 - Unauthorized access

                      - ⚠️ 404 - Invalid request method or path

                      - ⚠️ 405 - Rate limit exceeded

                      - ⚠️ 413 - Theme or prompt too long

                      - ⚠️ 429 - Insufficient credits

                      - ⚠️ 430 - Your call frequency is too high. Please try
                      again later. 

                      - ⚠️ 455 - System maintenance

                      - ❌ 500 - Server error
                    example: 200
                    enum:
                      - 200
                      - 400
                      - 401
                      - 404
                      - 405
                      - 413
                      - 429
                      - 430
                      - 455
                      - 500
              msg:
                allOf:
                  - type: string
                    description: Error message when code != 200
                    example: success
              data:
                allOf:
                  - type: object
                    properties:
                      taskId:
                        type: string
                        description: Task ID
                      musicId:
                        type: string
                        description: >-
                          The ID of the source music track that was converted to
                          video
                      callbackUrl:
                        type: string
                        description: >-
                          The callback URL that was provided in the video
                          generation request
                      audioId:
                        type: string
                        description: >-
                          The audio ID of the track within the original
                          generation task
                      completeTime:
                        type: string
                        description: The timestamp when the video generation was completed
                        format: date-time
                      response:
                        type: object
                        properties:
                          videoUrl:
                            type: string
                            description: The URL to download the generated MP4 video
                      successFlag:
                        type: string
                        description: The current status of the video generation task
                        enum:
                          - PENDING
                          - SUCCESS
                          - CREATE_TASK_FAILED
                          - GENERATE_MP4_FAILED
                          - CALLBACK_EXCEPTION
                      createTime:
                        type: string
                        description: Creation time
                        format: date-time
                      errorCode:
                        type: number
                        description: Error code, valid when task fails
                      errorMessage:
                        type: string
                        description: Error message, valid when task fails
            refIdentifier: '#/components/schemas/ApiResponse'
        examples:
          example:
            value:
              code: 200
              msg: success
              data:
                taskId: taskId_774b9aa0422f
                musicId: audioId_0295980ec02e
                callbackUrl: https://api.example.com/callback
                audioId: e231****-****-****-****-****8cadc7dc
                completeTime: 1735661400000
                response:
                  videoUrl: https://example.com/videos/video_847715e66259.mp4
                successFlag: SUCCESS
                createTime: 1735661400000
                errorCode: null
                errorMessage: null
        description: Request successful
    '500':
      _mintlify/placeholder:
        schemaArray:
          - type: any
            description: Server error
        examples: {}
        description: Server error
  deprecated: false
  type: path
components:
  schemas: {}

````