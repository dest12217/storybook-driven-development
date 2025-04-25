import { Meta, StoryObj } from '@storybook/react';
import InputSubmit from '@/components/element/InputSubmit';

export default {
  title: 'Element/InputSubmit',
  component: InputSubmit,
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} satisfies Meta<typeof InputSubmit>;

type Story = StoryObj<typeof InputSubmit>;

export const Default = {} satisfies Story;
