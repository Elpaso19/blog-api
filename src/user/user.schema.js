import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import configService from "../lib/classess/config.class.js"

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isActive: {
      type: Boolean,
      defualt: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save",async function(next){
if(this.isModified("password")){
    this.password= await bcrypt.hash(this.password,parseInt(configService.getOrThrow("SALT_ROUNDS")))
}
})

const User = model("User", UserSchema);

export default User;
