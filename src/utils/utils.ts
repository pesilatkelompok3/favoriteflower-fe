import { useState } from "react";
import axios, { Axios, AxiosError } from "axios";

type ApiProps = {
  url: string;
  errResponse: any;
  data: [];
};

export const fetchData = async (
  url: ApiProps["url"]
): Promise<ApiProps["data"]> => {
  try {
    const response = await axios.get(url);

    console.log(response);

    const result = response.data;
    return result;
  } catch (err: ApiProps["errResponse"]) {
    console.log(err);
    return err.message;
  }
};

type PostDataProps = {
  url: ApiProps["url"];
  data: {};
};

export const postData = async ({
  url,
  data,
}: PostDataProps): Promise<Axios> => {
  try {
    return await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err: ApiProps["errResponse"]) {
    console.log(err);
    return err.message;
  }
};

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [toggleValue, setToggleValue] = useState(initialState);

  const toggler = () => {
    setToggleValue(!toggleValue);
  };

  return [toggleValue, toggler];
};
