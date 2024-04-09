import { PostCard } from "@/app/components/PostCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PostCard> = {
  title: "Components/PostCard",
  component: PostCard,
} satisfies Meta<typeof PostCard>;

export default meta;

type Story = StoryObj<typeof PostCard>;

export const Primary: Story = {};
