import { writeFile } from 'node:fs/promises'
import { defineConfig } from 'tsdown'

/**
 * Two outputs, matching the shape `package.json#exports` declares:
 *
 * - `cjs/index.js` + `cjs/index.d.ts` — a single bundled CommonJS entry, plus the
 *   `cjs/package.json` `{"type":"commonjs"}` marker the `"type": "module"` root
 *   would otherwise override.
 * - `esm/*.js` + `esm/*.d.ts` — one file per source module (`unbundle`), which is
 *   the shape `tsc` emitted, so no published path moves.
 */
export default defineConfig([
	{
		entry: ['ts/index.ts'],
		format: 'cjs',
		outDir: 'cjs',
		platform: 'node',
		dts: true,
		outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
		clean: ['cjs'],
		hooks: {
			// `copy`'s `to` is treated as a directory, so it cannot write a file named
			// `cjs/package.json`. Write it after the build instead.
			'build:done': async () => {
				await writeFile('cjs/package.json', `${JSON.stringify({ type: 'commonjs' }, null, 2)}\n`)
			}
		}
	},
	{
		entry: ['ts/**/*.ts', '!ts/**/*.spec.ts'],
		format: 'esm',
		outDir: 'esm',
		platform: 'node',
		unbundle: true,
		dts: { sourcemap: true },
		outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
		clean: ['esm']
	}
])
