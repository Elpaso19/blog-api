import jwt from "jsonwebtoken";
import configService from "./config.class.js";
import { convertHumanReadableTimeToMilliseconds } from "../utils.js";

class JwtService {
  generateAuthenticationToken(payload) {
    return jwt.sign(payload, configService.getOrThrow("JWT_SECRET"), {
      expriresIn: convertHumanReadableTimeToMilliseconds(parseInt(configService.getOrThrow("JWT_EXPIRES_IN"))),
    });
  }

  verifyAuthenticationToken(token) {
    return jwt.verify(token, configService.getOrThrow("JWT_SECRET"));
  }
}

export default new JwtService();
