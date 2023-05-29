import { FC } from "react";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { Controller } from "react-hook-form";
import { ICustomInputProps } from "../types/interfaces";

export const CustomInput: FC<ICustomInputProps> = ({ label, control, name, placeholder }) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field }) => <Input {...field} required={true} placeholder={placeholder}/>}
        name={name}
        control={control}
        defaultValue={''}
      />
    </>
  );
};
