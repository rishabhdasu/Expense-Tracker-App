const express = require("express");
const { protect, validatePassword } = require("../middleware/authMiddlewares");

const {
  registerUser,
  loginUser,
  getUserInfo,
  updateUserProfile,
  uploadImageController,
} = require("../controllers/authController");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/register", validatePassword, registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);
router.put("/updateUser", protect, validatePassword, updateUserProfile);
router.post("/upload-image", upload.single("image"), uploadImageController);

module.exports = router;
