/// <reference types="@testing-library/jest-dom" />
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import type { ComposedStoryFn } from 'storybook/internal/types';
import { describe, expect, test } from 'vitest';
import * as stories from '@/stories/ui/InputFieldRequired.stories';

const composedStories = composeStories(stories);

describe('InputFieldRequired', () => {
  describe('Snapshot', () => {
    test.each(Object.entries<ComposedStoryFn>(composedStories))('Snapshot: %s', (name, Story) => {
      const { asFragment } = render(<Story />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Invalid', () => {
    test('エラーメッセージが表示されていること', () => {
      const { Invalid } = composedStories;
      const { getAllByText } = render(<Invalid />);
      const elements = getAllByText('This field is required');

      expect(elements.length).toBeGreaterThan(0);
      elements.forEach((element) => {
        expect(element).toBeVisible();
      });
    });
  });
});
