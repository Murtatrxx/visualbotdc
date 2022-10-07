import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	bundle: false,
	dts: false,
	entry: ['source/**/*.ts', '!source/**/*.d.ts'],
	format: ['cjs'],
	minify: false,
	tsconfig: 'tsconfig.json',
	target: 'es2020',
  silent: true,
	splitting: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	shims: false,
	keepNames: true
});
