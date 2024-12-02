import {Router} from "express";
import { createUser, updateUser, fetchUsers, showUser, deleteUser } from "../Controller/UserController.js";
const router = Router();
router.get("/:id", showUser);
router.get("/", fetchUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


export default router;