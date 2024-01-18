import User from "../models/user.js";

export const validateAccess = async(req, res, next) => {
  try {
    console.log(req.session.userId);
    if (req.session.userId) return res.status(200).json({ msg: "found session" })
  } catch (error) {
    res.status(400).json({ msg: "silahkan login dulu" }) 
  } 
}

export const IsAdmin = async(req, res, next) => {
  if (req.body.Role === "Admin") {
    next();
  }
  
  return res.status(401).json({ msg: "unAuthorized"})
}
