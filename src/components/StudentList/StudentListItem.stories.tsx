import type { Meta, StoryObj } from "@storybook/react";
import StudentListItem from "./StudentListItem";
import type { Student } from "../../data/students";

const meta: Meta<typeof StudentListItem> = {
  title: "Components/StudentListItem",
  component: StudentListItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Displays a student's avatar, full name, and email. Avatar falls back to a placeholder if no profile image is provided.",
      },
    },
  },
  argTypes: {
    student: {
      control: "object",
      description:
        "The student object containing name, email, and optional avatar",
    },
  },
};

export default meta;

type Story = StoryObj<typeof StudentListItem>;

const mockStudent: Student = {
  id: 1,
  fullName: "Alex Johnson",
  email: "alex.johnson@example.com",
  attendanceStatus: "attended",
  profileAvatar: "",
};

export const Default: Story = {
  args: {
    student: mockStudent,
  },
};

export const WithCustomAvatar: Story = {
  args: {
    student: {
      ...mockStudent,
      profileAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  },
};
