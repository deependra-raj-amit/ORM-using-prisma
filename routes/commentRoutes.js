import {Router} from "express";

import { createComment, deleteComment, fetchComments, showComment, updateComment } from "../Controller/CommentController.js";

const router = Router();
router.get("/:id", showComment);
router.get("/", fetchComments);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);


export default router;