// HelloWorld 网站
// 浏览器访问时显示"Hello World！我是王璐迪，我的第一个AI开发的网站"
// 同时显示当前服务器时间

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // 当前服务器时间（东八区）
  const now = new Date();
  const timeStr = now.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });

  res.end(`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的第一个AI开发的网站</title>
  <style>
    body {
      font-family: system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
      margin: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
    }
    .card {
      background: rgba(255, 255, 255, 0.15);
      padding: 48px 64px;
      border-radius: 16px;
      text-align: center;
      backdrop-filter: blur(8px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }
    h1 { margin: 0 0 12px; font-size: 32px; }
    p { margin: 6px 0; font-size: 18px; opacity: 0.95; }
    .time { margin-top: 18px; font-size: 15px; opacity: 0.8; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello World！我是王璐迪</h1>
    <p>我的第一个AI开发的网站</p>
    <p class="time">当前服务器时间：${timeStr}</p>
  </div>
</body>
</html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('服务器已启动：http://localhost:' + PORT);
});
