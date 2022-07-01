const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (ext !== ".jpg" || ext !== ".jpeg" || ext !== ".png") {
    cb(null, new Error("File format not supported"), false);
  } else {
    cb(null, true);
  }
};

const Image1 = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 20,
  },
}).single("avatar");

// module.exports = imageUploader;

const Image2 = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 20,
  },
}).single("avatar");

const Image3 = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 20,
  },
}).single("avatar");

module.exports = { Image1, Image2, Image3 };
