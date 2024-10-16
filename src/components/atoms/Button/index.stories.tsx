/* eslint-disable no-console */
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta = {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: "Click Me",
    variant: "danger",
    size: "small",
    disabled: false,
    type: "submit",
    onClick: () => console.log("Button clicked"),
  },
};
