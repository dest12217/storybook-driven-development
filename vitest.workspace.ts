import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
export default defineWorkspace([
  {
    extends: true,
    test: {
      environment: 'jsdom',
      include: [
        'src/stories/**/*.test.{ts,tsx}'
      ],
      setupFiles: ['.storybook/vitest.setup.ts'],
    },
  },
  {
    extends: true,
    plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook'),
      }),
    ],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        instances: [
          {
            browser: 'chromium'
          }
        ],
        provider: 'playwright'
      },
      setupFiles: ['.storybook/vitest.setup.ts'],
    },
  }
]);
