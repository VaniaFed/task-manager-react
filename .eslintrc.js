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
				quotes: 'off',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	rules: {
		quotes: ['error', 'single'],
		'react/react-in-jsx-scope': 0,
		'import/no-webpack-loader-syntax': 0,
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
				'newlines-between': 'always',
			},
		],
		'@typescript-eslint/strict-boolean-expressions': 0,
		'@typescript-eslint/no-var-requires': 0,
	},
	plugins: ['react'],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			alias: {
				map: [
					['components', './src/components'],
					['ui', './src/components/ui'],
					['store', './src/store'],
					['models', './src/models'],
					['services', './src/services'],
					['utils', './src/utils'],
					['hooks', './src/hooks'],
					['types', './src/types'],
					['static', './src/static'],
				],
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			},
		},
	},
};
