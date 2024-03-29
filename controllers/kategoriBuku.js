import KatBuku from "../models/kategoriBuku.js";



export const createKategoriBuku = async(req, res) => {
  const { namaKategori } = req.body;
  
  const available = KatBuku.findOne({
    where: {
      NamaKategori: namaKategori 
    }
  })
  if (available) return res.status(400).json({ msg: "data sudah ada"})

  try {
    await KatBuku.create({
      NamaKategori: namaKategori
    })
    res.status(201).json({ msg: "data berhasil dibuat"})
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
