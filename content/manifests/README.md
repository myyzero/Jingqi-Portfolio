# Content manifests

Single source of truth for site copy and project media. Phases 1–6 are complete.

## Maintenance guides (Phase 6)

| Language | File |
|----------|------|
| 中文 | [MAINTENANCE.zh.md](./MAINTENANCE.zh.md) |
| English | [MAINTENANCE.en.md](./MAINTENANCE.en.md) |

Start with the guide above for day-to-day edits (media, bilingual fields, Works catalog, Pop-up Museum).

## Quick reference

| Area | Path |
|------|------|
| Nav + work detail labels | `site/labels.ts` |
| Home / About / Contact | `site/landing.ts`, `about.ts`, `about-me.ts`, `contact.ts` |
| Works list & filters | `site/works-index.ts` |
| Pop-up Museum (full detail) | `projects/popup-museum.data.ts`, `popup-museum-assets.ts` |
| Other projects (cards) | `projects/<id>.data.ts`, `projects/registry.ts` |
| Types & media helpers | `_schema/` |

Drafts: `myProContentDraft.md` (repo root) — sync into manifest before deploy.

## Implementation phases (done)

1. Site labels  
2. Site pages  
3. Pop-up Museum manifest + builder  
4. Nine other card-level project manifests  
5. Removed `content/shared/popupMuseum*.ts`  
6. Bilingual maintenance handbooks (this section)

## Out of scope (for now)

- `content/en|zh/visualPractice.ts`
- Full `detail` manifests for projects other than Pop-up Museum
