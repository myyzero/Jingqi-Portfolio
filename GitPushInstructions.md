# Git Push & Deployment Instructions

A practical command-line guide for the **Jingqi Portfolio** repository.


| Item              | Value                                                        |
| ----------------- | ------------------------------------------------------------ |
| Local path        | `E:\Portfolio Website Design Prompt`                         |
| Remote            | `origin` → `https://github.com/myyzero/Jingqi-Portfolio.git` |
| Production branch | `main` (Vercel deploys from this branch)                     |
| Live site         | `https://jingqiwork.com`                                     |


---

## Table of contents

1. [Check current status](#1-check-current-status)
2. [Create a new branch](#2-create-a-new-branch)
3. [Upload local work to a Git branch](#3-upload-local-work-to-a-git-branch)
4. [Sync a branch to `main` (deploy)](#4-sync-a-branch-to-main-deploy)
5. [Rollback if something goes wrong](#5-rollback-if-something-goes-wrong)
6. [Common workflows (cheat sheet)](#6-common-workflows-cheat-sheet)
7. [Safety notes](#7-safety-notes)

---

## 1. Check current status

Always start here before branching, committing, or pushing.

### Open the project folder

```powershell
cd "E:\Portfolio Website Design Prompt"
```

**Meaning:** Change the terminal’s working directory to your project root.

---

### See which branch you are on (short status)

```powershell
git status -sb
```

**Meaning:**

- `-s` = short format  
- `-b` = show branch name  
- Example output: `## main...origin/main` → you are on `main`, tracking `origin/main`

---

### List local and remote branches

```powershell
git branch
```

**Meaning:** Lists **local** branches. The branch with `*` is the one you are on.

```powershell
git branch -a
```

**Meaning:** Lists **all** branches (local + remote), e.g. `remotes/origin/main`.

---

### See uncommitted changes

```powershell
git status
```

**Meaning:** Shows modified, staged, and untracked files.

---

### See recent commits

```powershell
git log -5 --oneline
```

**Meaning:**

- `-5` = last 5 commits  
- `--oneline` = one line per commit (hash + message)

---

### Compare local branch with remote

```powershell
git fetch origin
git status
```

**Meaning:**

- `git fetch origin` downloads latest remote info **without** changing your files  
- `git status` then shows whether you are ahead/behind `origin/<branch>`

---

### See what changed (optional)

```powershell
git diff
```

**Meaning:** Unstaged changes (not yet `git add`).

```powershell
git diff --staged
```

**Meaning:** Changes already staged for the next commit.

---

## 2. Create a new branch

Use a branch for backups or features before merging into `main`.

### Option A — Create and switch in one step (recommended)

```powershell
git checkout -b backup/20260615
```

**Meaning:**

- `-b` = create branch  
- `backup/20260615` = new branch name (use your own date or description)  
- You are now **on** the new branch

**Modern equivalent:**

```powershell
git switch -c backup/20260615
```

---

### Option B — Create branch but stay on current branch

```powershell
git branch backup/20260615
```

**Meaning:** Creates the branch only; does **not** switch to it.

```powershell
git checkout backup/20260615
```

**Meaning:** Switch to that branch.

---

### Push new branch to GitHub (first time)

```powershell
git push -u origin backup/20260615
```

**Meaning:**

- `push` = upload commits to remote  
- `-u` = set upstream so later you can use `git push` / `git pull` without extra arguments  
- `origin` = remote name  
- `backup/20260615` = branch name on GitHub

---

## 3. Upload local work to a Git branch

### Step 1 — Make sure you are on the correct branch

```powershell
git branch
```

Switch if needed:

```powershell
git checkout backup/20260527
```

---

### Step 2 — Stage files

**Stage everything (typical for a full backup):**

```powershell
git add .
```

**Meaning:** Add all changed and new files to the staging area (next commit).

**Stage specific files only:**

```powershell
git add content/ src/ materials/
```

**Meaning:** Only those paths go into the next commit.

---

### Step 3 — Commit

```powershell
git commit -m "Backup: portfolio updates for Seeing the Unseen and Works index"
```

**Meaning:** Save a snapshot on the **current branch** with a descriptive message.

If Git says “nothing to commit”, there are no staged changes.

---

### Step 4 — Push to GitHub

**First push on a new branch:**

```powershell
git push -u origin backup/20260527
```

**Later pushes on the same branch:**

```powershell
git push
```

**Meaning:** Upload local commits to `origin` on the current branch.

---

### Step 5 — Verify on remote

```powershell
git log -1 --oneline
git status -sb
```

**Meaning:** Confirm latest commit and that you are in sync with `origin/<branch>`.

---

## 4. Sync a branch to `main` (deploy)

**Production:** Vercel watches `main`. Pushing to `origin/main` triggers a new deployment to `jingqiwork.com` (after the build finishes).

### Recommended: tag `main` before merging (for easy rollback)

```powershell
cd "E:\Portfolio Website Design Prompt"
git fetch origin
git tag backup-main-before-sync origin/main
git push origin backup-main-before-sync
```

**Meaning:**

- `git tag ...` = bookmark a specific commit (here: current remote `main`)  
- `git push origin <tag>` = upload tag to GitHub

---

### Merge backup branch into `main`

```powershell
git checkout main
```

**Meaning:** Switch to the production branch.

```powershell
git pull origin main
```

**Meaning:** Get latest `main` from GitHub before merging.

```powershell
git merge backup/20260527
```

**Meaning:** Bring commits from `backup/20260527` into `main`.  
If you see **Fast-forward**, there are no merge conflicts.

```powershell
git push origin main
```

**Meaning:** Update GitHub `main` → Vercel starts a new production deploy.

---

### Confirm deployment

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → your project → **Deployments**
2. Wait until the latest deployment is **Ready** and marked **Production**
3. Visit `https://jingqiwork.com` and hard-refresh: **Ctrl + Shift + R**

---

### Full deploy sequence (copy-paste)

```powershell
cd "E:\Portfolio Website Design Prompt"
git fetch origin
git tag backup-main-before-sync origin/main
git push origin backup-main-before-sync
git checkout main
git pull origin main
git merge backup/20260527
git push origin main
git log -3 --oneline
```

Replace `backup/20260527` with your actual feature/backup branch name.

---

## 5. Rollback if something goes wrong

### Option A — Roll back on Vercel (fastest, no Git change)

1. Vercel → **Deployments**
2. Find the last **good** deployment (before the bad deploy)
3. **⋯** → **Promote to Production**

**Meaning:** Live site reverts quickly; `main` on GitHub stays as-is until you fix Git separately.

---

### Option B — Roll back `main` using a tag (Git)

```powershell
git checkout main
git pull origin main
git reset --hard backup-main-before-sync
git push --force origin main
```

**Meaning:**

- `git reset --hard <tag>` = move `main` back to the tagged commit and discard newer commits on `main`  
- `--force` = overwrite remote `main` (use only when you intend to revert production code)

⚠️ **Warning:** Force push rewrites remote history. Coordinate if others use the same repo.

---

### Option C — Revert commits (keeps history, safer for shared repos)

```powershell
git checkout main
git pull origin main
git revert HEAD
git push origin main
```

**Meaning:** Creates a **new** commit that undoes the last commit. Good when you want history preserved.

To revert several commits, use a range (example — adjust as needed):

```powershell
git revert HEAD~3..HEAD --no-commit
git commit -m "Revert last 3 commits"
git push origin main
```

---

### Option D — Go back to a branch snapshot locally (no deploy)

```powershell
git checkout backup/20260527
```

**Meaning:** Work from your backup branch locally; does not change the live site until you merge and push `main` again.

---

## 6. Common workflows (cheat sheet)


| Goal                          | Commands                                                                |
| ----------------------------- | ----------------------------------------------------------------------- |
| Where am I?                   | `git status -sb` and `git branch`                                       |
| New backup branch             | `git checkout -b backup/YYYYMMDD`                                       |
| Save work                     | `git add .` → `git commit -m "message"` → `git push -u origin <branch>` |
| Update local `main`           | `git checkout main` → `git pull origin main`                            |
| Deploy to site                | Merge into `main` → `git push origin main` → check Vercel               |
| Undo last commit (local only) | `git reset --soft HEAD~1`                                               |
| Discard local file changes    | `git restore <file>`                                                    |
| See remote URL                | `git remote -v`                                                         |
| List tags                     | `git tag`                                                               |
| Delete local branch           | `git branch -d backup/old-name`                                         |


---

## 7. Safety notes

### Do not commit secrets

Never add to Git:

- `.env`, API keys, passwords  
- `recovery-codes.txt`, passkey images, or similar recovery material

If they appear as untracked files, **do not** run `git add .` blindly. Add only project source and assets you intend to publish.

Add patterns to `.gitignore` if needed:

```powershell
# Example — edit .gitignore, then:
git status
```

---

### `node_modules` and `dist`

This project’s `.gitignore` already excludes `node_modules/` and `dist/`. They should not be committed.

---

### Branch naming in this repo (examples)


| Branch                   | Typical use                           |
| ------------------------ | ------------------------------------- |
| `main`                   | Production; deploys to jingqiwork.com |
| `backup/20260527`        | Snapshot / work-in-progress backup    |
| `backup/before-manifest` | Older backup                          |


---

### After syncing to `main`


| Question                                  | Answer                                                            |
| ----------------------------------------- | ----------------------------------------------------------------- |
| Will jingqiwork.com show the new version? | Yes, after Vercel finishes building `main` (usually 1–3 minutes). |
| Is the backup branch deleted?             | No. Merging does not remove `backup/*` branches.                  |
| Can I keep working on a backup branch?    | Yes. `git checkout backup/20260527` anytime.                      |


---

## Quick reference: command meanings


| Command                       | What it does                                  |
| ----------------------------- | --------------------------------------------- |
| `cd "path"`                   | Change directory                              |
| `git status`                  | Show branch and file changes                  |
| `git branch`                  | List local branches                           |
| `git checkout <branch>`       | Switch branch                                 |
| `git checkout -b <name>`      | Create and switch to new branch               |
| `git add .`                   | Stage all changes                             |
| `git commit -m "msg"`         | Save staged snapshot                          |
| `git push`                    | Upload commits to remote                      |
| `git push -u origin <branch>` | Push and set upstream tracking                |
| `git pull`                    | Download and merge remote changes             |
| `git fetch`                   | Download remote info only                     |
| `git merge <branch>`          | Combine another branch into current branch    |
| `git log --oneline`           | Compact commit history                        |
| `git tag <name>`              | Mark current commit                           |
| `git reset --hard <ref>`      | Move branch pointer and discard local changes |
| `git revert <commit>`         | Undo a commit with a new commit               |
| `git restore <file>`          | Discard unstaged changes in a file            |


---

*Last updated for repository state: `main` synced with portfolio backup workflow and Vercel deployment via `origin/main`.*

*[Tips] *  
*To End the Port: TYPE in the CMD: taskkill /PID 28584 /F*  
*To Change the Port: npm run dev -- --port 5174, then visit: http://localhost:5174/*

