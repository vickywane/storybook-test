import { userEvent, within, expect } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import ProjectDetailsForm from "../components/ProjectDetailsForm";

const meta: Meta<typeof ProjectDetailsForm> = {
  title: "ProjectDetailsForm",
  component: ProjectDetailsForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const MOCK_LABEL = "Project Label";
const MOCK_INPUT_TEXT = "Sample Project Name";

export const IdleStory: Story = {
//   tags: ["autodocs"],
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(
      "TextInput, dropdown and button elements are present in form",
      async () => {
        // const labelElement = canvas.getByTestId("label-element")
        // const inputElement = canvas.getByTestId("input-element");
        // await userEvent.type(inputElement, "Sample Project Name", {
        //   delay: 50,
        // })
      }
    );

    await step(
      "Project Form Title has initial text of `Project Title`",
      async () => {
        const formTitleElement = canvas.getByTestId("form-title");

        expect(formTitleElement.innerHTML).toBe("Project Title");
      }
    );

    // await step(
    //   "Text from input fields sets form title after typing",
    //   async () => {
    //     const formTitleElement = canvas.getByTestId("form-title");
    //     const inputElement = canvas.getByTestId("input-element");
    //     await userEvent.type(inputElement, MOCK_INPUT_TEXT, {
    //       delay: 50,
    //     });

    //     expect(formTitleElement.innerHTML).toBe(MOCK_INPUT_TEXT);
    //   }
    // );
  },
  args: {
    label: MOCK_LABEL,
    placeholder: "Enter project label name",
    type: "text",
  },
};

export const SubmittedStory: Story = {
//   tags: ["autodocs"],
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(
      "TextInput, dropdown and button elements are present in form",
      async () => {
        // const labelElement = canvas.getByTestId("label-element")
        // const inputElement = canvas.getByTestId("input-element");
        // await userEvent.type(inputElement, "Sample Project Name", {
        //   delay: 50,
        // })
      }
    );

    await step(
      "Text from input fields sets form title after typing",
      async () => {
        const formTitleElement = canvas.getByTestId("form-title");
        const inputElement = canvas.getByTestId("input-element");
        await userEvent.type(inputElement, MOCK_INPUT_TEXT, {
          delay: 50,
        });

        expect(formTitleElement.innerHTML).toBe(MOCK_INPUT_TEXT);
      }
    );
  },
  args: {
    label: MOCK_LABEL,
    placeholder: "Enter project label name",
    type: "text",
  },
};

// export const Default: Story = {
//   play: async ({ canvasElement, step }) => {
//     await IdleStory.play({ canvasElement, step });
//     await SubmittedStory.play({ canvasElement, step });
//   },
// };
