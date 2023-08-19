"use client";

import DataTable from "react-data-table-component";
import { LuArrowDownUp } from "react-icons/lu";
import { useEffect, useState, useMemo } from "react";
import { fetchData, customStyles, columns, deleteData } from "@/lib/utils";
import type { TableRowProps } from "@/lib/utils";
import { Spinner, Avatar, Button } from "flowbite-react";

const ProductTable = (): React.ReactElement => {
  const [products, setProducts] = useState([]);

  const [filterText, setFilterText] = useState("");

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetchData(`${process.env.baseURL}/products`);
      setProducts(response);
      setPending(false);
    })();
  }, []);

  const handleDelete = async (id: string) => {
    const response = await deleteData(`http://localhost:5000/products/${id}`);
    setProducts(products.filter((item: any) => item.id !== id));
  };

  const filteredItems = products.filter(
    (item: any) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const filteredId = products.findIndex((item: any) => item === item.id);

  const imageElement = (url: string) => {
    return <Avatar img={url} size="lg" className="text-center" />;
  };

  const ActionElement = (id: string) => (
    <div className="flex gap-2">
      <Button className="bg-blue-500 text-white">Edit</Button>
      <Button
        className="bg-red-500 text-white"
        onClick={() => handleDelete(id)}
      >
        Hapus
      </Button>
    </div>
  );

  const dataProduct = filteredItems.map((row: TableRowProps) => {
    const { name, category, description, price, url, id } = row;

    return {
      id,
      image: imageElement(url),
      title: name,
      category,
      description,
      price: `Rp. ${price}`,
      action: ActionElement(id),
    };
  });

  const [pending, setPending] = useState(true);

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
            placeholder="Cari berdasarkan nama..."
          />
        </div>
        <button
          type="button"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-red-600 rounded-md hover:text-opacity-70"
          onClick={handleClear}
        >
          Hapus
        </button>
      </form>
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="List Produk"
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      customStyles={customStyles}
      pagination
      sortIcon={sortIcon}
      columns={columns}
      progressPending={pending}
      progressComponent={
        <div className="text-center flex flex-col items-center justify-center gap-4">
          <Spinner
            aria-label="Extra large spinner example"
            className="h-8 w-8"
            color="purple"
          />
          <p className="font-semibold">Sedang memuat data...</p>
        </div>
      }
      data={dataProduct}
    />
  );
};
export default ProductTable;
