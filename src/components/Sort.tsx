import React from "react";
import { Dropdown } from "flowbite-react";
import { BiSortAlt2 } from "react-icons/bi";

const Sort = (): React.ReactElement => {
  return (
    <div className="flex items-center gap-1 text-lg md:bg-primary md:p-1 md:rounded">
      <BiSortAlt2 />
      <Dropdown inline label="Urutkan" arrowIcon={false}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default Sort;
