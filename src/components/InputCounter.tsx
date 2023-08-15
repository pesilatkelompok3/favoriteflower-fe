"use client"

import React, { useState } from "react";
import { RxMinus, RxPlus } from "react-icons/rx";
import Button from "./Button";
import { useCounter } from "@/lib/CounterHook";
type CounterProps = {
    className: string;
};

const InputCounter = ({
    className
}: {
    className?: CounterProps["className"];
}) => {
    const { value, decrement, increment } = useCounter();
    return (
        <div className={className}>
            <div className="h-10 w-48 mb-10">
                <label htmlFor="input-counter" className="w-full text-md text-gray-600">
                    Jumlah
                </label>
                <div className="border-2 border-gray-500 flex flex-row h-10 w-full rounded-lg relative bg-white mt-2">
                    <Button buttonType="button" clickHandler={decrement} className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 h-full w-20 rounded-l-lg cursor-pointer outline-none">
                        <RxMinus className="mx-4" />
                    </Button>
                    <input
                        className="border-none bg-transparent focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
                        name="input-counter"
                        value={value}
                        readOnly
                    />
                    <Button buttonType="button" clickHandler={increment} className="text-gray-800 hover:text-gray-900 hover:bg-gray-100 h-full w-20 rounded-r-lg cursor-pointer">
                        <RxPlus className="mx-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InputCounter;
