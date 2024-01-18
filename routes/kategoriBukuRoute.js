import { createKategoriBuku } from "../controllers/kategoriBuku.js";
import express from "express";

const router = express.Router();

router.post("/createKatbuku", createKategoriBuku)

export default router;
