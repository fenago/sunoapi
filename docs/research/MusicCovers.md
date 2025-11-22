# Generate Music Cover

> Create personalized cover images for generated music.

## OpenAPI

````yaml suno-api/suno-api.json post /api/v1/suno/cover/generate
paths:
  path: /api/v1/suno/cover/generate
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
                      Original music task ID, should be the taskId returned by
                      the music generation interface.
                    example: 73d6128b3523a0079df10da9471017c8
              callBackUrl:
                allOf:
                  - type: string
                    format: uri
                    description: >-
                      URL address for receiving Cover generation task completion
                      updates. This parameter is required for all Cover
                      generation requests.


                      - The system will send POST requests to this URL when
                      Cover generation is complete, including task status and
                      results

                      - Your callback endpoint should be able to accept JSON
                      payloads containing cover image URLs

                      - For detailed callback format and implementation guide,
                      see [Cover Generation Callbacks](./cover-suno-callbacks)

                      - Alternatively, you can use the Get Cover Details
                      interface to poll task status
                    example: https://api.example.com/callback
            required: true
            requiredProperties:
              - taskId
              - callBackUrl
        examples:
          example:
            value:
              taskId: 73d6128b3523a0079df10da9471017c8
              callBackUrl: https://api.example.com/callback
  response:
    '200':
      application/json:
        schemaArray:
          - type: object
            properties:
              code:
                allOf:
                  - type: integer
                    format: int32
                    description: Status code
                    example: 200
                  - type: integer
                    enum:
                      - 200
                      - 400
                      - 401
                      - 402
                      - 404
                      - 409
                      - 422
                      - 429
                      - 455
                      - 500
                    description: >-
                      Response status code


                      - **200**: Success - Request processed successfully

                      - **400**: Validation error - Cover already generated for
                      this task

                      - **401**: Unauthorized - Authentication credentials
                      missing or invalid

                      - **402**: Insufficient credits - Account doesn't have
                      enough credits for this operation

                      - **404**: Not found - Requested resource or endpoint
                      doesn't exist

                      - **409**: Conflict - Cover record already exists

                      - **422**: Validation error - Request parameters failed
                      validation checks

                      - **429**: Rate limited - Your call frequency is too high.
                      Please try again later.

                      - **455**: Service unavailable - System currently
                      undergoing maintenance

                      - **500**: Server error - Unexpected error occurred while
                      processing request

                      Build failed - Cover image generation failed
              msg:
                allOf:
                  - type: string
                    description: Status message
                    example: success
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
                        example: 21aee3c3c2a01fa5e030b3799fa4dd56
        examples:
          example:
            value:
              code: 200
              msg: success
              data:
                taskId: 21aee3c3c2a01fa5e030b3799fa4dd56
        description: Success
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
# Music Cover Generation Callbacks

> When music cover generation is complete, the system will call this callback to notify results.

When you submit a cover generation task to the Suno API, you can use the `callBackUrl` parameter to set the callback URL. When the task is complete, the system will automatically push results to your specified address.

## Callback Mechanism Overview

<Info>
  The callback mechanism eliminates the need to poll the API for task status. The system will actively push task completion results to your server.
</Info>

### Callback Timing

The system will send callback notifications in the following situations:

* Cover generation task completed successfully
* Cover generation task failed
* Error occurred during task processing

### Callback Method

* **HTTP Method**: POST
* **Content Type**: application/json
* **Timeout Setting**: 15 seconds

## Callback Request Format

When the task is complete, the system will send a POST request to your `callBackUrl`:

<CodeGroup>
  ```json Success Callback theme={null}
  {
    "code": 200,
    "data": {
      "images": [
        "https://tempfile.aiquickdraw.com/s/1753958521_6c1b3015141849d1a9bf17b738ce9347.png",
        "https://tempfile.aiquickdraw.com/s/1753958524_c153143acc6340908431cf0e90cbce9e.png"
      ],
      "taskId": "21aee3c3c2a01fa5e030b3799fa4dd56"
    },
    "msg": "success"
  }
  ```

  ```json Failure Callback theme={null}
  {
    "code": 501,
    "msg": "Cover generation failed",
    "data": {
      "taskId": "21aee3c3c2a01fa5e030b3799fa4dd56",
      "images": null
    }
  }
  ```
</CodeGroup>

## Status Code Description

<ParamField path="code" type="integer" required>
  Callback status code indicating task processing result:

  | Status Code | Description                                                                                                |
  | ----------- | ---------------------------------------------------------------------------------------------------------- |
  | 200         | Success - Request processed successfully                                                                   |
  | 400         | Validation error - Request parameters invalid                                                              |
  | 408         | Rate limited - Timeout                                                                                     |
  | 500         | Server error - Unexpected error occurred while processing request                                          |
  | 501         | Cover generation failed                                                                                    |
  | 531         | Server error - Sorry, generation failed due to an issue. Your credits have been refunded. Please try again |
</ParamField>

<ParamField path="msg" type="string" required>
  Status message providing more detailed status description
</ParamField>

<ParamField path="data.taskId" type="string" required>
  Task ID, consistent with the taskId returned when you submitted the task
</ParamField>

<ParamField path="data.images" type="array">
  Array of generated cover image URLs, returned on success. Usually contains 2 different style cover images
</ParamField>

## Callback Reception Examples

Here are example codes for receiving callbacks in common programming languages:

<Tabs>
  <Tab title="Node.js">
    ```javascript  theme={null}
    const express = require('express');
    const app = express();

    app.use(express.json());

    app.post('/suno-cover-callback', (req, res) => {
      const { code, msg, data } = req.body;
      
      console.log('Received cover generation callback:', {
        taskId: data.taskId,
        status: code,
        message: msg
      });
      
      if (code === 200) {
        // Task completed successfully
        console.log('Cover generation completed');
        const images = data.images;
        
        if (images && images.length > 0) {
          console.log('Generated cover images:');
          images.forEach((imageUrl, index) => {
            console.log(`Cover ${index + 1}: ${imageUrl}`);
          });
          
          // Process cover images
          // Can download images, save locally, update database, etc.
          downloadImages(images, data.taskId);
        }
        
      } else {
        // Task failed
        console.log('Cover generation failed:', msg);
        
        // Handle failure cases...
      }
      
      // Return 200 status code to confirm callback received
      res.status(200).json({ status: 'received' });
    });

    // Download images function
    async function downloadImages(imageUrls, taskId) {
      const fs = require('fs');
      const path = require('path');
      const https = require('https');
      
      // Create directory
      const dir = `covers/${taskId}`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        const filename = path.join(dir, `cover_${i + 1}.png`);
        
        try {
          await downloadFile(url, filename);
          console.log(`Cover saved: ${filename}`);
        } catch (error) {
          console.error(`Download failed: ${error.message}`);
        }
      }
    }

    function downloadFile(url, filename) {
      return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filename);
        https.get(url, (response) => {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', (err) => {
          fs.unlink(filename, () => {}); // Delete failed file
          reject(err);
        });
      });
    }

    app.listen(3000, () => {
      console.log('Callback server running on port 3000');
    });
    ```
  </Tab>

  <Tab title="Python">
    ```python  theme={null}
    from flask import Flask, request, jsonify
    import requests
    import os
    from urllib.parse import urlparse

    app = Flask(__name__)

    @app.route('/suno-cover-callback', methods=['POST'])
    def handle_callback():
        data = request.json
        
        code = data.get('code')
        msg = data.get('msg')
        callback_data = data.get('data', {})
        task_id = callback_data.get('taskId')
        images = callback_data.get('images')
        
        print(f"Received cover generation callback: {task_id}, status: {code}, message: {msg}")
        
        if code == 200:
            # Task completed successfully
            print("Cover generation completed")
            
            if images:
                print("Generated cover images:")
                for i, image_url in enumerate(images, 1):
                    print(f"Cover {i}: {image_url}")
                
                # Download cover images
                download_images(images, task_id)
                
        else:
            # Task failed
            print(f"Cover generation failed: {msg}")
            
            # Handle failure cases...
        
        # Return 200 status code to confirm callback received
        return jsonify({'status': 'received'}), 200

    def download_images(image_urls, task_id):
        """Download cover images"""
        # Create directory
        dir_path = f"covers/{task_id}"
        os.makedirs(dir_path, exist_ok=True)
        
        for i, url in enumerate(image_urls, 1):
            try:
                # Get file extension
                parsed_url = urlparse(url)
                file_ext = os.path.splitext(parsed_url.path)[1] or '.png'
                filename = os.path.join(dir_path, f"cover_{i}{file_ext}")
                
                # Download file
                response = requests.get(url, stream=True)
                if response.status_code == 200:
                    with open(filename, 'wb') as f:
                        for chunk in response.iter_content(chunk_size=8192):
                            f.write(chunk)
                    print(f"Cover saved: {filename}")
                else:
                    print(f"Download failed {url}: HTTP {response.status_code}")
                    
            except Exception as e:
                print(f"Download failed {url}: {e}")

    if __name__ == '__main__':
        app.run(host='0.0.0.0', port=3000)
    ```
  </Tab>

  <Tab title="Java">
    ```java  theme={null}
    /**
     * @param request Callback request
     * @return ResponseEntity
     * @author zj
     * @description Handle Suno Cover generation callback
     * @date 2025/1/15
     **/
    @PostMapping("/suno-cover-callback")
    @Operation(summary = "Suno Cover generation callback", description = "Receive Cover generation completion notification")
    public ResponseEntity<Map<String, String>> handleCoverCallback(
        @RequestBody CoverCallbackRequest request) {
        
        log.info("Received cover generation callback: taskId={}, status={}, message={}", 
            request.getData().getTaskId(), request.getCode(), request.getMsg());
        
        try {
            if (request.getCode() == 200) {
                // Task completed successfully
                log.info("Cover generation completed");
                List<String> images = request.getData().getImages();
                
                if (images != null && !images.isEmpty()) {
                    log.info("Generated cover images: {}", images);
                    
                    // Process cover images
                    processCoverImages(request.getData().getTaskId(), images);
                }
                
            } else {
                // Task failed
                log.error("Cover generation failed: {}", request.getMsg());
                
                // Handle failure cases
                handleCoverGenerationFailure(request.getData().getTaskId(), 
                    request.getCode(), request.getMsg());
            }
            
            // Update task status
            coverTaskService.updateTaskStatus(request.getData().getTaskId(), 
                request.getCode(), request.getMsg(), request.getData().getImages());
                
        } catch (Exception e) {
            log.error("Failed to process cover generation callback", e);
            return ResponseEntity.status(500)
                .body(Map.of("status", "error", "message", e.getMessage()));
        }
        
        // Return 200 status code to confirm callback received
        return ResponseEntity.ok(Map.of("status", "received"));
    }

    /**
     * @param taskId Task ID
     * @param imageUrls Image URL list
     * @author zj
     * @description Process cover images
     * @date 2025/1/15
     **/
    private void processCoverImages(String taskId, List<String> imageUrls) {
        // Asynchronously download images
        CompletableFuture.runAsync(() -> {
            try {
                downloadCoverImages(taskId, imageUrls);
            } catch (Exception e) {
                log.error("Failed to download cover images: taskId={}", taskId, e);
            }
        });
    }

    /**
     * @param taskId Task ID
     * @param imageUrls Image URL list
     * @author zj
     * @description Download cover images
     * @date 2025/1/15
     **/
    private void downloadCoverImages(String taskId, List<String> imageUrls) {
        String dirPath = "covers/" + taskId;
        File dir = new File(dirPath);
        if (!dir.exists()) {
            dir.mkdirs();
        }
        
        for (int i = 0; i < imageUrls.size(); i++) {
            String url = imageUrls.get(i);
            String filename = dirPath + "/cover_" + (i + 1) + ".png";
            
            try {
                downloadFile(url, filename);
                log.info("Cover saved: {}", filename);
            } catch (Exception e) {
                log.error("Download failed: {}", url, e);
            }
        }
    }

    @Data
    public class CoverCallbackRequest {
        private Integer code;
        private String msg;
        private CoverCallbackData data;
    }

    @Data
    public class CoverCallbackData {
        private String taskId;
        private List<String> images;
    }
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
    $taskId = $callbackData['taskId'] ?? '';
    $images = $callbackData['images'] ?? null;

    error_log("Received cover generation callback: $taskId, status: $code, message: $msg");

    if ($code === 200) {
        // Task completed successfully
        error_log("Cover generation completed");
        
        if ($images && is_array($images) && count($images) > 0) {
            error_log("Generated cover images: " . implode(', ', $images));
            
            // Download cover images
            downloadCoverImages($taskId, $images);
        }
        
    } else {
        // Task failed
        error_log("Cover generation failed: $msg");
        
        // Handle failure cases...
    }

    /**
     * Download cover images
     * @param string $taskId Task ID
     * @param array $imageUrls Image URL array
     */
    function downloadCoverImages($taskId, $imageUrls) {
        // Create directory
        $dir = "covers/$taskId";
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }
        
        foreach ($imageUrls as $index => $url) {
            $filename = $dir . "/cover_" . ($index + 1) . ".png";
            
            try {
                $imageContent = file_get_contents($url);
                if ($imageContent !== false) {
                    file_put_contents($filename, $imageContent);
                    error_log("Cover saved: $filename");
                } else {
                    error_log("Download failed: $url");
                }
            } catch (Exception $e) {
                error_log("Download failed $url: " . $e->getMessage());
            }
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

  1. **Use HTTPS**: Ensure callback URL uses HTTPS protocol for data transmission security
  2. **Verify Source**: Verify the legitimacy of request sources in callback processing
  3. **Idempotent Processing**: The same taskId may receive multiple callbacks, ensure processing logic is idempotent
  4. **Quick Response**: Callback processing should return 200 status code quickly to avoid timeout
  5. **Asynchronous Processing**: Complex business logic should be processed asynchronously to avoid blocking callback response
  6. **Image Management**: Download and save images promptly, noting URL validity period
  7. **Error Retry**: Implement retry mechanism for failed image downloads
</Tip>

<Warning>
  ### Important Reminders

  * Callback URL must be a publicly accessible address
  * Server must respond within 15 seconds, otherwise it will be considered timeout
  * If 3 consecutive retries fail, the system will stop sending callbacks
  * Please ensure stability of callback processing logic to avoid callback failures due to exceptions
  * Cover image URLs may have validity periods, recommend downloading and saving promptly
  * Usually generates 2 different style cover images for selection
  * Note handling exceptions for failed image downloads
</Warning>

## Troubleshooting

If you don't receive callback notifications, please check the following:

<AccordionGroup>
  <Accordion title="Network Connection Issues">
    * Confirm callback URL is accessible from the public internet
    * Check firewall settings to ensure inbound requests are not blocked
    * Verify domain name resolution is correct
  </Accordion>

  <Accordion title="Server Response Issues">
    * Ensure server returns HTTP 200 status code within 15 seconds
    * Check server logs for error messages
    * Verify interface path and HTTP method are correct
  </Accordion>

  <Accordion title="Content Format Issues">
    * Confirm received POST request body is in JSON format
    * Check if Content-Type is application/json
    * Verify JSON parsing is correct
  </Accordion>

  <Accordion title="Image Processing Issues">
    * Confirm image URLs are accessible
    * Check image download permissions and network connection
    * Verify file save path and permissions
    * Note image URL validity period limitations
  </Accordion>
</AccordionGroup>

## Alternative Solutions

If you cannot use the callback mechanism, you can also use polling:

<Card title="Poll Query Results" icon="radar" href="./get-cover-suno-details">
  Use the Get Cover Details endpoint to periodically query task status. We recommend querying every 30 seconds.
</Card>
