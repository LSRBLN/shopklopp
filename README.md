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

## Stand

Repository initialisiert. Siehe Issues #1 bis #7 für die Implementierung. Noch kein lauffähiger Agent.
