import React from "react";
import type { Meta } from "@storybook/react";
import CollapsibleSectionList from "./CollapsibleSectionList";

export type Section<T> = {
  title: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

type CollapsibleSectionListProps<T> = {
  sections: Section<T>[];
};

import type { StoryFn } from "@storybook/react";

const Template: StoryFn<CollapsibleSectionListProps<string>> = (
  args: CollapsibleSectionListProps<string>
) => <CollapsibleSectionList {...args} />;

const sampleSections: Section<string>[] = [
  {
    title: "Fruits",
    items: ["Apple", "Banana", "Cherry"],
    renderItem: (item) => <span>{item}</span>,
  },
  {
    title: "Vegetables",
    items: ["Carrot", "Broccoli", "Lettuce"],
    renderItem: (item) => <span>{item}</span>,
  },
];

export default {
  title: "Components/CollapsibleSectionList",
  component: CollapsibleSectionList,
  parameters: {
    docs: {
      description: {
        component: `
**CollapsibleSectionList** is a generic component to render multiple collapsible sections.

### Props

| Name     | Type                        | Description                         |
| -------- | --------------------------- | --------------------------------- |
| sections | Section<T>[]                | Array of sections to render       |

Each Section object has:
- \`title\`: string for the section header.
- \`items\`: array of items for that section.
- \`renderItem\`: function to render each item.

This design allows flexible rendering of any type of list items inside collapsible sections.
        `,
      },
    },
  },
  tags: ["autodocs"],
} as Meta;

export const Default = Template.bind({});
Default.args = {
  sections: sampleSections,
};
