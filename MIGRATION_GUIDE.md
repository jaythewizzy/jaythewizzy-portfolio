# Safely migrate the existing GitHub repo to Next.js

This ZIP is a replacement for the current static-HTML implementation. It does not include `.git`, so it can be applied without replacing repository history.

## 1. Keep a rollback point and use a preview branch

Run these commands in the existing repository:

```powershell
Set-Location "C:\Users\dell\jaythewizzy-portfolio"

git status
```

Make sure the working tree is clean. Then create a backup branch and a separate migration branch:

```powershell
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$backupBranch = "backup-before-nextjs-$stamp"
$previewBranch = "nextjs-app-router-$stamp"

git branch $backupBranch
git switch -c $previewBranch

Write-Host "Backup branch: $backupBranch"
Write-Host "Preview branch: $previewBranch"
```

Do not push this migration directly to `main` yet. A push to the new branch should create a Vercel Preview Deployment, allowing the new version to be inspected without replacing the current production site.

## 2. Extract this ZIP to a temporary folder

For example:

`C:\Users\dell\Downloads\jaythewizzy-nextjs`

The extracted folder should contain `app`, `components`, `data`, `public`, `package.json`, `next.config.ts` and this guide.

## 3. Replace the static website files while preserving Git and Vercel linkage

From PowerShell, with the existing repository as the current directory:

```powershell
$source = "$env:USERPROFILE\Downloads\jaythewizzy-nextjs"
$target = (Get-Location).Path

if (!(Test-Path (Join-Path $target ".git"))) {
    throw "This is not the existing Git repository. Stop."
}

if (git status --porcelain) {
    throw "Working tree is not clean. Commit or stash before migration."
}

$preserve = @(".git", ".vercel")
Get-ChildItem -LiteralPath $target -Force |
    Where-Object { $_.Name -notin $preserve } |
    Remove-Item -Recurse -Force

Get-ChildItem -LiteralPath $source -Force | Copy-Item -Destination $target -Recurse -Force
```

This preserves `.git` (repository history and remote) and `.vercel` (if the Vercel CLI has linked this folder). The old static HTML folders and the old profile/cut-out images are removed as part of the migration.

## 4. Install and validate locally

```powershell
npm install
npm run typecheck
npm run build
npm run dev
```

Open `http://localhost:3000` and inspect the Home, Technology, Projects, Games, Music, Books, About, Studio, CV and Contact pages. Also open one individual project route (for example `/projects/luxen/`) and one individual game route (for example `/games/coinwell/`).

## 5. Push a Preview Deployment

After the local checks pass and you approve the site:

```powershell
git add -A
git diff --cached --check
git commit -m "Migrate JaytheWizzy Creative Studio to Next.js App Router"
git push -u origin $previewBranch
```

Vercel should create a Preview Deployment for that branch. Check the preview first. Only merge the branch into `main` after the design and routes are approved.

**Vercel project setting:** the old static-HTML deployment may still have Framework Preset set to `Other`. For this migration, open Project Settings → General → Build & Development Settings and set Framework Preset to **Next.js**. Leave Install Command and Output Directory on Auto/Default; use `next build` as the Build Command (or the Next.js default). Do not keep the old static-site Output Directory `.`. This project uses Next.js `output: 'export'`, so the build writes the static site to `out/`.

## Rollback

If needed before merging, return to the original production branch:

```powershell
git switch main
```

The timestamped `backup-before-nextjs-*` branch created above preserves the pre-migration source state.
