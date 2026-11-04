import { expect, test } from 'vitest';
import { readFileSync } from 'node:fs';
test('application entry provides a mount point and loads the application', () => {
  const html = readFileSync('index.html', 'utf8');
  expect(html).toContain('id="root"');
  expect(html).toContain('/src/main.tsx');
});
