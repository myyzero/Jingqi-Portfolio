# 🚀 部署检查清单

使用这个清单确保部署顺利进行。

## ✅ 部署前检查

### 1. 代码准备
- [ ] 所有功能都已完成并测试
- [ ] 检查浏览器控制台没有错误
- [ ] 在本地运行 `npm run build` 确认构建成功
- [ ] 使用 `npx serve dist` 预览生产版本

### 2. 内容检查
- [ ] 所有图片URL正确（Cloudinary链接）
- [ ] 所有YouTube视频链接有效
- [ ] 联系信息准确无误
- [ ] 项目描述和信息完整

### 3. 响应式测试
- [ ] 在桌面浏览器测试（Chrome, Firefox, Safari）
- [ ] 在移动设备测试
- [ ] 在平板设备测试
- [ ] 测试不同屏幕尺寸

### 4. 功能测试
- [ ] 导航菜单正常工作
- [ ] 平滑滚动正常
- [ ] 图片轮播功能正常
- [ ] 缩略图点击切换正常
- [ ] YouTube视频弹窗播放正常
- [ ] 所有动画效果正常
- [ ] 悬停效果正常

## 📋 Git准备

```bash
# 1. 初始化Git（如果还没有）
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit: Portfolio website ready for deployment"

# 4. 在GitHub创建仓库后，关联远程仓库
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 5. 推送代码
git branch -M main
git push -u origin main
```

## 🌟 推荐部署流程 - Vercel

### 步骤 1: 准备GitHub仓库
1. 访问 [github.com](https://github.com)
2. 创建新仓库（Public或Private都可以）
3. 按照上面的Git命令推送代码

### 步骤 2: 部署到Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Sign Up" 用GitHub登录
3. 点击 "Add New..." → "Project"
4. 选择你的仓库
5. 点击 "Import"
6. 确认配置：
   - Framework Preset: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`
7. 点击 "Deploy"
8. 等待2-3分钟
9. ✅ 完成！

### 步骤 3: 获取网址
- 你会得到一个网址：`https://your-project.vercel.app`
- 可以在项目设置中：
  - 修改项目名称
  - 绑定自定义域名
  - 配置环境变量

## 🔄 后续更新

每次修改代码后：

```bash
# 1. 保存并提交更改
git add .
git commit -m "描述你的更改"

# 2. 推送到GitHub
git push

# 3. Vercel会自动检测并重新部署（1-2分钟）
```

## 🎯 优化建议

### 部署后优化
- [ ] 在Google PageSpeed Insights测试性能
- [ ] 在GTmetrix测试加载速度
- [ ] 检查所有设备的显示效果
- [ ] 测试所有外部链接
- [ ] 设置Google Analytics（可选）

### SEO优化（可选）
- [ ] 添加网站描述meta标签
- [ ] 添加Open Graph标签
- [ ] 创建sitemap.xml
- [ ] 添加robots.txt
- [ ] 优化图片alt文本

### 性能优化
- [ ] 确保图片格式优化（Cloudinary已处理）
- [ ] 检查字体加载
- [ ] 测试首次加载时间
- [ ] 确认懒加载正常工作

## 🆘 常见问题

### 问题1: 构建失败
**解决方案：**
```bash
# 清理缓存并重新安装
rm -rf node_modules
pnpm install
pnpm build
```

### 问题2: 部署后空白页面
**检查：**
1. 浏览器控制台的错误信息
2. `vite.config.ts` 中的 `base` 配置
3. 确认所有资源路径正确

### 问题3: 图片不显示
**检查：**
1. Cloudinary URL是否完整
2. 网络连接
3. 图片URL是否公开访问

## 📞 获取帮助

- Vercel文档: [vercel.com/docs](https://vercel.com/docs)
- Vite文档: [vitejs.dev](https://vitejs.dev)
- React文档: [react.dev](https://react.dev)

## 🎉 部署成功后

- [ ] 分享你的网站链接
- [ ] 添加到LinkedIn个人资料
- [ ] 更新简历中的作品集链接
- [ ] 在社交媒体分享
- [ ] 收集反馈并持续改进

---

祝你部署顺利！✨
