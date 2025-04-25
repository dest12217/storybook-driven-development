import { Meta, StoryObj } from '@storybook/react';
import InputFieldRequired from '@/components/ui/InputFieldRequired';

export default {
  title: 'UI/InputFieldRequired',
  component: InputFieldRequired,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'label',
    invalid: false
  },
  argTypes: {}
} satisfies Meta<typeof InputFieldRequired>;

type Story = StoryObj<typeof InputFieldRequired>;

export const Valid = {} satisfies Story;

export const Invalid = {
  args: {
    invalid: true
  }
} satisfies Story;
