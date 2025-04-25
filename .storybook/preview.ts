import { Preview } from '@storybook/react';
import 'destyle.css';
import './global.css';

export default {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
} satisfies Preview;
