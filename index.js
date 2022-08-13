import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import router from "./router/router.js";

const PORT = process.env.PORT || 5000;
const DB_URL = "mongodb://localhost:27017/express-crud-api-fileupload";

const app = express();
app.use(express.json());
app.use(express.static("./static"));
app.use(fileUpload());
app.use(router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`server alive at ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
