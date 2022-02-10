import React from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DateInput } from "./styles";

const DatePicker = ({
  label,
  value,
  required,
  onChange
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateInput 
        label={label}
        value={value}
        required={required}
        onChange={onChange}
        renderInput={(params) => <TextField {...params}/>}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;