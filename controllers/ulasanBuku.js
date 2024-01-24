import UlasanBuku from "../models/ulasanBuku.js";
import { Op } from "sequelize";


export const getUlasanBuku = async(req, res) => {
  try {
    const response = await UlasanBuku.findAll({})
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


export const createUlasanBuku = async(req, res) => {
  const ulasanBukuData = req.body;

  const available = await UlasanBuku.findOne({
    where: {
      [Op.and]: [
        {UserID: ulasanBukuData.UserID},
        {BukuID: ulasanBukuData.BukuID}
      ]
    }
  });
  if (available) return res.status(400).json({ msg: "data sudah ada" })

  try {
    await UlasanBuku.create({
      UserID: ulasanBukuData.UserID,
      BukuID: ulasanBukuData.BukuID,
      Ulasan: ulasanBukuData.Ulasan,
      Rating: ulasanBukuData.Rating
    })
    res.status(201).json({ msg: "data berhasil dibuat" })
  } catch (error) {
    res.status(500).json({ msg: error.message}) 
  }
}
