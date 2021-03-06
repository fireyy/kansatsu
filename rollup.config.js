import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: {
			file: pkg.browser,
			format: 'umd'
		},
		name: 'Kansatsu',
		plugins: [
      buble(),
			resolve(),
			commonjs()
		]
	},
	{
		input: 'src/index.js',
		external: [],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
    ],
    plugins: [buble()]
	}
]
