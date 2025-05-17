import React, { useState } from "react";
import { SectionWrapper, Header, Content } from "./CollapsibleSection.styles";

type CollapsibleSectionProps = {
  title: string;
  children: React.ReactNode;
};

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <SectionWrapper>
      <Header onClick={toggleCollapse}>{title}</Header>
      {!collapsed && <Content>{children}</Content>}
    </SectionWrapper>
  );
};

export default CollapsibleSection;
