import { nodeTestPreset } from '@repobuddy/vitest/config/node'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	// The preset supplies the test `include` globs and the coverage `include`/`exclude`,
	// all of which key off `{src,source,code}/**` — hence the `ts/` -> `src/` move.
	// `includeGeneralTests` picks up plain `*.spec.ts`; without it only the
	// node-specific `*.spec.node.ts` variant is collected.
	plugins: [nodeTestPreset({ includeGeneralTests: true })],
	test: {
		globals: true,
		coverage: {
			provider: 'v8',
			// `lcov` is what the shared workflow's codecov step uploads.
			reporter: ['text', 'lcov']
		}
	}
})
