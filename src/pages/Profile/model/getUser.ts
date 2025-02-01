import axios from "axios";

export const getUser = async () => {
  const { data } = await axios.get(
    "https://backend-ashen-seven-22.vercel.app/profile"
  );

  return data;
};
