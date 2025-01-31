import axios from 'axios';

export interface InputProps {
    email: string;
    password: string;
};

export const postUser = async (user: InputProps) => {
    const { data } = await axios.post(
        "https://backend-ashen-seven-22.vercel.app/register",
        user
    );

    return data;
};