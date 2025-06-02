const router = require("express").Router();
// const otherUserValidation = require("../Middlewares/AuthValidation.js");
const { signup,login} = require("../Controller/AuthController");
const {signupValidation,loginValidation} = require("../Middlewares/AuthValidation.js");


router.post("/login",loginValidation,login);
router.post("/signup",signupValidation,signup);

module.exports = router;