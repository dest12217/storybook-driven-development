import { Meta, StoryObj } from '@storybook/react';
import InputInvalid from '@/components/element/InputInvalid';

export default {
  title: 'Element/InputInvalid',
  component: InputInvalid,
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} satisfies Meta<typeof InputInvalid>;

type Story = StoryObj<typeof InputInvalid>;

export const Default = {} satisfies Story;
