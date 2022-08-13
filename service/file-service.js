import * as uuid from "uuid"; //generate unique ids
import * as path from "path";

class FileService {
  // save picture at filePath and return fileName;
  saveFile(file) {
    try {
      const fileName = uuid.v4() + ".jpg"; //generate unique filename
      const filePath = path.resolve("static", fileName); //where to save
      file.mv(filePath); //mv function from file object (created by express-fileupload)
      return fileName;
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default new FileService();
