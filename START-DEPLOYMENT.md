# 🚀 开始部署 - 逐步指南

跟随这个指南，10分钟内完成部署！

---

## 📍 当前位置：准备开始

## ✅ 步骤 1: 本地测试（5分钟）

在部署前，先确保网站在本地正常运行。

### 1.1 构建项目

打开终端（Terminal），在项目目录下运行：

```bash
npm run build
```

**或者如果使用pnpm：**

```bash
pnpm build
```

**期望结果：**
- 看到 "build complete" 消息
- 创建了 `dist` 文件夹

**如果遇到错误：**
```bash
# 清理并重新安装依赖
rm -rf node_modules
npm install
# 然后再次构建
npm run build
```

### 1.2 预览构建结果

```bash
npx serve dist
```

**期望结果：**
- 终端显示：`Local: http://localhost:3000`
- 在浏览器打开这个地址
- 检查网站是否正常显示

**快速检查清单：**
- [ ] 首页正常显示
- [ ] 导航菜单可以点击
- [ ] 项目图片正常加载
- [ ] YouTube视频弹窗正常工作
- [ ] 动画效果流畅

**如果一切正常，按 Ctrl+C 停止预览，继续下一步！**

---

## 📦 步骤 2: 准备GitHub仓库（5分钟）

### 2.1 在GitHub创建仓库

1. **打开浏览器，访问：** [https://github.com/new](https://github.com/new)

2. **填写仓库信息：**
   - Repository name: `portfolio` （或你喜欢的名字）
   - Description: `My Interactive & Creative Technology Portfolio`
   - 选择 **Public** （推荐，可以使用免费的部署服务）
   - **不要**勾选 "Initialize this repository with a README"
   - **不要**添加 .gitignore 或 license（我们已经有了）

3. **点击 "Create repository"**

4. **复制仓库URL**
   - 你会看到类似：`https://github.com/你的用户名/portfolio.git`
   - 保存这个URL，马上会用到

### 2.2 初始化本地Git仓库

在终端中运行（确保在项目根目录）：

```bash
# 初始化Git（如果还没有）
git init

# 添加所有文件
git add .

# 创建第一次提交
git commit -m "Initial commit: Portfolio website ready for deployment"
```

### 2.3 连接到GitHub

**将下面的URL替换成你自己的仓库URL：**

```bash
git remote add origin https://github.com/你的用户名/portfolio.git
git branch -M main
git push -u origin main
```

**期望结果：**
- 终端显示上传进度
- 最后显示 "Branch 'main' set up to track remote branch 'main' from 'origin'"

**刷新GitHub页面，你应该能看到所有文件！**

---

## 🌟 步骤 3: 部署到Vercel（5分钟）

### 3.1 访问Vercel并登录

1. **打开浏览器，访问：** [https://vercel.com](https://vercel.com)

2. **点击 "Sign Up"（如果没有账号）或 "Log In"**

3. **选择 "Continue with GitHub"**
   - 用GitHub账号登录
   - 授权Vercel访问你的GitHub

### 3.2 创建新项目

1. **在Vercel首页，点击 "Add New..."**
   - 选择 "Project"

2. **导入Git仓库**
   - 在列表中找到你的 `portfolio` 仓库
   - 点击 "Import"

### 3.3 配置项目

Vercel会自动检测到Vite项目，你应该看到：

**✅ 自动配置（通常不需要修改）：**
- Framework Preset: `Vite`
- Root Directory: `./`
- Build Command: 自动检测
- Output Directory: `dist`
- Install Command: 自动检测

**如果需要手动设置：**
- Build Command: `npm run build`
- Output Directory: `dist`

### 3.4 部署！

1. **点击 "Deploy"**

2. **等待构建（2-3分钟）**
   - 你会看到构建日志滚动
   - 进度条显示部署进度

3. **🎉 部署完成！**
   - 看到庆祝动画
   - 显示你的网站URL

---

## 🎊 步骤 4: 访问你的网站！

### 你的网站地址：

```
https://your-project-name.vercel.app
```

**立即测试：**
1. 点击Vercel提供的链接
2. 在手机上访问
3. 分享给朋友测试

### 网站现在拥有：
- ✅ 独立的公开网址
- ✅ 免费的HTTPS安全连接
- ✅ 全球CDN加速
- ✅ 自动部署（每次Git推送）

---

## 🔧 步骤 5: 自定义设置（可选）

### 5.1 更改项目名称

在Vercel项目页面：
1. 点击 "Settings"
2. 在 "Project Name" 下修改名称
3. 点击 "Save"
4. 你的新网址：`https://新名称.vercel.app`

### 5.2 绑定自定义域名（可选）

如果你有自己的域名：
1. 在Vercel项目中点击 "Settings" → "Domains"
2. 输入你的域名（如 `www.yourname.com`）
3. 按照提示添加DNS记录
4. 等待DNS生效（通常几分钟到1小时）

---

## 🔄 未来更新网站

每次修改内容后：

```bash
# 1. 保存文件后，提交更改
git add .
git commit -m "描述你做的修改"

# 2. 推送到GitHub
git push

# 3. Vercel会自动检测并重新部署（1-2分钟）
```

**查看部署进度：**
- 访问Vercel项目页面
- 点击 "Deployments"
- 查看最新的部署状态

---

## 📊 部署成功检查清单

- [ ] ✅ 本地构建成功
- [ ] ✅ 代码推送到GitHub
- [ ] ✅ Vercel部署成功
- [ ] ✅ 网站可以访问
- [ ] ✅ 所有功能正常工作
- [ ] ✅ 移动端显示正常
- [ ] ✅ 图片和视频正常加载

---

## 🆘 遇到问题？

### 问题 1: GitHub推送失败

```bash
# 检查远程仓库
git remote -v

# 如果没有显示，重新添加
git remote add origin https://github.com/你的用户名/仓库名.git
```

### 问题 2: Vercel构建失败

1. 在Vercel查看构建日志
2. 检查错误信息
3. 常见解决方案：
   ```bash
   # 本地测试构建
   npm run build
   # 如果本地成功，重新部署
   git push
   ```

### 问题 3: 网站显示空白

1. 打开浏览器开发者工具（F12）
2. 查看Console中的错误
3. 通常是路径问题，检查 `vite.config.ts`

### 问题 4: 图片不显示

- 确认Cloudinary URL完整且正确
- 检查网络连接
- 在浏览器中直接访问图片URL测试

---

## 🎯 接下来做什么？

### 1. 优化SEO（可选）
- 添加网站描述
- 设置Open Graph标签
- 提交到Google Search Console

### 2. 分析流量（可选）
- 添加Google Analytics
- 使用Vercel Analytics

### 3. 持续改进
- 收集用户反馈
- 添加新项目
- 优化性能

### 4. 分享你的作品！
- 添加到LinkedIn
- 更新简历
- 在社交媒体分享

---

## 🎉 恭喜！

你的作品集网站现已上线！

**你的成就：**
- ✅ 创建了一个专业的作品集网站
- ✅ 掌握了现代化的部署流程
- ✅ 拥有了一个可以持续更新的在线作品集

**网站链接：** `https://your-project.vercel.app`

---

## 📞 需要帮助？

- [Vercel文档](https://vercel.com/docs)
- [GitHub帮助](https://docs.github.com)
- [Vite文档](https://vitejs.dev)

---

**祝贺你完成部署！现在去分享你的作品吧！** ✨🎊🚀
