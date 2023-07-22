import { StyledImg } from "../components/AuthLayout/Menu/Styled";

export const Menu = [
  {
    path: "/",
    icon: <StyledImg src="/images/arrow_icon.svg" />,
    permission: Permissions.lowerRights,
    title: "Home"
  },
  {
    path: "/answer",
    icon: <StyledImg src="/images/dashboard_icon.svg" />,
    permission: Permissions.lowerRights,
    title: "Answers"
  },
  {
    path: "/campaigns",
    icon: <StyledImg src="/images/user_icon.svg" />,
    permission: Permissions.managerRights,
    title: "Campaigns"
  },
  {
    path: "/people-list",
    icon: <StyledImg src="/images/setting_icon.svg" />,
    permission: Permissions.lowerRights,
    title: "People List"
  },
  {
    path: "reports",
    icon: <StyledImg src="/images/note_icon.svg" />,
    permission: Permissions.lowerRights,
    title: "Reports"
  },
  {
    path: "/import",
    icon: <StyledImg src="/images/label_icon.svg" />,
    permission: Permissions.higherRights,
    title: "Import People"
  }
];

export const patronsManageMenus = [
  {
    name: "Master",
    value: "master_admin"
  },
  {
    name: "Parent",
    value: "parent_admin"
  }
];

export const headerMenu = [
  {
    name: "DASHBOARD"
  },
  {
    name: "ADMINS"
  },
  {
    name: "PARENTS"
  },
  {
    name: "REPORTS"
  }
];

export const settingsMenu = [
  {
    name: "Profile"
  },
  {
    name: "Account"
  },
  {
    name: "Dashboard"
  },
  {
    name: "Logout"
  }
];

export const editManageButtons = [
  {
    name: "Reset Password",
    ref: "RP"
  },
  {
    name: "Block Sign In",
    ref: "Block"
  },
  {
    name: "Sign out all sessions",
    ref: "SignOut-Sessions"
  }
];

export const dummyVersion = [
  {
    name: "UK",
    value: 1
  },
  {
    name: "India",
    value: 2
  }
];
