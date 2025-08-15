# 部署指南

## 前置要求

1. 安装 Node.js (>= 18.0.0)
2. 注册 Cloudflare 账户
3. 安装 Wrangler CLI

```bash
npm install -g wrangler
```

## 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 访问 http://localhost:8788

## 部署到 Cloudflare Workers

### 1. 登录 Cloudflare

```bash
wrangler login
```

### 2. 部署到生产环境

```bash
npm run deploy:production
```

### 3. 部署到测试环境

```bash
npm run deploy:staging
```

### 4. 快速部署

```bash
npm run deploy
```

## 自定义域名

部署完成后，可以在 Cloudflare Dashboard 中：

1. 进入 Workers & Pages
2. 选择你的项目
3. 在 "Custom domains" 部分添加你的域名
4. 配置 DNS 记录

## 环境变量

如果需要添加环境变量，可以在 `wrangler.toml` 中添加：

```toml
[vars]
MY_VAR = "value"
```

## 故障排除

### 常见问题

1. **部署失败**: 检查 Cloudflare 账户权限
2. **资源404**: 确保所有文件都在正确的目录中
3. **CORS错误**: 检查 `src/index.js` 中的 CORS 配置

### 日志查看

```bash
wrangler tail
```

## 性能优化

- 静态资源已配置1年缓存
- HTML文件配置1小时缓存
- 启用了CORS支持
- 添加了错误处理

