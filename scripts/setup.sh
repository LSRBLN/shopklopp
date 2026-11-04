#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
if [ "$(node -p 'process.versions.node.split(".")[0]')" != 22 ]; then echo 'Node.js 22 is required' >&2; exit 1; fi
npm ci
npx playwright install chromium
npm run typecheck
npm test
npm run build
