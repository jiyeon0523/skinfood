# SKINFOOD website deployment

## GitHub Pages
- Repository: `jiyeon0523/skinfood`
- The workflow in `.github/workflows/deploy.yml` builds the Vite app and deploys `dist/`.
- In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
- Push changes to `main` or run the workflow manually from the Actions tab.

## Local development
Use Node.js 22.12 or newer and pnpm 10:

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

The project uses `pnpm-lock.yaml` as its single lockfile. Do not run `npm ci` for this project.
