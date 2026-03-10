# Interactive Projects 布局调整记录

## 1. 背景与目标

本次调整针对 `Interactive Projects` 详情弹层（`ProjectDetail`）的内容布局，目标如下：

- 第一屏改为图文并排展示，不再是“图片 -> 视频 -> 文字”的串行顺序。
- 图片区域视觉更大，并控制图片与文字的横向占比为 `3:2`。
- `Summary` 独立成第二部分，整行平铺显示。
- `Video` 保持最后一部分，位于 `Summary` 之后。

---

## 2. 修改方案（实施前约定）

为实现上述目标，方案拆分为 4 个具体动作：

1. **放大详情页画幅**
   - 详情弹层内容容器由 `max-w-5xl` 提升到 `max-w-7xl`。

2. **首屏图文改为 3:2**
   - 外层网格从 `lg:grid-cols-2` 改为 `lg:grid-cols-5`。
   - 图片列使用 `lg:col-span-3`。
   - 文字列使用 `lg:col-span-2`。

3. **图片视觉进一步放大**
   - 主图比例（非特殊项目）从 `aspect-[16/9]` 调整为 `aspect-[16/10]`。
   - 特殊项目（`mixing-happiness` / `emotional-trap`）继续走原逻辑 `w-full`，避免破坏原始素材展示。

4. **重排内容顺序**
   - 将 `Summary` 从右侧文字列中移出。
   - 新增全宽 `Summary` 区块作为第二部分。
   - `Video` 区块放在第三部分（最后）。

---

## 3. 实际代码调整位置

### 文件

- `src/app/components/InteractiveProjects.tsx`

### 主要改动点

1. **ProjectDetail 容器宽度**
   - 从：
     - `max-w-5xl mx-auto px-6 py-12`
   - 改为：
     - `max-w-7xl mx-auto px-6 py-12`

2. **第一部分网格结构**
   - 从：
     - `grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12`
   - 改为：
     - `grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12`
   - 并新增列跨度：
     - 图片列：`lg:col-span-3`
     - 文字列：`lg:col-span-2`

3. **主图比例**
   - 从：
     - `aspect-[16/9] w-full`
   - 改为：
     - `aspect-[16/10] w-full`
   - 特殊项目分支保持 `w-full` 不变。

4. **Summary 位置调整**
   - 从右列（Project Info 下方）移除 `Summary`。
   - 在两栏网格后新增独立区块：
     - `div.mb-12` + `Summary` 标题 + `project.summary` 文本。

5. **Video 顺序**
   - `Video` 代码块保留原逻辑，位置位于新的 `Summary` 之后，成为第三部分。

---

## 4. 最终页面顺序（当前实现）

点击项目后详情页内容顺序为：

1. 标题（项目名）
2. 第一部分：左图右文（3:2）
3. 第二部分：Summary（全宽）
4. 第三部分：Video

---

## 5. 未改动项（确认点）

- 图片轮播逻辑未改（左右切换、缩略图切换、计数器均保留）。
- 视频 URL 处理函数 `getYouTubeEmbedUrl()` 未改（继续兼容 YouTube/Bilibili embed）。
- 数据层与双语内容结构未改（仅布局层改动）。

---

## 6. 验证结果

- 已对 `src/app/components/InteractiveProjects.tsx` 执行 lint 检查。
- 结果：**无新增 linter 错误**。
