const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/gths', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const CheckinSchema = new mongoose.Schema({
  username: String,
  distance: Number,
  screenshot: String,
  date: { type: Date, default: Date.now }
});

const Checkin = mongoose.model('Checkin', CheckinSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post('/checkin', upload.single('screenshot'), (req, res) => {
  const { username, distance } = req.body;
  const screenshot = req.file.filename;

  const newCheckin = new Checkin({ username, distance, screenshot });
  newCheckin.save()
    .then(() => res.status(200).json({ success: true, message: '打卡成功' }))
    .catch(err => res.status(500).json({ success: false, message: '服务器错误' }));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
