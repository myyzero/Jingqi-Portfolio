# 🎨 Interactive & Creative Technology Portfolio

一个极简、诗意的作品集网站，专为交互与创意技术专家设计。

## ✨ 特点

- 🎭 **博物馆般的设计** - 宁静、电影般的留白
- 🎪 **四大板块** - Home / Interactive Projects / Visual & Technical Practice / Contact
- 🎨 **精心设计的配色** - off-white、charcoal、grey、mist blue
- 📱 **完全响应式** - 适配所有设备
- ⚡ **流畅动画** - 使用Motion (Framer Motion)
- 🎬 **媒体支持** - 图片轮播、YouTube视频、Cloudinary视频

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS v4
- **动画**: Motion (Framer Motion)
- **UI组件**: Shadcn/ui + Radix UI
- **字体**: Josefin Sans
- **部署**: Vercel / Netlify / GitHub Pages

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
pnpm install
# 或
npm install

# 启动开发服务器
pnpm dev
# 或
npm run dev
```

访问 `http://localhost:5173`

### 生产构建

```bash
# 构建
pnpm build

# 预览构建结果
npx serve dist
```

## 📦 项目结构

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # 主应用组件
│   │   └── components/
│   │       ├── Navigation.tsx      # 导航菜单
│   │       ├── Landing.tsx         # 首页
│   │       ├── InteractiveProjects.tsx  # 交互项目
│   │       ├── VisualPractice.tsx  # 视觉实践
│   │       └── Contact.tsx         # 联系页面
│   └── styles/
│       ├── index.css               # 全局样式
│       ├── theme.css               # 主题配置
│       └── fonts.css               # 字体导入
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages自动部署
├── DEPLOYMENT.md                   # 详细部署指南
└── package.json
```

## 🌐 部署

查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 获取完整的部署指南。

### 快速部署到Vercel（推荐）

1. 访问 [vercel.com](https://vercel.com)
2. 用GitHub账号登录
3. 导入此仓库
4. 点击Deploy
5. 完成！

## 📝 项目板块

### 🎭 Interactive Projects
- **Interactive Installation | Wearable Design**
  - Mixing Happiness
  - Emotional Trap
  
- **Immersive Experience Design | Gaming**
  - Wonderland
  - Roar

每个项目包含：
- 图片轮播（带缩略图导航）
- YouTube视频嵌入
- 详细的项目信息

### 🎨 Visual & Technical Practice
四列网格布局，包含：
- **3D Animation Clips** - XPRESSO Tag, Shader Development等
- **Creative Coding - Processing** - 创意编程作品
- **Design Practice** - 设计实践案例
- **Others** - YouTube视频项目

### 📧 Contact
社交媒体链接和联系方式

## 🎯 设计理念

- **极简主义** - 专注于作品本身
- **诗意表达** - 介于装置艺术与创意技术之间
- **空间叙事** - 用留白讲述故事
- **微妙动效** - 优雅而不喧宾夺主

## 📄 License

MIT License - 可以自由使用和修改

## 🙏 致谢

- [Tailwind CSS](https://tailwindcss.com)
- [Motion](https://motion.dev) (Framer Motion)
- [Shadcn/ui](https://ui.shadcn.com)
- [Cloudinary](https://cloudinary.com)
- [Unsplash](https://unsplash.com)

---

用 ❤️ 打造的创意技术作品集
