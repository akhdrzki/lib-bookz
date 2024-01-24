import KatBukuRelasi from "../models/kategoriBukuRelasi.js";

export const getKategoriBukuRelasi = async(req, res) => {
  try {
    const response = await KatBukuRelasi.findAll({})
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}


export const createKategoriBukuRelasi = async(req, res) => {
  const kategoriRelasi = req.body;

  const available = await KatBukuRelasi.findOne({
    where: {
      BukuID: kategoriRelasi.BukuID
    }
  })

  if (available) return res.status(400).json({ msg: "data sudah ada" })

  try {
    await KatBukuRelasi.create({
      BukuID: kategoriRelasi.BukuID,
      KategoriID: kategoriRelasi.KategoriID
    })
    res.status(201).json({ msg: "data berhasil dibuat" })
  } catch (error) {
    res.status(500).json({ msg: error.message }) 
  }
}
