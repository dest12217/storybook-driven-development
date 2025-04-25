import { Meta, StoryObj } from '@storybook/react';
import TextValidationState from '@/components/element/TextValidationState';

export default {
  title: 'Element/TextValidationState',
  component: TextValidationState,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    children: 'Example'
  }
} satisfies Meta<typeof TextValidationState>;

type Story = StoryObj<typeof TextValidationState>;

export const Default = {} satisfies Story;
