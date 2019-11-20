import React from 'react';
import { Global } from '@emotion/core';

import fonts from './fonts';
import cssReset from './cssReset';
import base from './base';

const GlobalStyles = () => (
    <React.Fragment>
        <Global styles={fonts} />
        <Global styles={cssReset} />
        <Global styles={base} />
    </React.Fragment>
);

export default GlobalStyles;
