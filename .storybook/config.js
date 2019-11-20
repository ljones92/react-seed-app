import { addDecorator, configure, addParameters } from '@storybook/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'emotion-theming';
import StorybookTheme from './theme';

import theme from '../src/styles/themes/standard';
import GlobalStyles from '../src/styles';

import reducer from '../src/store/rootReducer';

const req = require.context('../src/stories/', true, /\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

const withGlobal = cb => {
    const store = createStore(reducer);
    const storyComponent = cb(store);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {storyComponent}
            </ThemeProvider>
        </Provider>
    );
};

addParameters({
    options: {
        theme: StorybookTheme
    }
});

addDecorator(withGlobal);
configure(loadStories, module);
