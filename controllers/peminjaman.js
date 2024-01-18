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
  const { userId, bukuId, tanggalPinjaman, tanggalPengembalian, statusPeminjaman } = req.body;

  const available = Peminjaman.findOne({
    where: {
      [Op.and]: [
        {UserID: userId},
        {BukuID: bukuId}
      ]
    }
  })

  if (available) return res.status(400).json({ msg: "data udah ada"})

  try {
    await Peminjaman.create({
      UserID: userId,
      BukuID: bukuId,
      TanggalPeminjaman: tanggalPeminjaman,
      TanggalPengembalian: tanggalPengembalian,
      StatusPinjaman: statusPinjaman
    });
    res.status(201).json({ msg : "data berhasil dibuat"})
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
} 
