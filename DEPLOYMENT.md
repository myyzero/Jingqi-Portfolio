# 🚀 作品集网站部署指南

这是一个完整的部署指南，帮助你将作品集网站上线。

---

## 📋 部署前准备

### 1. 确保代码在Git仓库中

如果还没有初始化Git：

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 2. 在GitHub创建仓库

1. 访问 [github.com](https://github.com) 并登录
2. 点击右上角 "+" → "New repository"
3. 输入仓库名称（例如：`portfolio`）
4. 点击 "Create repository"

### 3. 将代码推送到GitHub

```bash
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

---

## 🌟 方案一：Vercel (推荐 - 最简单)

**优点：**
- ✅ 零配置，自动检测Vite项目
- ✅ 超快的全球CDN
- ✅ 自动HTTPS
- ✅ 每次推送自动部署
- ✅ 免费的自定义域名支持

**步骤：**

1. **访问 [vercel.com](https://vercel.com)**
   - 点击 "Sign Up" 用GitHub账号登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择你的GitHub仓库
   - 点击 "Import"

3. **配置项目（通常自动完成）**
   - Framework Preset: `Vite`
   - Build Command: `pnpm build` 或 `npm run build`
   - Output Directory: `dist`
   - Install Command: `pnpm install` 或 `npm install`

4. **部署**
   - 点击 "Deploy"
   - 等待2-3分钟

5. **完成！**
   - 你会获得一个网址：`https://your-project.vercel.app`
   - 可以在设置中绑定自定义域名

**之后的更新：**
- 只需要 `git push`，Vercel会自动重新部署

---

## 🔷 方案二：Netlify

**优点：**
- ✅ 简单易用
- ✅ 免费的表单处理
- ✅ 自动HTTPS
- ✅ 持续部署

**步骤：**

1. **访问 [netlify.com](https://netlify.com)**
   - 用GitHub账号注册/登录

2. **导入项目**
   - 点击 "Add new site" → "Import an existing project"
   - 选择 "Deploy with GitHub"
   - 授权并选择你的仓库

3. **配置构建设置**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - 点击 "Deploy site"

4. **完成！**
   - 获得网址：`https://random-name.netlify.app`
   - 可以在 "Site settings" → "Change site name" 修改名称
   - 可以绑定自定义域名

---

## 📄 方案三：GitHub Pages

**优点：**
- ✅ 完全免费
- ✅ 与GitHub集成
- ✅ 适合开源项目

**步骤：**

1. **启用GitHub Pages**
   - 进入你的GitHub仓库
   - 点击 "Settings" → "Pages"
   - Source选择 "GitHub Actions"

2. **推送代码**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push
   ```

3. **等待部署**
   - 进入仓库的 "Actions" 标签
   - 查看部署进度
   - 完成后会显示绿色✓

4. **访问网站**
   - 你的网站将在：`https://你的用户名.github.io/仓库名/`
   - 如果使用自定义域名，在 Settings → Pages 中配置

**注意：** 如果你的网站在子路径（如 `github.io/portfolio`），需要修改 `vite.config.ts`：

```typescript
base: '/你的仓库名/',
```

---

## 🎨 方案四：Cloudflare Pages

**优点：**
- ✅ 全球最快的CDN
- ✅ 无限带宽
- ✅ 免费

**步骤：**

1. 访问 [pages.cloudflare.com](https://pages.cloudflare.com)
2. 连接GitHub仓库
3. 配置：
   - Build command: `npm run build`
   - Build output directory: `dist`
4. 点击 "Save and Deploy"

---

## 🌐 绑定自定义域名

### Vercel
1. 进入项目 → Settings → Domains
2. 输入你的域名
3. 按照提示在域名注册商处添加DNS记录

### Netlify
1. Site settings → Domain management → Add custom domain
2. 按照提示配置DNS

### GitHub Pages
1. Settings → Pages → Custom domain
2. 输入域名并添加CNAME记录

---

## 🔧 本地测试生产构建

在部署前，建议先在本地测试：

```bash
# 构建项目
npm run build
# 或
pnpm build

# 预览构建结果（需要全局安装 serve）
npx serve dist
```

打开 `http://localhost:3000` 查看效果

---

## ✅ 部署检查清单

- [ ] 所有图片和资源都能正常加载
- [ ] 所有链接都能正常工作
- [ ] 在不同浏览器测试（Chrome, Firefox, Safari）
- [ ] 在移动设备上测试响应式设计
- [ ] 检查页面加载速度
- [ ] 确认所有动画效果正常
- [ ] 验证YouTube视频能正常播放
- [ ] 测试导航菜单功能

---

## 📊 推荐选择

| 平台 | 适合场景 | 难度 |
|------|---------|------|
| **Vercel** | 最佳选择，专业快速 | ⭐ 最简单 |
| **Netlify** | 需要表单功能 | ⭐ 简单 |
| **GitHub Pages** | 完全免费，开源项目 | ⭐⭐ 中等 |
| **Cloudflare Pages** | 需要最快速度 | ⭐⭐ 中等 |

---

## 🆘 常见问题

### 问：部署后看到空白页面？
答：检查浏览器控制台的错误信息，可能是路径配置问题。确认 `vite.config.ts` 中的 `base` 配置正确。

### 问：图片无法加载？
答：确保所有图片URL是完整的（包括 https://），Cloudinary的图片应该都能正常访问。

### 问：如何更新网站？
答：修改代码后，执行：
```bash
git add .
git commit -m "Update content"
git push
```
所有平台都会自动重新部署。

### 问：如何查看部署日志？
答：在各个平台的项目面板中都有 "Deployments" 或 "Build logs" 选项。

---

## 📞 需要帮助？

如果遇到问题：
1. 查看平台的官方文档
2. 检查GitHub Actions/部署日志
3. 在GitHub Issues中搜索类似问题

祝你部署顺利！🎉
