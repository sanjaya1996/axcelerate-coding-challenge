import React from "react";
import SearchField from "../components/SearchField/SearchField";
import Header from "../components/Header/Header";
import styled from "styled-components";
import CollapsibleSectionList from "../components/CollapsibleSectionList/CollapsibleSectionList";
import { students } from "../data/students";
import StudentListItem from "../components/StudentList/StudentListItem";

const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  const renderedStudents = students.slice(0, 10);
  const renderedStudents2 = students.slice(10, 20);

  return (
    <PageWrapper>
      <Header />
      <SearchField value="" onSearch={handleSearch} placeholder="Search" />
      <CollapsibleSectionList
        sections={[
          {
            title: "List1",
            items: renderedStudents,
            renderItem: (student) => <StudentListItem student={student} />,
          },
          {
            title: "List 2",
            items: renderedStudents2,
            renderItem: (student) => <StudentListItem student={student} />,
          },
        ]}
      />
    </PageWrapper>
  );
};

export default Home;
