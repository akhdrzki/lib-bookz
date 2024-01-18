import User from "../models/user.js";
import { Op } from "sequelize";





export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll({
          attributes: ["userId", "username", "nama_lengkap", "alamat"] 
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const createUser = async(req, res) => {
  const { username, password, confPassword, email, nama_lengkap, alamat, role} = req.body;
  if (password != confPassword) return res.status(400).json({ msg: "password harus sama" })
  const userCheck = await User.findOne({
    where: {
      Email: email
    }
  })

  if (userCheck) return res.status(400).json({ msg: "user sudah ada" })
  try {
    await User.create({
      Username: username,
      Password: password,
      Email: email,
      Nama_lengkap: nama_lengkap,
      Alamat: alamat,
      Role: role
    });

    res.status(201).json({
      msg: "register berhasil"
    })
  } catch (error) {
    res.status(400).json({ msg: error.message})
  }
}


export const Login = async(req, res) => {
  const user = await User.findOne({
    where: {
      [Op.and]: [
        {Username: req.body.username},
        {Password: req.body.password},
        {Email: req.body.email},
      ] 
    }
  });
  if (!user) return res.status(400).json({ msg: "user tidak ditemukan" })
  
  try {
    if (user.Password !== req.body.password && user.Username !== req.body.username && user.Email !== req.body.email) {
      return res.status(400).json({ msg: "password salah" })
    }

    res.status(200).json({  
      msg: "berhasil login"
    })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


