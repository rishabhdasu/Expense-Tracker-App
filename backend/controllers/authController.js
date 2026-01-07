const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT Token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register User
exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body;

  // Validation: check for missing fields
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: " Uer already exists" });
    }
    // Create the User
    const user = await User.create({
      fullName,
      email,
      password,
      profileImageUrl,
    });
    return res.status(201).json({
      id: user._id,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
      },
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in registering user",
      error: err.message,
    });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    return res.status(200).json({
      id: user._id,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
      },
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({
      message: "Login error",
      error: err.message,
    });
  }
};

// Get User Info
exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: "User not found",
      error: err.message,
    });
  }
};

exports.updateUserProfile = async (req, res) => {
  const { fullName, profileImageUrl, password } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (fullName) {
      user.fullName = fullName;
    }
    if (profileImageUrl) {
      user.profileImageUrl = profileImageUrl;
    }
    if (password) {
      const passwordError = validatePassword(password);
      if (passwordError) {
        return res.status(400).json({
          message: passwordError,
        });
      }
      user.password = password;
    }

    await user.save();

    return res.status(200).json({
      message: "Profile updated successfully",
      user: {
        _id: user._id,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
