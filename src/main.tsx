import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return <main><header><p className="eyebrow">SHOPKLOPP</p><h1>Dein Shopping-Assistent</h1><p>Finde und vergleiche Produkte mit Unterstützung eines persönlichen Assistenten.</p></header><section aria-labelledby="status"><h2 id="status">Entwicklung läuft</h2><p>Die Anwendung ist gestartet. Produktsuche, Browsersteuerung und Sitzungen werden als nächste Schritte ergänzt.</p><p>Bestellungen und Zahlungen benötigen immer deine ausdrückliche Freigabe.</p></section></main>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
