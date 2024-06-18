const express = require('express');
const multer = require('multer');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize('gths', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Checkin = sequelize.define('Checkin', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  distance: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  screenshot: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
});

sequelize.sync();

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

  Checkin.create({ username, distance, screenshot })
    .then(() => res.status(200).json({ success: true, message: '打卡成功' }))
    .catch(err => res.status(500).json({ success: false, message: '服务器错误' }));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
