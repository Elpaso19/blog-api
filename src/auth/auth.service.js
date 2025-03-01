import { signInSchema, signUpSchema } from "./auth.request.js";
import * as userService from "../user/user.service.js";
import {
  ConflitException,
  NotFoundException,
  UnAuthorizedException,
  ValidationException,
} from "../lib/classes/errors.class.js";
import jwtService from "../lib/classes/jwt.class.js";
import bcrypt from "bcryptjs";

export const authenticateUser = async (payload) => {
  let user;

  const emailRegex = /^[^\s@]+[^\s@].[^\s@]+$/;

  if (emailRegex.test(identifier)) {
    user = await userService.findUserByEmail({ email: payload.identifier });
  } else {
    user = await userService.findUserByUsername({
      username: payload.identifier,
    });
  }

  if (!user) {
    throw new NotFoundException(
      "Invalid credentials. please check your credentials and try again."
    );
  }

  isValidPassword = await bcrypt.compare(payload.password, user.password);

  if (!isValidPassword) {
    throw new UnAuthorizedException(
      "Invalid credentials.pleasw check your credentials and try again."
    );
  }
  return jwtService.generateAuthenticationToken({
    id: user.id,
    username: user.username,
    email: user.email,
    role:user.role
  });
};

export const creatNewUserRecord = async (payload) => {
  const user = await userService.findUser({
    username: payload.username,
    email: payload.email,
  });
  if (user) {
    throw new ConflitException("user already exist. please login..");
  }

  const newUser = await userService.createUser(payload);
  return newUser;
};
