# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run build        # Transpile TypeScript to build/
npm run watch        # Watch mode build
npm test             # Run all tests
npm run test:coverage  # Run tests with coverage report (outputs to coverage/)
npm run test:mutation  # Run Stryker mutation tests (outputs HTML report to reports/)
npm run clean        # Remove build/, coverage/, node_modules/, reports/
```

To run a single test file:
```bash
npx jest src/__tests__/generate-cusip.spec.ts --runInBand
```

## Architecture

This is a TypeScript npm library (`@thomaschaplin/cusip-generator`) that generates valid CUSIP identifiers. It compiles to CommonJS ES5 in `build/` for distribution.

**CUSIP structure** (9 characters total):
- Characters 1–6: Issuer code — first 6 chars are the "without check code" portion (base-ten digits + alphanumeric chars)
- Characters 7–8: Issue number
- Character 9: Check digit (computed via Luhn-like algorithm)

**Generation pipeline** (`src/generate-cusip.ts`):
1. Builds the 8-char body inline: 6 random `BASE_TEN` digits + 2 random `ALPHANUMERIC` chars (both from `src/constants.ts`)
2. `generateCusipCheckCode(body)` — computes the check digit using the standard CUSIP checksum algorithm (converts each char to a numeric value, doubles odd-position values, sums digit-by-digit)
3. Returns the 8-char body + 1-char check digit

**Key source files:**
- `src/generate-cusip.ts` — public entry point; exports `generateCusip()`
- `src/generate-cusip-check-code.ts` — checksum algorithm
- `src/constants.ts` — static character sets (`ALPHABET`, `BASE_TEN`, `ALPHANUMERIC`)
- `src/index.ts` — re-exports public API
- `src/__tests__/` — Jest specs mirroring each source file

**Testing:** Jest with `ts-jest` transformer; tests match `**/*.spec.ts`. The `kelonio` reporter is included for performance benchmarking output. Stryker is configured for mutation testing with TypeScript checking.

**Pre-push hook:** `.husky/pre-push` runs `./prepush.sh` which executes `npm run pre-push` before pushes.
