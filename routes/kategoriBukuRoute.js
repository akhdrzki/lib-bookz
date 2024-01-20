import { createKategoriBuku, getKategoriBuku } from "../controllers/kategoriBuku.js";
import express from "express";

const router = express.Router();

router.get('/gKategoriBuku', getKategoriBuku);
router.post("/cKategoribuku", createKategoriBuku);

export default router;
