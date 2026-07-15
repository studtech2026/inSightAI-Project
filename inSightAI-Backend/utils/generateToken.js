import jwt from "jsonwebtoken";
import { JWT } from "./constants.js";

const generateToken = (userId) => {
  return jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: JWT.EXPIRES_IN,
    }
  );
};

export default generateToken;   