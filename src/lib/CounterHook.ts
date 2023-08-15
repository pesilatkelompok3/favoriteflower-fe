import React, { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue);

    const decrement = () => {
        if (value >= 1) setValue(
            prevValue => prevValue - 1
        )
        else setValue(0);
    };

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    return { value, decrement, increment };
}
