import { Control } from "react-hook-form";

export interface IFormInputs {
    name: string;
    preparation_time: string;
    type: string;
    no_of_slices?: string;
    diameter?: number;
    spiciness_scale?: number;
    slices_of_bread?: number;
}

export interface ICustomInputProps {
    label: string;
    control: Control<IFormInputs>;
    name: "name" | "preparation_time" | "type" | "no_of_slices" | "diameter" | "spiciness_scale" | "slices_of_bread";
    placeholder: string;
}

export interface ICustomSelectProps {
    label: string;
    control: Control<IFormInputs>;
    type: string;
    setType: (type: string) => void;
    name: "type"
}
