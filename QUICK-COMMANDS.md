# ⚡ 快速命令参考

复制粘贴这些命令即可完成部署！

---

## 🔨 第一次部署

### 步骤 1: 测试构建

```bash
# 构建项目
npm run build

# 预览构建结果
npx serve dist
```

访问 http://localhost:3000 检查网站

按 `Ctrl+C` 停止预览

---

### 步骤 2: 推送到GitHub

**首先在GitHub创建仓库：** https://github.com/new

然后运行这些命令（**替换成你的GitHub用户名和仓库名**）：

```bash
# 初始化Git
git init

# 添加所有文件
git add .

# 第一次提交
git commit -m "Initial commit: Portfolio website"

# 连接到GitHub（替换下面的URL！）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送代码
git branch -M main
git push -u origin main
```

---

### 步骤 3: 部署到Vercel

**不需要命令！在浏览器中操作：**

1. 访问 https://vercel.com
2. 用GitHub登录
3. 点击 "New Project"
4. 选择你的仓库
5. 点击 "Deploy"
6. 等待2-3分钟
7. 完成！🎉

---

## 🔄 更新网站（已部署后）

每次修改内容后：

```bash
# 添加更改
git add .

# 提交更改（修改描述信息）
git commit -m "更新项目内容"

# 推送到GitHub
git push
```

**Vercel会自动重新部署！** (1-2分钟)

---

## 🛠️ 常用命令

### 本地开发

```bash
# 启动开发服务器
npm run dev
# 访问 http://localhost:5173
```

### 构建和测试

```bash
# 生产构建
npm run build

# 预览构建结果
npx serve dist
```

### Git操作

```bash
# 查看状态
git status

# 查看远程仓库
git remote -v

# 查看提交历史
git log --oneline

# 拉取最新代码
git pull
```

---

## 🔍 检查命令

```bash
# 检查Node版本
node --version

# 检查npm版本
npm --version

# 检查Git版本
git --version

# 查看项目依赖
npm list --depth=0
```

---

## 🆘 问题解决命令

### 清理并重新安装

```bash
# 删除node_modules
rm -rf node_modules

# 清理npm缓存
npm cache clean --force

# 重新安装
npm install
```

### Git问题

```bash
# 如果远程仓库设置错误，删除并重新添加
git remote remove origin
git remote add origin https://github.com/你的用户名/仓库名.git

# 强制推送（谨慎使用！）
git push -f origin main
```

### 重置到上一次提交

```bash
# 撤销未提交的更改
git reset --hard HEAD

# 查看更改
git diff
```

---

## 📋 完整部署流程（复制粘贴版）

**替换 `你的用户名` 和 `仓库名` 后复制粘贴：**

```bash
# 1. 构建测试
npm run build && npx serve dist

# 按Ctrl+C停止预览后继续

# 2. Git初始化和推送
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main

# 3. 然后访问 vercel.com 完成部署
```

---

## 🎯 提示

**每次修改文件后的标准流程：**

```bash
git add .
git commit -m "描述你的修改"
git push
```

**就这么简单！** ✨

---

## 📱 快速链接

- **创建GitHub仓库:** https://github.com/new
- **Vercel登录:** https://vercel.com/login
- **Vercel项目面板:** https://vercel.com/dashboard

---

**保存这个文件，随时参考！** 📌
