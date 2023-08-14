import React, { useState } from "react";

const useToggle = (initialState = false): [boolean, () => void] => {
  const [toggleValue, setToggleValue] = useState(initialState);

  const toggler = () => {
    setToggleValue(!toggleValue);
  };

  return [toggleValue, toggler];
};

export default useToggle;
