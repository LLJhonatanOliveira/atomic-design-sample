import type { Meta, StoryObj } from "@storybook/react";
import { TextInputWithButton } from ".";
import { useForm, FormProvider } from "react-hook-form";

const meta: Meta<typeof TextInputWithButton> = {
  title: "atoms/TextInputWithButton",
  component: TextInputWithButton,
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
        <TextInputWithButton {...args} />
      </form>
    </FormProvider>
  );
};

export const CustomTextInputWithButton: Story = {
  render: Template,
  args: {
    name: "email",
    label: "Email",
    variant: "contained",
    size: "medium",
    placeholder: "Enter your email",
    buttonText: "Submit",
    onButtonClick: () => alert("Button clicked!"),
    disabled: false,
  },
};
