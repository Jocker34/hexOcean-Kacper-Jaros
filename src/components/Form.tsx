import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { IFormInputs } from "../types/interfaces";
import { LABEL, PLACEHOLDER, TYPE } from "../helpers/constants";
import { sendDishes } from "../services/app.service";

export const Form = () => {
  const [type, setType] = useState<string>("");
  const [result, setResult] = useState<IFormInputs>();
  const { control, handleSubmit, reset } = useForm<IFormInputs>();

  const onSubmit = async (data: IFormInputs) => {
    const dataToSend = { ...data, type: type };
    const response = await sendDishes(dataToSend);
    setResult(response);
    reset();
    setType("");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        label={LABEL.NAME}
        control={control}
        name={"name"}
        placeholder={PLACEHOLDER.NAME}
      />
      <CustomInput
        label={LABEL.PREPARATION_TIME}
        control={control}
        name={"preparation_time"}
        placeholder={PLACEHOLDER.PREPARATION_TIME}
      />
      <CustomSelect
        label={LABEL.TYPE}
        control={control}
        type={type}
        setType={setType}
        name={"type"}
      />
      {type === TYPE.PIZZA && (
        <>
          <CustomInput
            label={LABEL.NUMBER_OF_SLICE}
            control={control}
            name={"no_of_slices"}
            placeholder={PLACEHOLDER.NUMBER_OF_SLICE}
          />
          <CustomInput
            label={LABEL.DIAMETER}
            control={control}
            name={"diameter"}
            placeholder={PLACEHOLDER.DIAMETER}
          />
        </>
      )}
      {type === TYPE.SOUP && (
        <CustomInput
          label={LABEL.SPICINESS_SCALE}
          control={control}
          name={"spiciness_scale"}
          placeholder={PLACEHOLDER.SPICINESS_SCALE}
        />
      )}
      {type === TYPE.SANDWICH && (
        <CustomInput
          label={LABEL.SLICES_OF_BREAD}
          control={control}
          name={"slices_of_bread"}
          placeholder={PLACEHOLDER.SLICES_OF_BREAD}
        />
      )}
      <Button variant="text" type="submit" disabled={!!result}>
        SEND
      </Button>
      {result && <div>Dish was added!</div>}
    </StyledForm>
  );
};

const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "300px",
  margin: "auto",
  alignSelf: "center",
  boxShadow: "grey 0 0 10px",
  borderRadius: "5px",
  padding: "20px",
  backgroundColor: theme.palette.common.white,
}));
