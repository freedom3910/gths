const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 连接MongoDB数据库
mongoose.connect('mongodb://localhost:27017/gths', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// 定义Checkin模型
const checkinSchema = new mongoose.Schema({
    name: String,
    distance: Number,
    screenshot: String,
    date: { type: Date, default: Date.now }
});

const Checkin = mongoose.model('Checkin', checkinSchema);

// 设置multer用于文件上传
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 处理打卡数据的POST请求
app.post('/checkin', upload.single('screenshot'), async (req, res) => {
  const { name, distance } = req.body;
  const screenshot = req.file.path;

  const checkin = new Checkin({ name, distance, screenshot });
  try {
    await checkin.save();
    res.status(201).send('打卡成功');
  } catch (err) {
    res.status(400).send('打卡失败');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
