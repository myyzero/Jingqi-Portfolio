# 内容维护手册（中文版）

线上站点以 **`content/manifests/`** 为文案与媒体结构的唯一来源。草稿可写在仓库根目录的 `myProContentDraft.md`，发布前请同步到 manifest。

---

## 1. 目录总览

```
content/manifests/
├── _schema/                 # 类型、MediaRef、WorkDetail 块类型
│   ├── types.ts
│   ├── projectManifest.ts
│   ├── workDetailBlocks.ts
│   ├── resolveMedia.ts
│   └── localMaterialAssets.ts   # materials/ 动态索引，缺失文件 → 占位图 + warn
├── site/                    # 全站页面与栏目标签
│   ├── labels.ts          # 导航 + 作品详情 UI 文案
│   ├── landing.ts
│   ├── about.ts
│   ├── about-me.ts
│   ├── contact.ts
│   └── works-index.ts     # 作品列表目录、筛选、卡片覆盖
└── projects/                # 各项目数据
    ├── _media.ts            # remote() 辅助函数（卡片项目用）
    ├── build-project.ts
    ├── registry.ts
    ├── popup-museum.data.ts
    ├── popup-museum-assets.ts
    ├── build-popup-museum.ts
    └── <id>.data.ts         # 其余项目各一份
```

**不要**在 `content/en|zh/landing.ts` 等旧路径里新增正文（仅类型 re-export）。  
**不要**在 `content/en|zh/projects.ts` 里内联项目文案（只保留 builder 接线）。

### 本地素材与占位图（`localMaterialAssets.ts`）

新增或维护项目本地图/视频时，**优先**用 `buildMaterialRegistry(projectId, { key: "project/…/file.png", … })`，不要用 `import … from "../../../materials/…"` 静态引用。

- Vite 通过 `import.meta.glob` 只打包实际存在的文件。
- 路径指向的文件缺失时：图片自动用灰色占位 SVG，视频用空字符串；浏览器控制台会 **warn 一次**（含 project id 与 logical key），**不会导致编译失败**。
- 示例：`life-begets-life-assets.ts`。

---

## 2. 双语写法约定

所有面向用户的字符串使用 **`{ en: "...", zh: "..." }`**（`LocalizedCopy`）或段落列表 **`{ en: string[], zh: string[] }`**（`LocalizedStringList`）。

- 英文站路由一般为 `/en/...`，中文为 `/zh/...`（以 `App` 路由为准）。
- 同一字段中英文可以不同：例如英文 YouTube、中文 Bilibili；英文 Google Drive PDF、中文 R2 PDF。
- 留空：某语言 `moreDetails` 等可写 `""`，构建时会省略该字段。

---

## 3. 媒体：远程 URL vs 本地文件

### 3.1 远程（推荐用于卡片项目）

在对应 `projects/<id>.data.ts` 顶部：

```ts
import { remote } from "./_media";

previewImage: {
  en: remote("https://res.cloudinary.com/.../cover.jpg"),
  zh: remote("https://pub-....r2.dev/.../cover.png"),
},
images: {
  en: [remote("https://..."), remote("https://...")],
  zh: [remote("https://...")],
},
heroVideo: {
  en: remote("https://youtu.be/xxxxx"),
  zh: remote("//player.bilibili.com/player.html?bvid=BVxxxxx&page=1"),
},
```

- `heroVideo` 若以 `TODO` 开头，构建时**不会**写入 `videoUrl`（避免坏嵌入）。
- 卡片项目目前**仅**通过 `remote` 解析；未配置本地 asset 注册表。

### 3.2 本地（Pop-up Museum 详情页）

本地文件放在仓库 **`materials/`**，流程三步：

1. 在 **`popup-museum-assets.ts`** 中 `import` 文件并加入 `popupMuseumAssetRegistry`（自定义 **key**，如 `result1`）。
2. 在 **`popup-museum.data.ts`** 中用 `local("result1")` 引用（**不是文件名**）。
3. 保存后运行 `npx vite build` 或 dev，确认打包正常。

```ts
// popup-museum.data.ts 内
const local = (assetKey: PopupMuseumAssetKey): MediaRef => ({
  kind: "local",
  assetKey,
});
```

远程图仍写在 `popupMuseumRemote` 或字段里的 `remote("https://...")`。

---

## 4. 全站页面

| 改什么 | 文件 |
|--------|------|
| 导航、作品详情栏目标题（含 INTEGRATION / 整合） | `site/labels.ts` |
| 首页姓名、副标题 | `site/landing.ts` |
| About / About Me / Contact | `site/about.ts`, `about-me.ts`, `contact.ts` |
| 作品页标题、筛选标签 | `site/works-index.ts` → `pageLabels` |
| **哪些项目出现在作品列表** | `site/works-index.ts` → `worksCatalog` |
| Pop-up Museum 列表卡片上的 type/role/tools 覆盖 | `site/works-index.ts` → `infoOverrides` |

### 作品列表显示规则

`worksCatalog` 中的 `id` 才会在 Works 索引页出现。当前**不在列表**的项目包括：

- `interactive-archive`
- `mixing-happiness`
- `emotional-trap`

它们仍有路由与数据，只是索引不展示。

---

## 5. 卡片级项目（无详情页案例）

每个项目一个 **`projects/<id>.data.ts`**，结构见 `ProjectManifestEntry`（`_schema/projectManifest.ts`）。

编辑 **`meta`**（名称、关键词、简介、职责、类型、工具、链接等）和 **`previewImage` / `images` / `heroVideo`**。

接线在 **`projects/registry.ts`**：

- 新 manifest 加入 `projectManifestRegistry`
- 放入对应 `buildInteractiveInstallation` / `buildImmersiveGaming` 等数组

**TODO 占位项目**（待你补全文案与图）：

- `life-begets-life`
- `yuliu-tea-ceremony`
- `montage`
- `future-design-project`

---

## 6. Pop-up Museum（完整详情页）

| 内容 | 文件 |
|------|------|
| 全部中英文文案、流程、Shader/Tool 文案、媒体结构 | `popup-museum.data.ts` |
| Cloudinary / R2 等外链 | `popupMuseumRemote` 或字段内 `remote()` |
| 本地图/视频 | `popup-museum-assets.ts` + `.data.ts` 中 `local("key")` |
| 组装为页面用的 `Project` | `build-popup-museum.ts`（一般无需改） |

### 详情结构速查（`popup-museum.data.ts`）

- **meta**：卡片信息、预览图、hero 视频、PDF
- **whatWhy**：problem / insight 列表
- **approach**：三项 Approach 条目
- **process.modelling**：五步占位图 + 轮播 slides
- **process.animation**：三类动画网格（circles / rectangles / grid）
- **process.shader**：溶解 / 三渲二 描述（区块由 builder 生成）
- **process.uiUx**：逻辑图、分镜、UI 视频
- **process.tools**：两行工具说明 + 双图
- **process.integrationImages**：INTEGRATION 横排三图（挂在 output 步骤）
- **result**：impact 文案 + 2×2 图库

栏目标题 **INTEGRATION**（英文）/ **整合**（中文）在 `site/labels.ts` 的 `processSteps.output`。

---

## 7. 尚未迁入 manifest 的内容

| 内容 | 位置 | 说明 |
|------|------|------|
| Visual Practice | `content/en|zh/visualPractice.ts` | 按需求再迁 |
| 交互档案等隐藏列表项 | 仍有 manifest，仅不在 `worksCatalog` |

---

## 8. 新增一个卡片项目（检查清单）

1. 新建 `projects/my-project.data.ts`（`id` 与路由 slug 一致）。
2. 在 `registry.ts` 注册并加入对应 category builder。
3. 若要在 Works 列表显示：在 `site/works-index.ts` 的 `worksCatalog` 添加 `id` → 分类。
4. 可选：`infoOverrides` 覆盖列表卡片字段。
5. 运行 `npx vite build`。
6. 浏览器分别打开 `/en/works/my-project` 与 `/zh/works/my-project` 检查。

---

## 9. 以后补「详情页」案例（What/Why/Process/Result）

当前仅 **Pop-up Museum** 有 `detail`。其它项目要加长页：

1. 扩展 manifest  schema（或仿 Pop-up Museum 单独 `*.data.ts` + builder）。
2. 在 builder 中输出 `ProjectDetailContent`（类型见 `content/en/projects.ts`）。
3. WorkDetail 已支持块类型定义在 `_schema/workDetailBlocks.ts`。

---

## 10. 验证与排错

```bash
npx vite build
```

| 现象 | 可能原因 |
|------|----------|
| 图不显示 | URL 错误；本地 key 未在 `popup-museum-assets.ts` 注册 |
| 中文站视频不对 | 只改了 `en` 的 `heroVideo`，未改 `zh` |
| 列表没有某项目 | 不在 `worksCatalog` |
| 详情页只有卡片内容 | 该项目尚无 `detail`（非 Pop-up Museum） |

---

## 11. 相关入口（代码）

- 应用取内容：`content/index.ts` → `getAllWorksContent(lang)` 等
- 作品详情 UI：`src/app/screens/WorkDetail.tsx`
- 作品列表：`src/app/components/WorksIndex.tsx`

英文版手册：[MAINTENANCE.en.md](./MAINTENANCE.en.md)
