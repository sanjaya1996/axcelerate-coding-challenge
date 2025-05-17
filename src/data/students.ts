export type AttendanceStatus = "attended" | "absent";

export type Student = {
  id: number;
  fullName: string;
  email: string;
  profileAvatar?: string;
  attendanceStatus: "attended" | "absent";
};

export const attendanceStatuses: AttendanceStatus[] = ["attended", "absent"];

export const students: Student[] = [
  {
    id: 1,
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    profileAvatar: "https://i.pravatar.cc/300",
    attendanceStatus: "attended",
  },
  {
    id: 2,
    fullName: "Ben Parker",
    email: "ben.parker@example.com",
    profileAvatar: "https://i.pravatar.cc/300/2",
    attendanceStatus: "absent",
  },
  {
    id: 3,
    fullName: "Clara Smith",
    email: "clara.smith@example.com",
    profileAvatar: "https://i.pravatar.cc/300/3",
    attendanceStatus: "attended",
  },
  {
    id: 4,
    fullName: "David Lee",
    email: "david.lee@example.com",
    profileAvatar: "https://i.pravatar.cc/300/4",
    attendanceStatus: "attended",
  },
  {
    id: 5,
    fullName: "Eva Green",
    email: "eva.green@example.com",
    profileAvatar: "https://i.pravatar.cc/300/5",
    attendanceStatus: "absent",
  },
  {
    id: 6,
    fullName: "Frank Ocean",
    email: "frank.ocean@example.com",
    attendanceStatus: "attended",
  },
  {
    id: 7,
    fullName: "Grace Kim",
    email: "grace.kim@example.com",
    profileAvatar: "https://i.pravatar.cc/300/6",
    attendanceStatus: "attended",
  },
  {
    id: 8,
    fullName: "Harry Styles",
    email: "harry.styles@example.com",
    profileAvatar: "https://i.pravatar.cc/300/7",
    attendanceStatus: "absent",
  },
  {
    id: 9,
    fullName: "Ivy Wang",
    email: "ivy.wang@example.com",
    profileAvatar: "https://i.pravatar.cc/300/9",
    attendanceStatus: "attended",
  },
  {
    id: 10,
    fullName: "Jack Black",
    email: "jack.black@example.com",
    profileAvatar: "https://i.pravatar.cc/300/10",
    attendanceStatus: "absent",
  },
  {
    id: 11,
    fullName: "Karen White",
    email: "karen.white@example.com",
    profileAvatar: "https://i.pravatar.cc/300/11",
    attendanceStatus: "attended",
  },
  {
    id: 12,
    fullName: "Leo Messi",
    email: "leo.messi@example.com",
    profileAvatar: "https://i.pravatar.cc/300/12",
    attendanceStatus: "attended",
  },
  {
    id: 13,
    fullName: "Mila Kunis",
    email: "mila.kunis@example.com",
    profileAvatar: "https://i.pravatar.cc/300/13",
    attendanceStatus: "absent",
  },
  {
    id: 14,
    fullName: "Nathan Drake",
    email: "nathan.drake@example.com",
    profileAvatar: "https://i.pravatar.cc/300/14",
    attendanceStatus: "attended",
  },
  {
    id: 15,
    fullName: "Olivia Brown",
    email: "olivia.brown@example.com",
    profileAvatar: "https://i.pravatar.cc/300/15",
    attendanceStatus: "absent",
  },
  {
    id: 16,
    fullName: "Peter Parker",
    email: "peter.parker@example.com",
    profileAvatar: "https://i.pravatar.cc/300/16",
    attendanceStatus: "attended",
  },
  {
    id: 17,
    fullName: "Quinn Taylor",
    email: "quinn.taylor@example.com",
    profileAvatar: "https://i.pravatar.cc/300/17",
    attendanceStatus: "attended",
  },
  {
    id: 18,
    fullName: "Rachel Adams",
    email: "rachel.adams@example.com",
    profileAvatar: "https://i.pravatar.cc/300/18",
    attendanceStatus: "absent",
  },
  {
    id: 19,
    fullName: "Steve Rogers",
    email: "steve.rogers@example.com",
    profileAvatar: "https://i.pravatar.cc/300/19",
    attendanceStatus: "attended",
  },
  {
    id: 20,
    fullName: "Tina Fey",
    email: "tina.fey@example.com",
    profileAvatar: "https://i.pravatar.cc/300/5",
    attendanceStatus: "absent",
  },
];
