import cases from "jest-in-case";
import students from "./index";
import type { Student, AttendanceStatus } from "../../data/students";

const mockStudents: Student[] = [
  {
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    attendanceStatus: "attended",
    profileAvatar: "",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    email: "jane@example.com",
    attendanceStatus: "absent",
    profileAvatar: "",
  },
  {
    id: 3,
    fullName: "Alex Johnson",
    email: "alex@example.com",
    attendanceStatus: "attended",
    profileAvatar: "",
  },
  {
    id: 4,
    fullName: "Emily Brown",
    email: "emily@example.com",
    attendanceStatus: "absent",
    profileAvatar: "",
  },
];

cases(
  "getStudentsByAttendanceStatus",
  ({ input, expected }) => {
    const result = students.getStudentsByAttendanceStatus(mockStudents, input);
    expect(result).toEqual(expected);
  },
  {
    "should return all attended students": {
      input: "attended" as AttendanceStatus,
      expected: mockStudents.filter((s) => s.attendanceStatus === "attended"),
    },
    "should return all absent students": {
      input: "absent" as AttendanceStatus,
      expected: mockStudents.filter((s) => s.attendanceStatus === "absent"),
    },

    "should return empty array for unknown status": {
      input: "unknown" as AttendanceStatus,
      expected: [],
    },
  }
);
