import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from 'containers/app';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store/configure-store';

const container = document.getElementById('root')!;

const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
