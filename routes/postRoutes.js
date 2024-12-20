import {Router} from "express";
import { createPost, deletePost, fetchPosts, showPost, updatePost } from "../Controller/PostController.js";

const router = Router();
router.get("/:id", showPost);
router.get("/", fetchPosts);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);


export default router;