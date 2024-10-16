import type { Meta, StoryObj } from "@storybook/react";
import { ListWithPagination } from "./index";

const sampleItems = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

const meta: Meta<typeof ListWithPagination> = {
  title: "organisms/ListWithPagination",
  component: ListWithPagination,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story["render"] = (args) => <ListWithPagination {...args} />;

export const DefaultListWithPagination: Story = {
  render: Template,
  args: {
    items: sampleItems,
    renderItem: (item: any) => <span>{item}</span>, 
    itemsPerPage: 5,
  },
};
