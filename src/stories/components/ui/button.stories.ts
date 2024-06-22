import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/app/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    nextjs: { appDirectory: true },
    layout: 'centered',
    tags: ['autodocs'],
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};
