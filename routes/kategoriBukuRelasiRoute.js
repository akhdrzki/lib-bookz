import { getKategoriBukuRelasi, createKategoriBukuRelasi } from "../controllers/kategoriBukuRelasi.js";

import express from "express";

const router = express.Router();

router.get('/gKategoriRelasi', getKategoriBukuRelasi);
router.post('/cKategoriRelasi', createKategoriBukuRelasi);

export default router;
