import { createBuku, getBuku, updateBuku } from "../controllers/buku.js";
import express from "express";

import { IsAdmin } from "../middleware/authUser.js";
const router = express.Router();

router.get('/buku', getBuku, IsAdmin)
router.post('/createbuku', createBuku);
router.patch('/updatebuku/:id', updateBuku);


export default router;
