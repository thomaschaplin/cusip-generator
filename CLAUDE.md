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
1. `generateCusipWithoutCheckCode()` — builds the first 8 chars: a random base-ten string (from `src/fixtures/base-ten-numbers.ts`) concatenated with a random alphanumeric string (from `src/fixtures/alphabet.ts` + `base-ten-numbers.ts`)
2. `generateCusipCheckCode(cusip)` — computes the check digit using the standard CUSIP checksum algorithm (converts each char to a numeric value, doubles odd-position values, sums digit-by-digit)
3. Returns the 8-char body + 1-char check digit

**Key source files:**
- `src/generate-cusip.ts` — public entry point and main export
- `src/generate-cusip-check-code.ts` — checksum algorithm
- `src/generate-cusip-without-check-code.ts` — 8-char body generation
- `src/fixtures/` — static character sets (alphabet, base-ten numbers, combined alphanumeric)
- `src/__tests__/` — Jest specs mirroring each source file

**Testing:** Jest with `ts-jest` transformer; tests match `**/*.spec.ts`. The `kelonio` reporter is included for performance benchmarking output. Stryker is configured for mutation testing with TypeScript checking.

**Pre-push hook:** `.husky/pre-push` runs `./prepush.sh` which executes `npm run pre-push` before pushes.
