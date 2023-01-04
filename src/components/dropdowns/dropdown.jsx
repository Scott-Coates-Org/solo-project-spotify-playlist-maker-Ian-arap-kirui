import { Autocomplete, TextField } from "@mui/material";

export default function Dropdown() {
  return (
    <Autocomplete
      disablePortal
      id="select-dropdown"
      options={options}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="select genre" />}
    />
  );
}

const options = [
  { label: "The Godfather", id: 1 },
  { label: "Pulp Fiction", id: 2 },
];
