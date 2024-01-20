import Peminjaman from "../models/peminjaman.js";
import { Sequelize, Op } from "sequelize";


export const getPeminjaman = async(req, res) => {
  try {
    const response = await Peminjaman.findAll()
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: "data tak ditemukan" })
  }
}


export const createPeminjaman = async(req, res) => {
  const peminjaman = req.body;

  const available = await Peminjaman.findOne({
    where: {
      [Op.and]: [
        {BukuID: peminjaman.BukuID}
      ]
    }
  })

 
  if(available) return res.status(400).json({msg : "data sudah ada"})
  try {
    await Peminjaman.create({
      UserID: peminjaman.UserID,
      BukuID: peminjaman.BukuID,
      TanggalPeminjaman: peminjaman.TanggalPeminjaman,
      TanggalPengembalian: peminjaman.TanggalPengembalian,
      StatusPinjaman: peminjaman.StatusPinjaman
    });
    res.status(201).json({ msg : "data berhasil dibuat"})
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
} 
