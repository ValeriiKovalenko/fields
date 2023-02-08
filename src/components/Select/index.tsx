import { IMode, IModeName } from "../../api";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from "@mui/material";
type SelectProps = {
  options: IMode[];
  onChange: (event: SelectChangeEvent) => void;
  value: IMode;
};

export const Select = ({ options, onChange, value }: SelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Pick mode</InputLabel>
      <MuiSelect onChange={onChange} value={`${value.field}`} label="Pick mode">
        {options.map((option) => {
          return (
            <MenuItem key={option.field} value={`${option.field}`}>
              {option.name}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>
  );
};
