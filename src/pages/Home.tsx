import React from "react";
import SearchField from "../components/SearchField/SearchField";
import Header from "../components/Header/Header";
import styled from "styled-components";
import CollapsibleSectionList from "../components/CollapsibleSectionList/CollapsibleSectionList";

const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  return (
    <PageWrapper>
      <Header />
      <SearchField value="" onSearch={handleSearch} placeholder="Search" />
      <CollapsibleSectionList sections={[]} />
    </PageWrapper>
  );
};

export default Home;
