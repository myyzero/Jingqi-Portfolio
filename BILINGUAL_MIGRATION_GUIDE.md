# Portfolio 双语改造与部署问题排查文档

## 1. 目标

将现有作品集项目改造成双语版本（英文 `en`、中文 `zh`），并保持：

- 同一套布局与组件逻辑
- 单仓库、单代码库
- 内容层按语言切换（文本和媒体链接）

---

## 2. 改造结果概览

### 2.1 语言路由

- 支持语言路径前缀：
  - `/en`
  - `/zh`
- 用户可通过页面语言切换器手动切换 `EN | 中文`

### 2.2 内容分层

新增 `content/` 内容层，按语言拆分：

- `content/en/*`
- `content/zh/*`
- `content/index.ts` 统一导出与按语言读取方法

当前已拆分内容：

- `projects.ts`
- `landing.ts`
- `about.ts`
- `contact.ts`
- `visualPractice.ts`

### 2.3 组件改造方式

组件保留原布局，仅通过 `language` 参数读取不同内容：

- `src/app/App.tsx`：统一管理语言状态、URL 同步、cookie
- `src/app/components/InteractiveProjects.tsx`
- `src/app/components/Landing.tsx`
- `src/app/components/About.tsx`
- `src/app/components/Contact.tsx`
- `src/app/components/VisualPractice.tsx`

---

## 3. 双语改造步骤（可复用）

1. **建立内容目录结构**
   - 新建 `content/en` 与 `content/zh`
   - 定义统一数据类型（例如 `Project`）

2. **把组件内硬编码数据迁移到内容层**
   - 先迁移英文原始数据到 `content/en`
   - 再建立 `content/zh` 对应结构，确保字段一致

3. **统一内容读取入口**
   - 在 `content/index.ts` 中提供 `getProjectContent(language)` 等函数

4. **组件接入语言参数**
   - 组件只负责渲染，不再维护静态文案和链接
   - 根据 `language` 读取内容层数据

5. **添加语言切换器**
   - 在导航与首屏加入 `EN | 中文`
   - 切换时同步 URL 前缀与 `lang` cookie

6. **补齐中文项目数据**
   - 中文版项目数量、图片数组长度与英文保持一致
   - 仅替换文本或指定媒体链接

---

## 4. Bilibili 视频链接规范

### 推荐（嵌入式）

直接使用 Bilibili Player 嵌入地址（供 iframe 使用）：

```text
//player.bilibili.com/player.html?bvid=BV1MdPDzQE7m&page=1
```

说明：

- `bvid`：视频 BV 号
- `page`：分 P，通常为 `1`

在中文内容文件中可直接写入 `videoUrl`，组件通过 `<iframe src={videoUrl} />` 播放。

### 常见页面链接（不建议直接用于 iframe）

```text
https://www.bilibili.com/video/BV1MdPDzQE7m/
```

这是页面地址，不是最稳定的嵌入地址。用于嵌入时建议转换为 `player.bilibili.com` 形式。

---

## 5. 遇到的问题：Vercel 部署失败（middleware.js）

### 5.1 报错

```text
The Edge Function "middleware" is referencing unsupported modules:
- __vc__ns__/0/middleware.js: next/server
```

### 5.2 原因

当前项目是 **Vite + React SPA**，不是 Next.js 项目。  
但根目录存在：

- `middleware.js`
- 且文件内 `import { NextResponse } from "next/server"`

Vercel 会把它识别为 Edge Middleware，编译时发现 `next/server` 不可用，导致部署失败。

---

## 6. 解决方案（已采用）

1. **删除 `middleware.js`**
   - 避免 Vercel 按 Next Edge Function 处理

2. **新增 `vercel.json` 处理重定向**
   - 根路径 `/` 按 `lang` cookie 或 `x-vercel-ip-country` 进行跳转
   - 规则：
     - `lang=zh` -> `/zh`
     - `lang=en` -> `/en`
     - `x-vercel-ip-country=CN` -> `/zh`
     - 默认 -> `/en`

3. **新增 rewrite 规则支持 SPA 路由**
   - `/en`、`/zh` 以及子路径 rewrite 到 `/`
   - 由前端路由接管

4. **调整 Vite 配置**
   - `vite.config.ts` 的 `base` 改为 `/`
   - 降低静态资源路径错误风险

5. **验证构建**
   - `npm run build` 通过

---

## 7. 后续维护建议

1. **新增项目时**
   - 先在 `content/en/projects.ts` 添加英文
   - 再在 `content/zh/projects.ts` 添加同 ID 的中文版本
   - 保持字段结构一致

2. **视频链接维护**
   - 中文统一使用 Bilibili 嵌入地址
   - 英文保持 YouTube（或按后续需求调整）

3. **PDF 与图片维护**
   - 中文可逐步替换为自托管 PDF、国内可访问 CDN
   - 英文继续使用现有全球平台

4. **避免再次出现部署错误**
   - Vite 项目不要引入 `next/server`、`middleware.ts/js`（Next 专用）
   - 路由/重定向优先使用 `vercel.json` 或前端逻辑

---

## 8. 关键文件索引

- 语言与页面接入
  - `src/app/App.tsx`
  - `src/app/components/Navigation.tsx`
  - `src/app/components/Landing.tsx`
  - `src/app/components/InteractiveProjects.tsx`
  - `src/app/components/VisualPractice.tsx`
  - `src/app/components/About.tsx`
  - `src/app/components/Contact.tsx`

- 内容层
  - `content/index.ts`
  - `content/en/projects.ts`
  - `content/zh/projects.ts`
  - `content/en/visualPractice.ts`
  - `content/zh/visualPractice.ts`
  - `content/en/landing.ts`
  - `content/zh/landing.ts`
  - `content/en/about.ts`
  - `content/zh/about.ts`
  - `content/en/contact.ts`
  - `content/zh/contact.ts`

- 部署配置
  - `vercel.json`
  - `vite.config.ts`

