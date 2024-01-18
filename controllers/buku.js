import Buku from "../models/buku.js";
import { Op } from "sequelize";


export const getBuku = async(req, res) => {
  try {
    const response = await Buku.findAll({});
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ msg: "ckptw"})
  }
}


export const createBuku = async(req, res) => {
  const { judul, penulis, penerbit, tahunTerbit } = req.body;
  
  const checkBuku = await Buku.findOne({
    where: {
      [Op.and]: [
        {Judul: judul},
        {Penulis: penulis}
      ]
    }
  });

  if (checkBuku) res.status(400).json({ msg: "buku sudah ada"})
  try {
    await Buku.create({
      Judul: judul,
      Penulis: penulis, 
      Penerbit: penerbit,
      TahunTerbit: tahunTerbit
    });
    res.status(201).json({ msg: "berhasil create buku"})
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


export const updateBuku = async(req, res) => {
  const { penulis, penerbit, tahunTerbit } = req.body;
  
  const { id } = req.params;  

  const checkBuku = await Buku.findOne({
    where: {
      Judul: id
    }
  })
  if (!checkBuku) res.status(404).json({ msg: "data tak ditemukan" })
  try {
    await Buku.update({
      Penulis: penulis,
      Penerbit: penerbit,
      TahunTerbit: tahunTerbit
    }, {
        where: {
          Judul: checkBuku.Judul
        }
      });
    res.status(201).json({ msg: "berhasil update" })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
