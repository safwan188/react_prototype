const db = require("../models");
const config = require("../config/authConfig");
const User = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (userData) => {
  // Save User to Database
  const user = new User({
    username: userData.username,
    email: userData.email,
    password: bcrypt.hashSync(userData.password, 8)
  });

  try {
    await user.save();
    return { message: "User was registered successfully!" };
  } catch (error) {
    throw new Error(error);
  }
};

exports.signin = async (userData) => {
  try {
    const user = await User.findOne({
      username: userData.username
    }).exec();

    if (!user) {
      throw new Error("User Not found.");
    }

    const passwordIsValid = bcrypt.compareSync(
      userData.password,
      user.password
    );

    if (!passwordIsValid) {
      throw new Error("Invalid Password!");
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });

    return {
      id: user._id,
      username: user.username,
      email: user.email,
      accessToken: token
    };
  } catch (error) {
    throw new Error(error);
  }
};
