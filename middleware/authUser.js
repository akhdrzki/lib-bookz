import User from "../models/user.js";

export const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.username) {
    console.log('lol')
  }
} 

export const IsAdmin = async(req, res, next) => {
  if (req.body.Role === "Admin") {
    next();
  }
  
  return res.status(401).json({ msg: "unAuthorized"})
}
