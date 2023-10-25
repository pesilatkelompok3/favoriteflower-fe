"use client";
import React from "react";
import { Dropdown } from "flowbite-react";
import { BiSortAlt2 } from "react-icons/bi";

type filter = {
  sort: string;
  onSort: (option: string) => void;
};
const Sort = ({ sort, onSort }: filter): React.ReactElement => {
  const options = ["A-Z", "Z-A", "Harga Tertinggi", "Harga Terendah"];
  return (
    <div className="flex items-center gap-1 text-lg md:bg-base md:p-1 md:rounded">
      <BiSortAlt2 />
      <Dropdown inline label="Urutkan" value={sort} arrowIcon={false}>
        {options.map((option) => (
          <Dropdown.Item
            value={option}
            key={option}
            onClick={() => onSort(option)}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown>
      <p>{sort}</p>
    </div>
  );
};

export default Sort;
