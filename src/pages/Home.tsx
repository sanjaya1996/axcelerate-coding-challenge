import React from 'react';
import SearchField from '../components/SearchField/SearchField';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import CollapsibleSectionList from '../components/CollapsibleSectionList/CollapsibleSectionList';
import type { Section } from '../components/CollapsibleSectionList/CollapsibleSectionList';
import { attendanceStatuses, students, type Student } from '../data/students';
import StudentListItem from '../components/StudentList/StudentListItem';
import string from '../helpers/string';
import array from '../helpers/array';

const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const Home: React.FC = () => {
  const [renderedStudents, setRenderedStudents] =
    React.useState<Student[]>(students);

  const handleSearch = (searchTerm: string) => {
    const searchResult = array.searchList(students, searchTerm, [
      'fullName',
      'email',
    ]);
    setRenderedStudents(searchResult);
  };

  const sectionListMapper: Section<Student>[] = attendanceStatuses.map(
    (status) => {
      return {
        title: string.capitalize(status),
        items: renderedStudents.filter(
          (student) => student.attendanceStatus === status
        ),
        renderItem: (student) => <StudentListItem student={student} />,
      };
    }
  );

  return (
    <PageWrapper>
      <Header />
      <SearchField
        value=''
        onSearch={handleSearch}
        placeholder='Search'
        debounceDelay={500}
      />
      <CollapsibleSectionList sections={sectionListMapper} />
    </PageWrapper>
  );
};

export default Home;
