# OOUU.ORG 个人主页

一个简洁的个人主页，基于Cloudflare Workers部署，专为OOUU.ORG设计。

## 特性

- 🚀 基于Cloudflare Workers，全球CDN加速
- 📱 响应式设计，支持移动端
- 🎨 简洁现代的界面设计
- ⚡ 快速加载，无外部依赖
- 🔧 易于维护和自定义
- 🌐 支持自定义域名
- 🔍 安全可靠的IP地址显示

## 项目结构

```
├── index.html          # 主页面
├── assets/             # 静态资源
│   ├── css/           # 样式文件
│   │   ├── main.css   # 主样式
│   │   └── noscript.css # 无脚本样式
│   └── js/            # JavaScript文件
│       ├── jquery.min.js
│       ├── browser.min.js
│       ├── breakpoints.min.js
│       ├── util.js
│       └── main.js
├── images/            # 图片资源
│   └── oouuorg.jpg   # Logo图片
├── src/               # Workers源码
│   └── index.js       # Workers入口文件
├── wrangler.toml      # Workers配置
├── package.json       # 项目配置
├── DEPLOY.md          # 部署指南
└── README.md          # 项目说明
```

## 快速开始

### 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 访问 http://localhost:8788

### 部署到Cloudflare Workers

1. 安装Wrangler CLI：
```bash
npm install -g wrangler
```

2. 登录Cloudflare：
```bash
wrangler login
```

3. 部署：
```bash
npm run deploy
```

详细部署说明请查看 [DEPLOY.md](./DEPLOY.md)

## 自定义

### 修改内容
- 编辑 `index.html` 中的文字内容
- 替换 `images/oouuorg.jpg` 为你的logo
- 修改导航链接

### 修改样式
- 编辑 `assets/css/main.css` 调整样式
- 修改颜色、字体、布局等

### 添加功能
- 在 `src/index.js` 中添加自定义逻辑
- 在 `wrangler.toml` 中配置环境变量

## 性能优化

- ✅ 静态资源1年缓存
- ✅ HTML文件1小时缓存
- ✅ 启用CORS支持
- ✅ 错误处理机制
- ✅ 压缩的JavaScript和CSS

## 许可证

MIT License

## 支持

如有问题，请查看 [DEPLOY.md](./DEPLOY.md) 中的故障排除部分。
