import jwt from "jsonwebtoken";
import UserModel from "../model/UserModel.js";

const checkUserAuth = async (req, res, next) => {
  let Token;
  console.log(req.headers);
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      Token = authorization.split(" ")[1];
      const { userID } = jwt.verify(Token, process.env.JWT_SECRET_KEY);
      console.log(userID);
      req.user = await UserModel.findById(userID).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({ status: "failed", message: "Unauthorized User" });
    }
  }
  if (!Token) {
    res.send({ status: "failed", message: "Unauthorized User, No Token" });
  }
};

export default checkUserAuth;
