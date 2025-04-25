import { Meta, StoryObj } from '@storybook/react';
import Input from '@/components/element/Input';

export default {
  title: 'Element/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default = {} satisfies Story;
