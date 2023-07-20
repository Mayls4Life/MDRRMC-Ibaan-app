const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const originalName = path.parse(file.originalname).name;
    const fileExtension = path.extname(file.originalname);
    const fileName = originalName + fileExtension;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

// Handle POST requests to '/upload/uploadFiles'
app.post("/upload/uploadFiles", upload.single("file"), (req, res) => {
  const name = req.body.name;
  const file = req.file;

  // Perform any necessary processing with the uploaded file

  res.status(200).json({ message: "File uploaded successfully" });
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
