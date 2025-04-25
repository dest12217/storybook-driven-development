import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import type { ComposedStoryFn } from 'storybook/internal/types';
import { describe, expect, test } from 'vitest';
import * as stories from '@/stories/element/Input.stories';

const composedStories = composeStories(stories);

describe('Input', () => {
  describe('Snapshot', () => {
    test.each(Object.entries<ComposedStoryFn>(composedStories))('Snapshot: %s', (name, Story) => {
      const { asFragment } = render(<Story />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
