module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended',
	],
	overrides: [
		{
			files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
			rules: {
				'storybook/hierarchy-separator': 'error',
				'storybook/default-exports': 'off',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		quotes: ['error', 'single'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'import/no-webpack-loader-syntax': 0,
	},
	plugins: ['react'],
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['components', './src/components'],
					['containers', './src/containers'],
					['actions', './src/actions'],
					['reducers', './src/reducers'],
					['constants.ts', './src/constants.ts'],
					['selectors', './src/selectors'],
					['types', './src/types'],
					['static', './src/static'],
					['utils', './src/utils'],
					['lib', './src/lib'],
					['src', './src'],
					['sagas', './src/sagas'],
					['services', './src/services'],
				],
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			},
		},
	},
};
