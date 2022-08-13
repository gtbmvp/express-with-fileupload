// Controller works with req, res;
import PostService from "../service/post-service.js";

//try/catch to prevent server failure
class PostController {
  async create(req, res) {
    try {
      //uploaded file will be accessible from req.files.<field_name>
      const post = await PostService.create(req.body, req.files);
      res.json(post);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.json(posts);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      res.json(post);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      res.json(updatedPost);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async deleteOne(req, res) {
    try {
      const deletedPost = await PostService.deleteOne(req.params.id);
      res.json(deletedPost);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async deleteAll(req, res) {
    try {
      const deletedPosts = await PostService.deleteAll();
      res.json(deletedPosts);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default new PostController();
