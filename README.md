# Playwright Tests for This Project

This repository contains end-to-end tests written with [@playwright/test]. Follow the steps below to install dependencies and run the tests locally or in CI.

## Prerequisites
- Node.js 18+ and npm installed
- Git (optional, for cloning)

On Windows, use PowerShell or Command Prompt.

## Install
1) Clone the repo
```bash
git clone <your-fork-or-repo-url>
cd IT23554436_playwright_code
```

2) Install dependencies
```bash
npm install
```

3) Install Playwright browsers
```bash
npx playwright install
```
- Linux users may need extra system deps: `npx playwright install --with-deps`

## Run Tests
- Run the full test suite (all browsers configured in `playwright.config.js`):
```bash
npx playwright test
```

- Run in headed mode (see the browser window):
```bash
npx playwright test --headed
```

- Use UI mode (explore and run tests interactively):
```bash
npx playwright test --ui
```

### Targeted Runs
- Run a single test file (example: the UI spec):
```bash
npx playwright test tests/ui.spec.js
```

- Run on a specific browser project (example: Chromium):
```bash
npx playwright test --project=chromium
```

- Run a specific test by title (substring match):
```bash
npx playwright test -g "your test title"
```

## Reports
- HTML report is generated automatically (configured via `reporter: 'html'`). After a run, open the latest report with:
```bash
npx playwright show-report
```

## Debugging
- Open the Inspector with debug mode:
```bash
npx playwright test --debug
```

- Capture traces on retry is already enabled (`trace: 'on-first-retry'`). You can also view a saved trace with:
```bash
npx playwright show-trace path/to/trace.zip
```

## Optional: Add npm Scripts
You can add helpful scripts to `package.json`:
```json
{
  "scripts": {
    "test": "playwright test",
    "test:ui": "playwright test --ui",
    "test:headed": "playwright test --headed",
    "report": "playwright show-report"
  }
}
```
Then run:
```bash
npm run test
npm run test:ui
npm run test:headed
npm run report
```

## Troubleshooting
- "No browsers are installed": run `npx playwright install` again.
- Corporate proxy/SSL issues: configure npm proxy (`npm config set proxy ...`) or use system certs.
- Permissions on Linux CI: prefer `--with-deps` and ensure necessary libraries are present.

## Project Structure
- Tests live in `tests/` and are executed according to `playwright.config.js`.
- Test results appear under `test-results/`; HTML reports under `playwright-report/`.

---
For more, see the Playwright docs: https://playwright.dev/docs/intro
