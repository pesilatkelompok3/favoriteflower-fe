"use client";

import DataTable from "react-data-table-component";
import { LuArrowDownUp } from "react-icons/lu";
import { useEffect, useState, useMemo } from "react";
import { fetchData, customStyles, columns } from "@/lib/utils";
import type { TableRowProps } from "@/lib/utils";

// A super simple expandable component.

const ProductTable = (): React.ReactElement => {
  const [products, setProducts] = useState([]);

  const [filterText, setFilterText] = useState("");

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = products.filter(
    (item: any) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortIcon = <LuArrowDownUp />;

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search branch name..."
          />
        </div>
        <button
          type="button"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClear}
        >
          Clear
        </button>
      </form>
    );
  }, [filterText, resetPaginationToggle]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetchData(`http://localhost:5000/products`);
      console.log("res:", response);
      setProducts(response);
    };
    fetchProducts();
  }, []);
  console.log("prod:", products);
  return (
    <DataTable
      title="Data Produk"
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      customStyles={customStyles}
      pagination
      paginationDefaultPage={5}
      sortIcon={sortIcon}
      columns={columns}
      // data={products.map((row: any) => {
      //   return {
      //     id: row.id,
      //     title: row.name,
      //     category: row.category,
      //     description: row.description,
      //     price: `Rp. ${row.price}`,
      //   };
      // })}
      data={filteredItems.map((row: TableRowProps) => {
        return {
          id: row.id,
          title: row.name,
          category: row.category,
          description: row.description,
          price: `Rp. ${row.price}`,
        };
      })}
    />
  );
};
export default ProductTable;
