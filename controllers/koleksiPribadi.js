import KoleksiPribadi from "../models/koleksiPribadi.js";


export const getKolPribadi = async(req, res) => {
  try {
    const response = await KoleksiPribadi.findAll({})
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


export const createKolPribadi = async(req, res) => {
  const kolpribadi = req.body;

  const available = await KoleksiPribadi.findOne({
    where: {
      BukuID: kolpribadi.BukuID
    }
  })
  if (available) return res.status(400).json({ msg: "data sudah ada" })

  try {
    await KoleksiPribadi.create({
      UserID: kolpribadi.UserID,
      BukuID: kolpribadi.BukuID
    })
    res.status(201).json({ msg: "data berhasil dibuat"})
  } catch (error) {
    res.status(500).json({ msg: error.message})
  }
}
