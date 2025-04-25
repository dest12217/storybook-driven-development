import { Meta, StoryObj } from '@storybook/react';
import TextLabel from '@/components/element/TextLabel';

export default {
  title: 'Element/TextLabel',
  component: TextLabel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    children: 'Example'
  }
} satisfies Meta<typeof TextLabel>;

type Story = StoryObj<typeof TextLabel>;

export const Default = {} satisfies Story;
