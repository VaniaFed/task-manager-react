const path = require('path');

module.exports = {
	resolve: {
		alias: {
			components: path.resolve(__dirname, '../src/components/'),
			ui: path.resolve(__dirname, '../src/components/ui/'),
			store: path.resolve(__dirname, '../src/store/'),
			models: path.resolve(__dirname, '../src/models/'),
			services: path.resolve(__dirname, '../src/services/'),
			utils: path.resolve(__dirname, '../src/utils/'),
			hooks: path.resolve(__dirname, '../src/hooks/'),
			'types/': path.resolve(__dirname, '../src/types/'),
			static: path.resolve(__dirname, '../src/static/'),
		},
	},
};
