import React from "react";
import type { Student } from "../../data/students";
import {
  Avatar,
  Email,
  Info,
  ItemWrapper,
  Name,
} from "./StudentListItem.styles";

interface StudentListItemProps {
  student: Student;
}

const StudentListItem = ({ student }: StudentListItemProps) => {
  const { fullName, email, profileAvatar } = student;

  return (
    <ItemWrapper>
      <Avatar
        src={profileAvatar || "https://ui-avatars.com/api/?name=Default+User"}
        alt={fullName}
      />
      <Info>
        <Name>{fullName}</Name>
        <Email>{email}</Email>
      </Info>
    </ItemWrapper>
  );
};

export default StudentListItem;
