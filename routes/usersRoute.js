import { getUsers, createUser, Login } from "../controllers/users.js";
import express from "express"
const router = express.Router();

router.get("/users", getUsers);
router.post("/signup", createUser);
router.post("/signin", Login );

export default router;
