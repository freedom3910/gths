<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>国泰酷跑俱乐部</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #fff;
            color: #333;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #ff3333;
            color: white;
            text-align: center;
            padding: 1em 0;
        }
        header h1 {
            margin: 0;
            font-size: 2.5em;
        }
        nav {
            background-color: #fff;
            display: flex;
            justify-content: center;
            padding: 1em 0;
            box-shadow: 0 4px 2px -2px gray;
        }
        nav a {
            margin: 0 1em;
            text-decoration: none;
            color: #ff3333;
            font-size: 1.2em;
        }
        .content {
            padding: 2em;
        }
        .section {
            margin-bottom: 3em;
        }
        .section h2 {
            font-size: 2em;
            color: #ff3333;
            border-bottom: 2px solid #ff3333;
            padding-bottom: 0.5em;
        }
        .calendar, .checkin, .photos, .comments {
            margin-top: 1em;
        }
        footer {
            background-color: #ff3333;
            color: white;
            text-align: center;
            padding: 1em 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
        footer p {
            margin: 0;
        }
        .photo-gallery img {
            width: 100%;
            max-width: 300px;
            margin: 1em;
        }
        .comments form {
            display: flex;
            flex-direction: column;
        }
        .comments input, .comments textarea {
            margin-bottom: 1em;
            padding: 0.5em;
            font-size: 1em;
        }
        .comments button {
            padding: 0.5em;
            background-color: #ff3333;
            color: white;
            border: none;
            font-size: 1em;
            cursor: pointer;
        }
        .comments button:hover {
            background-color: #e60000;
        }
    </style>
</head>
<body>
    <header>
        <h1>国泰酷跑俱乐部</h1>
    </header>
    <nav>
        <a href="#events">活动</a>
        <a href="#checkin">每日打卡</a>
        <a href="#photos">活动照片</a>
        <a href="#comments">留言板</a>
    </nav>
    <div class="content">
        <section id="events" class="section">
            <h2>跑步活动</h2>
            <div class="calendar">
                <!-- 跑步活动日历将嵌入在此处 -->
                <p>跑步活动日历功能开发中...</p>
            </div>
        </section>
        <section id="checkin" class="section">
            <h2>每日跑步打卡</h2>
            <div class="checkin">
                <!-- 每日跑步打卡系统将嵌入在此处 -->
                <p>每日跑步打卡功能开发中...</p>
            </div>
        </section>
        <section id="photos" class="section">
            <h2>活动照片</h2>
            <div class="photos">
                <!-- 活动照片展示区域 -->
                <div class="photo-gallery">
                    <img src="photo1.jpg" alt="跑步活动照片1">
                    <img src="photo2.jpg" alt="跑步活动照片2">
                    <img src="photo3.jpg" alt="跑步活动照片3">
                </div>
            </div>
        </section>
        <section id="comments" class="section">
            <h2>留言板</h2>
            <div class="comments">
                <!-- 留言板功能 -->
                <form>
                    <input type="text" placeholder="您的姓名" required>
                    <textarea placeholder="留言内容" required></textarea>
                    <button type="submit">提交</button>
                </form>
            </div>
        </section>
    </div>
    <footer>
        <p>&copy; 2024 国泰酷跑俱乐部. 版权所有.</p>
    </footer>
</body>
</html>
