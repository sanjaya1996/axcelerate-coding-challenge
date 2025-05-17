import type { Student, AttendanceStatus } from "../../data/students";

export default {
  getStudentsByAttendanceStatus: (
    students: Student[],
    status: AttendanceStatus
  ) => {
    return students.filter((student) => student.attendanceStatus === status);
  },
};
