# Content maintenance guide (English)

The live site treats **`content/manifests/`** as the single source of truth for copy and media structure. Use `myProContentDraft.md` at the repo root for drafts; sync into manifests before publishing.

---

## 1. Directory map

```
content/manifests/
├── _schema/                 # Types, MediaRef, WorkDetail block types
│   ├── types.ts
│   ├── projectManifest.ts
│   ├── workDetailBlocks.ts
│   └── resolveMedia.ts
├── site/                    # Site-wide pages and section labels
│   ├── labels.ts          # Nav + work detail UI strings
│   ├── landing.ts
│   ├── about.ts
│   ├── about-me.ts
│   ├── contact.ts
│   └── works-index.ts     # Works catalog, filters, card overrides
└── projects/                # Per-project data
    ├── _media.ts            # remote() helper (card-level projects)
    ├── build-project.ts
    ├── registry.ts
    ├── popup-museum.data.ts
    ├── popup-museum-assets.ts
    ├── build-popup-museum.ts
    └── <id>.data.ts         # One file per other project
```

**Do not** add new copy under legacy `content/en|zh/landing.ts` (types only).  
**Do not** inline project copy in `content/en|zh/projects.ts` (builders only).

---

## 2. Bilingual conventions

User-facing strings use **`{ en: "...", zh: "..." }`** (`LocalizedCopy`) or lists **`{ en: string[], zh: string[] }`** (`LocalizedStringList`).

- Routes are typically `/en/...` and `/zh/...`.
- EN and ZH may differ per field (e.g. YouTube vs Bilibili, Drive vs R2 PDF).
- Empty strings (e.g. `moreDetails: { en: "", zh: "..." }`) omit that field at build time.

---

## 3. Media: remote URL vs local files

### 3.1 Remote (default for card-level projects)

In `projects/<id>.data.ts`:

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

- `heroVideo` values starting with `TODO` are **not** written to `videoUrl`.
- Card projects resolve **remote** refs only (no local asset registry yet).

### 3.2 Local (Pop-up Museum detail page)

Files live under **`materials/`**. Three steps:

1. **`popup-museum-assets.ts`**: `import` the file and add it to `popupMuseumAssetRegistry` under a **key** (e.g. `result1`).
2. **`popup-museum.data.ts`**: reference `local("result1")` — **not** the filename.
3. Run `npx vite build` or dev to verify bundling.

```ts
// inside popup-museum.data.ts
const local = (assetKey: PopupMuseumAssetKey): MediaRef => ({
  kind: "local",
  assetKey,
});
```

External images can stay in `popupMuseumRemote` or inline `remote("https://...")`.

---

## 4. Site-wide pages

| Change | File |
|--------|------|
| Nav, work detail section titles (INTEGRATION / 整合) | `site/labels.ts` |
| Home hero name, subtitle | `site/landing.ts` |
| About / About Me / Contact | `site/about.ts`, `about-me.ts`, `contact.ts` |
| Works page title, filter labels | `site/works-index.ts` → `pageLabels` |
| **Which projects appear on Works index** | `site/works-index.ts` → `worksCatalog` |
| Pop-up Museum card type/role/tools override | `site/works-index.ts` → `infoOverrides` |

### Works index visibility

Only IDs in `worksCatalog` show on the Works index. Currently **hidden from the list** (but still routable):

- `interactive-archive`
- `mixing-happiness`
- `emotional-trap`

---

## 5. Card-level projects (no case-study detail yet)

One file per project: **`projects/<id>.data.ts`** (`ProjectManifestEntry` in `_schema/projectManifest.ts`).

Edit **`meta`**, **`previewImage`**, **`images`**, optional **`heroVideo`**.

Wiring in **`projects/registry.ts`**:

- Register in `projectManifestRegistry`
- Add to the right builder (`buildImmersiveGaming`, etc.)

**TODO placeholders** (copy/media still stubbed):

- `life-begets-life`
- `yuliu-tea-ceremony`
- `montage`
- `future-design-project`

---

## 6. Pop-up Museum (full detail page)

| Content | File |
|---------|------|
| All EN/ZH copy, process, shader/tool text, media tree | `popup-museum.data.ts` |
| Cloudinary / R2 URLs | `popupMuseumRemote` or `remote()` |
| Local images/videos | `popup-museum-assets.ts` + `local("key")` in `.data.ts` |
| Build `Project` for the app | `build-popup-museum.ts` (rarely edited) |

### Detail sections (`popup-museum.data.ts`)

- **meta**: card fields, preview, hero video, PDF links
- **whatWhy**: problem / insight lists
- **approach**: three approach items
- **process.modelling**: step placeholders + carousel slides
- **process.animation**: three video grids (circles / rectangles / grid)
- **process.shader**: dissolve & toon copy (sections built in builder)
- **process.uiUx**: logic, storyboard, UI video
- **process.tools**: two tool rows (text + image pairs)
- **process.integrationImages**: three INTEGRATION images (on output step)
- **result**: impact text + 2×2 gallery

Step label **INTEGRATION** (EN) / **整合** (ZH): `site/labels.ts` → `processSteps.output`.

---

## 7. Not in manifests yet

| Content | Location | Notes |
|---------|----------|--------|
| Visual Practice | `content/en|zh/visualPractice.ts` | Migrate when needed |
| Hidden index entries | Still in manifest; omitted from `worksCatalog` |

---

## 8. Add a new card-level project (checklist)

1. Create `projects/my-project.data.ts` (`id` = URL slug).
2. Register in `registry.ts` and add to a category builder.
3. To show on Works index: add `id` → category in `site/works-index.ts` → `worksCatalog`.
4. Optional: `infoOverrides` for list card fields.
5. Run `npx vite build`.
6. Check `/en/works/my-project` and `/zh/works/my-project`.

---

## 9. Adding a full case-study `detail` later

Only **Pop-up Museum** ships `detail` today. For other projects:

1. Extend the manifest schema (or follow the Pop-up Museum split: `*.data.ts` + builder).
2. Output `ProjectDetailContent` from a builder (see `content/en/projects.ts`).
3. UI block types: `_schema/workDetailBlocks.ts`.

---

## 10. Verify and troubleshoot

```bash
npx vite build
```

| Symptom | Likely cause |
|---------|----------------|
| Broken image | Bad URL; local key missing from `popup-museum-assets.ts` |
| Wrong video on ZH | Only updated `heroVideo.en` |
| Missing on Works list | ID not in `worksCatalog` |
| Card-only detail page | Project has no `detail` (expected except Pop-up Museum) |

---

## 11. Code entry points

- Content API: `content/index.ts` → `getAllWorksContent(lang)`, etc.
- Work detail UI: `src/app/screens/WorkDetail.tsx`
- Works index: `src/app/components/WorksIndex.tsx`

Chinese guide: [MAINTENANCE.zh.md](./MAINTENANCE.zh.md)
