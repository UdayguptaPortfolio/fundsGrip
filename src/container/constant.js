export const actionMenu = [
  {
    name: "Edit/View"
  },
  {
    name: "Delete entry"
  }
];

export const parentActionMenu = [
  {
    name: "Edit/View"
  },
  {
    name: "Delete Parent Version"
  }
];

export const exportsMenus = [
  {
    name: "All"
  },
  {
    name: "Selected"
  }
];

export const employeeButtons = [
  {
    name: "Work Board",
    key: "work-board"
  },
  {
    name: "Employee Creation",
    key: "emp-creation"
  }
];

export const workStates = [
  {
    name: "TO DO",
    key: "to-do"
  },
  {
    name: "In Progress",
    key: "in-progress"
  },
  {
    name: "Ready for Testing",
    key: "UAT"
  },
  {
    name: "Done",
    key: "done"
  }
];
export const addNewTask = [
  {
    label: "Title*",
    name: "title",
    type: "string",
    required: true
  },
  {
    label: "Description*",
    name: "description",
    type: "string",
    required: true
  },
  {
    label: "Phone Number*",
    name: "phoneNumber",
    type: "number",
    required: true
  },
  {
    label: "Status*",
    name: "status",
    type: "dropdown",
    required: true
  }
];

export const statusCode = {
  ToDo: 0,
  "In Progress": 1,
  "Ready For Testing": 2,
  Done: 3
};
