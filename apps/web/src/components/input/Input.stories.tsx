import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid: Story = {
  args: {
    variant: "solid",
    placeholder: "Placeholder",
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
    placeholder: "Placeholder",
  },
};
