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
    value: { control: false },
    onSearch: { action: "searched" },
    placeholder: { control: "text" },
    debounceDelay: { control: "number" },
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
