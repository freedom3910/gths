<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>国泰酷跑俱乐部</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>国泰酷跑俱乐部</h1>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">首页</a></li>
            <li><a href="calendar.html">跑步日历</a></li>
            <li><a href="checkin.html">每日打卡</a></li>
            <li><a href="gallery.html">活动照片</a></li>
        </ul>
    </nav>
    <main>
        <h2>欢迎来到国泰酷跑俱乐部</h2>
        <p>在这里你可以组织跑步活动，记录每日跑步，并分享跑步照片。</p>
        <p>加入我们的俱乐部，享受跑步的乐趣，结交更多跑步爱好者！</p> <!-- 新添加的欢迎消息 -->
    </main>
    <footer>
        <p>© 2024 国泰酷跑俱乐部</p>
    </footer>
</body>
</html>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>国泰酷跑俱乐部</title>
    <link href='https://unpkg.com/fullcalendar@5.11.0/main.min.css' rel='stylesheet' />
    <script src='https://unpkg.com/fullcalendar@5.11.0/main.min.js'></script>
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
        #calendar {
            max-width: 1100px;
            margin: 0 auto;
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
        .checkin form {
            display: flex;
            flex-direction: column;
            max-width: 300px;
            margin: 0 auto;
        }
        .checkin input, .checkin button {
            margin-bottom: 1em;
            padding: 0.5em;
            font-size: 1em;
        }
        .checkin button {
            background-color: #ff3333;
            color: white;
            border: none;
            font-size: 1em;
            cursor: pointer;
        }
        .checkin button:hover {
            background-color: #e60000;
        }
        .checkin-list {
            margin-top: 2em;
        }
        .checkin-list ul {
            list-style-type: none;
            padding: 0;
        }
        .checkin-list li {
            padding: 0.5em;
            border-bottom: 1px solid #ccc;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
        .checkin-list img {
            max-width: 100px;
            margin-left: 1em;
        }
        @media (max-width: 768px) {
            header h1 {
                font-size: 2em;
            }
            nav a {
                font-size: 1em;
                margin: 0 0.5em;
            }
            .section h2 {
                font-size: 1.5em;
            }
            .checkin form {
                max-width: 100%;
            }
            .checkin-list img {
                max-width: 80px;
            }
        }
        @media (max-width: 480px) {
            header h1 {
                font-size: 1.5em;
            }
            nav a {
                font-size: 0.9em;
                margin: 0 0.3em;
            }
            .section h2 {
                font-size: 1.2em;
            }
            .checkin-list img {
                max-width: 60px;
            }
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
            <div id='calendar'></div>
        </section>
        <section id="checkin" class="section">
            <h2>每日跑步打卡</h2>
            <div class="checkin">
                <form id="checkin-form">
                    <input type="test" id="name" placeholder="网名" required>
                    <input type="date" id="date" required>
                    <input type="text" id="distance" placeholder="跑步距离 (公里)" required>
                    <input type="text" id="time" placeholder="跑步时间 (分钟)" required>
                    <input type="file" id="screenshot" accept="image/*" required>
                    <button type="submit">打卡</button>
                </form>
                <div class="checkin-list" id="checkin-list">
                    <h3>打卡记录</h3>
                    <ul id="checkin-records"></ul>
                </div>
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

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                locale: 'zh-cn',
                events: [
                    {
                        title: '跑步活动 1',
                        start: '2024-06-15'
                    },
                    {
                        title: '跑步活动 2',
                        start: '2024-06-20'
                    }
                ]
            });
            calendar.render();
        });

        // 打卡功能
        document.getElementById('checkin-form').addEventListener('submit', function(event) {
            event.preventDefault();
            var date = document.getElementById('date').value;
            var distance = document.getElementById('distance').value;
            var time = document.getElementById('time').value;
            var fileInput = document.getElementById('screenshot');
            var file = fileInput.files[0];

            if (file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var checkinRecord = document.createElement('li');
                    checkinRecord.innerHTML = `日期: ${date}, 距离: ${distance} 公里, 时间: ${time} 分钟 <img src="${e.target.result}" alt="截图">`;
                    document.getElementById('checkin-records').appendChild(checkinRecord);
                };
                reader.readAsDataURL(file);
            }

            // 清空表单
            document.getElementById('checkin-form').reset();
        });
    </script>
</body>
</html>
