$ErrorActionPreference = 'Stop'
Set-Location (Join-Path $PSScriptRoot '..')
if ((node -p 'process.versions.node.split(".")[0]') -ne '22') { throw 'Node.js 22 is required' }
foreach ($command in @('npm ci', 'npx playwright install chromium', 'npm run typecheck', 'npm test', 'npm run build')) {
  Invoke-Expression $command
  if ($LASTEXITCODE -ne 0) { throw "Failed: $command" }
}
