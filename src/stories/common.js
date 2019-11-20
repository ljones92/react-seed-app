/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import React from 'react';
import Header from '../components/Header';

storiesOf('Components/Header', module).add('default', () => {
    return <Header withXSell={false} />;
});
