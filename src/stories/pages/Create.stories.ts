import CreatePage from "@/app/create/page";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CreatePage> = {
  title: "Pages/CreatePage",
  component: CreatePage,
} satisfies Meta<typeof CreatePage>;

export default meta;

type Story = StoryObj<typeof CreatePage>;

export const Primary: Story = {};
