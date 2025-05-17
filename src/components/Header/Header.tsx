// src/components/PageHeader.tsx
import React from "react";
import { HeaderWrapper, Logo } from "./Header.styles";

const PageHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo src="/aXcelerate_logo.png" alt="Logo" />
    </HeaderWrapper>
  );
};

export default PageHeader;
