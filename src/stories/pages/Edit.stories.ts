import EditPostPage from '@/app/create/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EditPostPage> = {
  title: 'Pages/EditPostPage',
  component: EditPostPage,
  parameters: {
    nextjs: { appDirectory: true },
  }
} satisfies Meta<typeof EditPostPage>;

export default meta;

type Story = StoryObj<typeof EditPostPage>;

export const Primary: Story = {};
