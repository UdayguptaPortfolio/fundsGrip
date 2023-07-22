import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { StyledFormControl } from "./Styled";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelectPlaceholder(props) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    if (personName == "Edit/View") {
      props.handleClickEditUser("Edit");
    } else if (personName == "Reset Password") {
      props.handleClickEditUser("Reset");
    } else if (personName == "Block Admin") {
      props.handleClickEditUser("Block");
    } else if (personName == "Unblock Admin") {
      props.handleClickEditUser("Unblock");
    } else if (personName == "Delete Parent Version") {
      props.handleClickEditUser("Delete Parent Version");
    } else if (personName == "Delete admin") {
      props.handleClickEditUser("Delete Admin");
    } else if (personName == "Selected") {
      props.handleClickEditUser("Selected");
    } else if (personName == "All") {
      props.handleClickEditUser("All");
    }
  }, [personName]);

  return (
    <div>
      <StyledFormControl sx={{ m: 1, mt: 3 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span style={{ color: "gray" }}>Please Select</span>;
            }
            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}>
          {props.names?.map((name, index) => (
            <MenuItem
              key={index}
              value={name?.name}
              style={getStyles(name?.name, personName, theme)}>
              {name?.name}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </div>
  );
}
