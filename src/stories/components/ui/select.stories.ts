
import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@/components/ui/spinner';

const meta: Meta<typeof Spinner> = {
	title: 'Components/UI/Spinner',
	component: Spinner,
	parameters: {
		nextjs: { appDirectory: true },
		layout: 'centered',
		tags: ['autodocs'],
	},
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
