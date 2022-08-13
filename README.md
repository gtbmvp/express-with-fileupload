# express-with-fileupload

CRUD posts with fileupload.

**Fileupload scheme:**

- **post-controller.js** interacts with request/response objects:
  - pass `req.body` and `req.files` to `PostService.create` method;
- **post-service.js** interacts with database:
  - `create` method creates _Post_ with file name in `picture` field or "No file uploaded", if `PostController` didn't pass file;
- **file-service.js** if `PostService` received file from `PostController`, `FileService` would generate new file name, using `uuid` package, save file in _static_ folder and returns file name to `PostService`.
