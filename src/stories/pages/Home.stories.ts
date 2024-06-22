import Home from "@/app/page";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof Home>;

export const Primary: Story = {};
