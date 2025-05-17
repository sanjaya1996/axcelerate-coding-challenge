import React from "react";

import type { Student } from "../../data/students";
import StudentListItem from "./StudentListItem";

type StudentListProps = {
  students: Student[];
};

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return students.map((student) => {
    return <StudentListItem key={student.id} student={student} />;
  });
};

export default StudentList;
