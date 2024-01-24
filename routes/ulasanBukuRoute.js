import { createUlasanBuku, getUlasanBuku } from "../controllers/ulasanBuku.js";

import express from "express";

const router = express.Router();

router.get('/gUlasan', getUlasanBuku);
router.post('/cUlasan', createUlasanBuku);

export default router;
