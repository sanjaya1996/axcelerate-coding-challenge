import React from "react";
import CollapsibleSection from "./CollapsibleSection";

export type Section<T> = {
  title: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

type CollapsibleSectionListProps<T> = {
  sections: Section<T>[];
};

const CollapsibleSectionList = <T,>({
  sections,
}: CollapsibleSectionListProps<T>) => {
  return (
    <>
      {sections.map((section, index) => (
        <CollapsibleSection key={index} title={section.title}>
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex}>{section.renderItem(item)}</div>
          ))}
        </CollapsibleSection>
      ))}
    </>
  );
};
export default CollapsibleSectionList;
