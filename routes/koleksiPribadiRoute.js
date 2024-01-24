import { getKolPribadi ,createKolPribadi } from "../controllers/koleksiPribadi.js";

import express from "express";

const router = express.Router();

router.get('/gKoleksiPribadi', getKolPribadi );
router.post('/cKoleksiPribadi', createKolPribadi);


export default router;
