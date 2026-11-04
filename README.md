# Shopklopp

Geräteübergreifender Shopping-Agent mit Venice AI und Playwright.

## MVP-Ziel

Eine Weboberfläche für Produktsuche und Angebotsvergleich, die einen Playwright-Browser-Agenten steuert. Verbindliche Käufe und Zahlungen erfolgen ausschließlich nach ausdrücklicher Freigabe.

## Architektur

- `apps/web`: responsive Oberfläche (geplant)
- `apps/api`: API und Agent-Orchestrierung (geplant)
- `workers/browser`: isolierter Playwright-Worker (geplant)
- Venice AI: austauschbarer Modellprovider, DeepSeek falls verfügbar

## Sicherheitsregeln

Keine API-Schlüssel, Cookies oder Zahlungsdaten in Git. Browserinhalte gelten als nicht vertrauenswürdig. Keine Captcha-Umgehung. Jede Bestellung braucht eine explizite Bestätigung.

## Entwicklung

Node.js 22 installieren (siehe `.nvmrc`), dann im Repository ausführen:

```sh
npm ci
npx playwright install chromium
npm run typecheck
npm test
npm run build
npm run dev
```

Alternativ führt `bash scripts/setup.sh` unter macOS/Linux beziehungsweise `./scripts/setup.ps1` in PowerShell die Einrichtung und Prüfungen aus. Die Skripte benötigen Node 22. Für die Installation sind Netzwerkzugriff auf die npm-Registry und die Playwright-Downloadserver erforderlich; für GitHub-Issues und Pull Requests zusätzlich auf `api.github.com`. In Codex müssen diese Ziele in den Umgebungseinstellungen freigegeben sein, sofern der Netzwerkzugriff eingeschränkt ist.

## Stand

Die responsive Oberfläche startet lokal. Produktsuche, API, Browser-Worker, Anmeldung und Venice-Anbindung sind noch nicht implementiert. Siehe Issues #1 bis #11. Keine Zugangsdaten in Git ablegen; `.env.example` enthält nur Variablennamen.
