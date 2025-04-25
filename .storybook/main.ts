import type { StorybookConfig } from '@storybook/react-vite';
import * as path from 'node:path';

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test'
  ],
  framework: {
    'name': '@storybook/react-vite',
    'options': {}
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }

    config.server = {
      ...config.server,
      host: '0.0.0.0',
      port: 63315,
    };

    return config;
  }
};
export default config;
