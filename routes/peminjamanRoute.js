import { createPeminjaman, getPeminjaman } from "../controllers/peminjaman.js";

import express from "express";

const router = express.Router();

router.get('/getPeminjaman', getPeminjaman)
router.post('/peminjaman', createPeminjaman)

export default router;
