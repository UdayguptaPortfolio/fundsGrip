import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { OutlinedInput } from "@mui/material";

export default function CustomDropDown({ handleChange, name, data, innerField }) {
  return (
    <FormControl sx={{ m: 1, maxWidth: "204px", width: "100%" }} size="small">
      <InputLabel id="demo-select-small">Please Select</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        name={name}
        input={<OutlinedInput label="Kindly Please Select" />}
        onChange={handleChange}>
        {data?.map((item, index) => {
          return (
            <MenuItem value={item?.id} key={index}>
              {item?.attributes?.[innerField]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
