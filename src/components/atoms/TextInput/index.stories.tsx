import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./index";
import { useForm, FormProvider } from "react-hook-form";

const meta: Meta<typeof TextInput> = {
  title: "atoms/TextInput",
  component: TextInput,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "error"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story["render"] = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <TextInput {...args} />
      </form>
    </FormProvider>
  );
};

export const CustomTextInput: Story = {
  render: Template,
  args: {
    name: "email",
    label: "Email",
    variant: "contained",
    size: "medium",
    placeholder: "Enter your email",
    disabled: false,
  },
};
