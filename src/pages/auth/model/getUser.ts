import axios from "axios";
import { InputProps } from "../../../shared/types/types";

export const getUser = async (user: InputProps) => {
  const { data } = await axios.post(
    "https://backend-ashen-seven-22.vercel.app/login",
    user
  );

  return data;
};
