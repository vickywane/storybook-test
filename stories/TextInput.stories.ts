import { userEvent, within, expect, fn } from "@storybook/test";
import TextInput from "../components/TextInput";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;
const MOCK_LABEL = 'Project Label'

export const Default: Story = {
  tags: ["autodocs"],
  play: async ({args, canvasElement }) => {
    const canvas = within(canvasElement);

    const labelElement = canvas.getByTestId("label-element")
    const inputElement = canvas.getByTestId("input-element");
    await userEvent.type(inputElement, "Sample Project Name", {
      delay: 50,
    })

    await expect(labelElement.innerHTML).toBe(MOCK_LABEL)
    await expect(args.handleTextChange).toHaveBeenCalled();
  },
  args: {
    label: MOCK_LABEL,
    placeholder: "Enter project label name",
    type: "text",
    handleTextChange: fn(),
  },
};
