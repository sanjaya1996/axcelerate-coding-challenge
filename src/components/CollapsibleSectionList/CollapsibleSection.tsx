import React, { useState } from "react";
import {
  SectionWrapper,
  Header,
  Content,
  ToogleIcon,
} from "./CollapsibleSection.styles";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
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
      <Header onClick={toggleCollapse}>
        <span>{title}</span>
        <ToogleIcon>
          {collapsed ? (
            <FiChevronRight size={20} />
          ) : (
            <FiChevronDown size={20} />
          )}
        </ToogleIcon>
      </Header>
      {!collapsed && <Content>{children}</Content>}
    </SectionWrapper>
  );
};

export default CollapsibleSection;
