import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SearchField from "./SearchField";

const meta: Meta<typeof SearchField> = {
  title: "Components/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A text input with optional debounce functionality that calls `onSearch` whenever the input value changes. Includes an icon and customizable placeholder.",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      description: "Current value of the search input",
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    onSearch: {
      action: "search",
      description: "Callback fired on search input change (with debounce)",
      table: {
        type: { summary: "(searchTerm: string) => void" },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text inside the input",
      defaultValue: "Search...",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'Search...'" },
      },
    },
    debounceDelay: {
      control: "number",
      description: "Debounce delay in milliseconds",
      defaultValue: 0,
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchField>;

const DefaultSearchField: React.FC<React.ComponentProps<typeof SearchField>> = (
  args
) => {
  const [searchTerm, setSearchTerm] = useState(args.value || "");

  return (
    <SearchField
      {...args}
      value={searchTerm}
      onSearch={(term) => {
        setSearchTerm(term);
        args.onSearch(term);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <DefaultSearchField {...args} />,
  args: {
    value: "",
    placeholder: "Search here...",
    debounceDelay: 500,
  },
};
