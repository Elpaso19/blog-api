import { UnAuthorizedException } from "../lib/classes/errors.class.js";
import jwtService from "../lib/classes/jwt.class.js";

export default function authMiddleware(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new UnAuthorizedException("Invalid or missing token");
    }

    req.user = jwtService.verifyAuthenticationToken(token);
    next();
  } catch (error) {
    next(error);
  }
}
