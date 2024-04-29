import { BackButton } from '@/app/components/BackButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BackButton> = {
  title: 'Components/BackButton',
  component: BackButton,
} satisfies Meta<typeof BackButton>;

export default meta;

type Story = StoryObj<typeof BackButton>;

export const Primary: Story = {};
