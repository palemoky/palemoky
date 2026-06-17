# Landing Page

Palemoky 的个人主页 —— 纯静态、零构建，托管于 **Cloudflare Pages**。

> 本目录的内容与仓库根目录的 GitHub Profile `README.md` **独立维护**。

## 维护内容

所有页面文案、链接、项目、赞助方式都集中在一个文件里：

```
site/assets/js/content.js
```

改完直接刷新即可看到效果，无需任何构建步骤。

## 目录结构

```
site/
├── index.html              # 页面骨架（一般无需改动）
├── _headers                # Cloudflare Pages 缓存 / 安全头
└── assets/
    ├── css/styles.css      # 样式（极简 / 自动暗亮切换）
    ├── js/content.js       # ← 你要维护的内容都在这里
    ├── js/main.js          # 渲染逻辑（一般无需改动）
    └── img/                # 图片（含赞助二维码）
```

## 本地预览

任选其一，然后访问 http://localhost:8080

```bash
python3 -m http.server 8080 -d site
# 或
npx serve site
```

## 部署到 Cloudflare Pages

### 方式 A：连接 Git 仓库（推荐，自动部署）

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 选择本仓库，构建配置：
   - **Framework preset**: `None`
   - **Build command**: 留空
   - **Build output directory**: `site`
3. 保存并部署。之后每次 push 自动发布。

### 方式 B：Wrangler 直接上传

```bash
npm i -g wrangler
wrangler pages deploy site --project-name palemoky
```
