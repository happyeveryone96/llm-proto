// components/BasicTextField.js
import React from "react";
import TextField from "@mui/material/TextField";

function BasicTextField({ label, value, onChange }) {
  return (
    <TextField
      sx={{ minWidth: 120, paddingBottom: 4 }}
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
}

export default BasicTextField;
