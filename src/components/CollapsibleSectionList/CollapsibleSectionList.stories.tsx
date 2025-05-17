import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CollapsibleSectionList from "./CollapsibleSectionList";
import type { Section } from "./CollapsibleSectionList";

// Example data type
type ExampleItem = {
  id: number;
  name: string;
};

// Example sections
const exampleSections: Section<ExampleItem>[] = [
  {
    title: "Group A",
    items: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Alex" },
    ],
    renderItem: (item) => <div>{item.name}</div>,
  },
  {
    title: "Group B",
    items: [
      { id: 3, name: "Brian" },
      { id: 4, name: "Bella" },
    ],
    renderItem: (item) => <div>{item.name}</div>,
  },
];

const meta: Meta<typeof CollapsibleSectionList> = {
  title: "Components/CollapsibleSectionList",
  component: CollapsibleSectionList,
  tags: ["autodocs"], // enables Storybook Docs addon
  parameters: {
    docs: {
      description: {
        component:
          "A reusable collapsible section list component that accepts generic sections with a title and a renderItem function. Each section can be toggled open/closed.",
      },
    },
  },
  argTypes: {
    sections: {
      description:
        "An array of section objects. Each section has a title, an array of items, and a `renderItem` callback.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CollapsibleSectionList<ExampleItem>>;

export const Default: Story = {
  args: {
    sections: exampleSections,
  },
};
