// Font faces go in here

import { css } from '@emotion/core';

const Fonts = css`
    @font-face {
        font-family: 'Expletus Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Expletus Sans'), local('ExpletusSans'),
            url(https://fonts.gstatic.com/s/expletussans/v10/gegTSDBDs5le3g6uxU1ZsYB9a16epZVaac-gfobfbfA.ttf)
                format('truetype');
    }
    @font-face {
        font-family: 'Expletus Sans';
        font-style: normal;
        font-weight: 700;
        src: local('Expletus Sans Bold'), local('ExpletusSans-Bold'),
            url(https://fonts.gstatic.com/s/expletussans/v10/cl6rhMY77Ilk8lB_uYRRwH726VmFjkD_1knHNL407_k.ttf)
                format('truetype');
    }
`;

export default Fonts;
