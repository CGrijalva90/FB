const express = require("express");
const {
  register,
  activateAccount,
  login,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
} = require("../controllers/user");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendverification", authUser, sendVerification);
router.post("/finduser", findUser);
router.post("/sendresetcode", sendResetPasswordCode);
router.post("/validateresetcode", validateResetCode);
router.post("/changepassword", changePassword);

module.exports = router;
