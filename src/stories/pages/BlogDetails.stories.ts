import BlogDetailsPage from '@/app/blog/[id]/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BlogDetailsPage> = {
  title: 'Pages/BlogDetailsPage',
  component: BlogDetailsPage,
} satisfies Meta<typeof BlogDetailsPage>;

export default meta;

type Story = StoryObj<typeof BlogDetailsPage>;

export const Primary: Story = {};
