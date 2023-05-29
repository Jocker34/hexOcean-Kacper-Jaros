import { FC } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ICustomSelectProps } from "../types/interfaces";

import { Controller } from "react-hook-form";

export const CustomSelect: FC<ICustomSelectProps> = ({
  label,
  control,
  type,
  setType,
  name,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        render={({ field }) => (
          <Select
            {...field}
            onChange={handleChange}
            required={true}
            value={type || ""}
          >
            <MenuItem value={"pizza"}>Pizza</MenuItem>
            <MenuItem value={"soup"}>Soup</MenuItem>
            <MenuItem value={"sandwich"}>Sandwich</MenuItem>
          </Select>
        )}
        control={control}
      />
    </>
  );
};
