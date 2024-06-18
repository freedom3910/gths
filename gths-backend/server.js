const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());

app.post('/checkin', upload.single('screenshot'), (req, res) => {
    const { username, distance } = req.body;
    const screenshot = req.file;

    if (!username || !distance || !screenshot) {
        return res.status(400).json({ success: false, message: '缺少必要参数' });
    }

    // 在这里将数据存储到数据库中，例如MongoDB
    // 也可以将文件存储到服务器或者云存储，例如AWS S3

    res.status(200).json({ success: true, message: '打卡成功' });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
