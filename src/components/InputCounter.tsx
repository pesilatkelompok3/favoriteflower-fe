"use client"

import React, { useState } from "react";
import { RxMinus, RxPlus } from "react-icons/rx";
import Button from "./Button";

type CounterProps = {
    className: string;
    onValueChange: (value: number) => void;
};


const InputCounter = ({
    className,
    onValueChange
}: {
    className?: CounterProps["className"];
    onValueChange: CounterProps["onValueChange"];
}) => {
    const [value, setValue] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");

    const handleValueChange = (newValue: number) => {
        setValue(newValue);
        onValueChange(newValue);
        setErrorMessage("");
    };

    const handleChange = (newValue: string) => {
        const parsedValue = parseInt(newValue);
        if (!isNaN(parsedValue)) {
            if (parsedValue <= 99) {
                setErrorMessage("");
                handleValueChange(parsedValue);
            } else {
                setErrorMessage("Jumlah stok hanya bisa mencapai 99");
            }
        } else {
            setErrorMessage("Jumlah stok harus berupa angka");
        }
    };

    return (
        <div className={className}>
            <div className="w-48">
                <label htmlFor="input-counter" className="w-full text-md text-gray-600">
                    Jumlah
                </label>
                <div className="border-2 border-gray-500 flex flex-row h-10 w-full rounded-lg relative bg-white mt-2">
                    <Button buttonType="button" clickHandler={() => value > 1 ? handleValueChange(value - 1) : handleValueChange(1)} className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 h-full w-20 rounded-l-lg cursor-pointer outline-none">
                        <RxMinus className="mx-4" />
                    </Button>
                    <input
                        type="number"
                        className="input border-none bg-transparent focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black cursor-default flex items-center text-gray-700 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        name="input-counter"
                        value={value}
                        onChange={(e) => handleChange(e.target.value)}
                        required
                    />
                    <Button buttonType="button" clickHandler={() => value >= 99 ? handleValueChange(99) : handleValueChange(value + 1)} className="text-gray-800 hover:text-gray-900 hover:bg-gray-100 h-full w-20 rounded-r-lg cursor-pointer">
                        <RxPlus className="mx-4" />
                    </Button>
                </div>
            </div>
            {errorMessage && (
                <p className="text-red-500 text-sm mt-1 max-w-xs">{errorMessage}</p>
            )}
        </div>
    );
};

export default InputCounter;
