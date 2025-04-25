import { Meta, StoryObj } from '@storybook/react';
import WithReactHookForm from '@/components/example/WithReactHookForm';

export default {
  title: 'Example/WithReactHookForm',
  component: WithReactHookForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} satisfies Meta<typeof WithReactHookForm>;

type Story = StoryObj<typeof WithReactHookForm>;

export const Default = {} satisfies Story;
