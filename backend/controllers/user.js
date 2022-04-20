const User = require("../models/User");
const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation");
const bcrypt = require("bcrypt");
const { validate } = require("../models/User");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;
    3;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: "First name must be between 3 and 30 characters",
      });
    }

    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        message: "Last name must be between 3 and 30 characters",
      });
    }
    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    const check = await User.findOne({ email });

    if (check) {
      return res.status(400).json({
        message:
          "The email address already exists, try with a different email address",
      });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);
    const tempUsername = first_name + last_name;
    let newUsername = await validateUsername(tempUsername);

    const user = await new User({
      first_name,
      last_name,
      email,
      password: cryptedPassword,
      username: newUsername,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
