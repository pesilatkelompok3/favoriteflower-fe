import React, { useState } from "react";

interface ResponseData {
  data: {};
}

type Props = {
  url: string;
};

export const fetchData = async (url: Props["url"]): Promise<ResponseData> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};


export const useToggle = (initialState = false): [boolean, () => void] => {
  const [toggleValue, setToggleValue] = useState(initialState);

  const toggler = () => {
    setToggleValue(!toggleValue);
  };

  return [toggleValue, toggler];
};