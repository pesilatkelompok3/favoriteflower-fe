import React from "react";
import { Dropdown } from "flowbite-react";
import { BiFilterAlt } from "react-icons/bi";

const Dropdowns = (): React.ReactElement => {
  return (
    <div className="flex items-center gap-1 text-lg md:bg-primary md:p-1 md:rounded">
      <BiFilterAlt />
      <Dropdown inline label="Filter" arrowIcon={false}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default Dropdowns;
