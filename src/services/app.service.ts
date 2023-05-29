import { IFormInputs } from "../types/interfaces";
import { axiosInstance } from "./axios-instance";

export const sendDishes = (data: IFormInputs): Promise<IFormInputs> =>
    axiosInstance
        .post('/dishes', data)
        .then((response) => response.data)
        .catch((error) => {
            let errorKeys: string[] = Object.keys(error.response.data);
            let errorArray: string[] = [];
            errorKeys.forEach(key => {
                errorArray.push(`Error in '${key}':\n${error.response.data[key]}`);
            });
            alert(errorArray.join("\n\n"));
        })