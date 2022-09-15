// Service works only with DB
import Post from "../model/post-model.js";
import fileService from "./file-service.js";

class PostService {
  async create(data, files) {
    let fileName = "No file uploaded";
    if (files) fileName = fileService.saveFile(files.picture); //picture field is corresponding formData field
    const createdPost = await Post.create({ ...data, picture: fileName });
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) throw new Error("No id specified");
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) throw new Error("No id specified");
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }
  async deleteOne(id) {
    if (!id) throw new Error("No id specified");
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  }

  async deleteAll() {
    const deletedPosts = await Post.deleteMany();
    return deletedPosts;
  }
}

export default new PostService();
