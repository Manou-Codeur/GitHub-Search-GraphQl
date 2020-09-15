import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import SelectUI from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  dropdownStyle: {
    borderRadius: "5%",
    backgroundColor: "#2b3137",
    margin: 0,
  },
  formControl: {
    minWidth: 150,
    backgroundColor: "white",
  },
  InputLabel: {
    color: "black",
  },
  MenuItem: {
    backgroundColor: "#2b3137",
    color: "white",
    "&:hover ": {
      backgroundColor: "white",
      color: "#2b3137",
    },
  },
}));

const Select = ({ toggleFeild }) => {
  const classes = useStyles();
  const [field, setField] = useState("User");

  const handleChange = ({ target }) => {
    setField(target.value);
    toggleFeild(target.value);
  };

  return (
    <div className="select" style={{ marginRight: "1rem" }}>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-filled-label"
          className={classes.InputLabel}
        >
          Filed
        </InputLabel>
        <SelectUI
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={field}
          onChange={handleChange}
          MenuProps={{
            classes: { paper: classes.dropdownStyle },
          }}
          disableUnderline={true}
          color="primary"
        >
          <MenuItem className={classes.MenuItem} value="Repository">
            Repository
          </MenuItem>
          <MenuItem className={classes.MenuItem} value="User">
            User
          </MenuItem>
        </SelectUI>
      </FormControl>
    </div>
  );
};

export default Select;
