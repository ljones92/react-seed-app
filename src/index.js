import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import store from './store/configureStore';
import theme from './styles/themes/standard';

import ConnectedApp from './App';
import GlobalStyles from './styles';

const reactRoot = document.getElementById('root');

if (reactRoot) {
    ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <ConnectedApp />
            </ThemeProvider>
        </Provider>,
        reactRoot
    );
}
