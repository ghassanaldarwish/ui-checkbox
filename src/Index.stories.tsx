import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Marbella/Checkbox",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <div className="w-screen h-screen flex justify-center items-center gap-4">
    <Checkbox id="terms" />
    <label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </label>
  </div>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
