export default {
	entry: 'src/index.js',
	esm: 'rollup',
	cjs: 'rollup',
	doc: {
		themeConfig: {mode: 'light'}
	},
	cssModules: true,
	target: 'browser'
}
