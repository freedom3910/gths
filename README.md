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
        <nav>
            <ul>
                <li><a href="index.html">首页</a></li>
                <li><a href="calendar.html">跑步日历</a></li>
                <li><a href="checkin.html">每日打卡</a></li>
                <li><a href="gallery.html">活动照片</a></li>
                <li><a href="messageboard.html">留言板</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>欢迎来到国泰酷跑俱乐部</h2>
        <p>在这里你可以组织跑步活动，记录每日跑步，并分享跑步照片。</p>
        <p>加入我们的俱乐部，享受跑步的乐趣，结交更多跑步爱好者！</p>
        <img src="images/photo1.jpeg" alt="Running Club">
    </main>
    <footer>
        <p>© 2024 国泰酷跑俱乐部</p>
    </footer>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>跑步日历 - 国泰酷跑俱乐部</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>国泰酷跑俱乐部</h1>
        <nav>
            <ul>
                <li><a href="index.html">首页</a></li>
                <li><a href="calendar.html">跑步日历</a></li>
                <li><a href="checkin.html">每日打卡</a></li>
                <li><a href="gallery.html">活动照片</a></li>
                <li><a href="messageboard.html">留言板</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>跑步日历</h2>
        <p>查看并参加即将到来的跑步活动。</p>
        <div id="calendar"></div>
    </main>
    <footer>
        <p>© 2024 国泰酷跑俱乐部</p>
    </footer>
    <script src="scripts/calendar.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>每日打卡 - 国泰酷跑俱乐部</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>国泰酷跑俱乐部</h1>
        <nav>
            <ul>
                <li><a href="index.html">首页</a></li>
                <li><a href="calendar.html">跑步日历</a></li>
                <li><a href="checkin.html">每日打卡</a></li>
                <li><a href="gallery.html">活动照片</a></li>
                <li><a href="messageboard.html">留言板</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>每日打卡</h2>
        <form id="checkin-form">
            <label for="date">日期:</label>
            <input type="date" id="date" name="date" required>
            <label for="distance">跑步距离 (公里):</label>
            <input type="number" id="distance" name="distance" required>
            <label for="screenshot">上传截图:</label>
            <input type="file" id="screenshot" name="screenshot" accept="image/*" required>
            <button type="submit">提交</button>
        </form>
        <div id="checkin-results"></div>
    </main>
    <footer>
        <p>© 2024 国泰酷跑俱乐部</p>
    </footer>
    <script src="scripts/checkin.js"></script>
</body>
</html>

