const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// 1. Configure Cloudinary with credentials from your .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 2. Define Cloudinary Storage (Replaces diskStorage)
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "expense_tracker_uploads", // The folder name in your Cloudinary dashboard
    allowed_formats: ["jpg", "jpeg", "png"], // This replaces your fileFilter logic
    // transformation: [{ width: 500, height: 500, crop: "limit" }], // Optional: Resize images automatically
  },
});

// 3. Initialize Multer with Cloudinary Storage
const upload = multer({ storage: storage });

module.exports = upload;

// const multer = require("multer");

// // Configure storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, `uploads/`);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// // File Filter
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [`image/jpeg`, `image/jpg`, `img/png`];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error(`Only .jpeg, .jpg and .png formats are allowed`), false);
//   }
// };

// const upload = multer({ storage, fileFilter });

// module.exports = upload;
