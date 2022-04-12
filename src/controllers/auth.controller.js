import User from "../models/User.model.js";
import { registerValidation } from "../utils/validation.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
const register = async (req, res) => {
  // validate before create user
  const { error } = registerValidation(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  // checking email is already
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(422).send("Email already exist");

  // hash password and passwordConfirmation
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const hashedPasswordConfirmation = await bcrypt.hash(req.body.passwordConfirmation, salt);

  // Create user
  await User.create({ name: req.body.name, email: req.body.email, password: hashedPassword, passwordConfirmation: hashedPasswordConfirmation })
    .then((user) => res.status(202).send(user))
    .catch((error) => res.status(404).send(error.message));
};

// Login
const login = async (req, res) => {
  // checking email is exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(422).send("Email is not found");

  // checking password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(422).send("Invalid password");

  // Create and assign a toker
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
};

export { register, login };
