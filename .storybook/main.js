const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: ['ts-loader'],
		});
		config.module.rules.push({
			test: /\.scss$/i,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: true,
						sourceMap: true,
					},
				},
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [['postcss-preset-env']],
						},
					},
				},
				'sass-loader',
			],
		});
		config.resolve.alias = {
			...config.resolve.alias,
			components: path.resolve(__dirname, '../src/components/'),
			containers: path.resolve(__dirname, '../src/containers/'),
			src: path.resolve(__dirname, '../src/'),
			static: path.resolve(__dirname, '../src/static/'),
			actions: path.resolve(__dirname, '../src/actions'),
			reducers: path.resolve(__dirname, '../src/reducers/'),
			selectors: path.resolve(__dirname, '../src/selectors/'),
			utils: path.resolve(__dirname, '../src/utils/'),
			sagas: path.resolve(__dirname, '../src/sagas/'),
			lib: path.resolve(__dirname, '../src/lib/'),
			services: path.resolve(__dirname, '../src/services/'),
			types: path.resolve(__dirname, '../src/types/'),
			'constants.ts': path.resolve(__dirname, '../src/constants.ts'),
			'_vars.scss': path.resolve(__dirname, '../src/_vars.scss'),
		};

		return config;
	},
};
