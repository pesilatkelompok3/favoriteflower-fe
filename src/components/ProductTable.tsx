"use client";

import DataTable from "react-data-table-component";
import { LuArrowDownUp } from "react-icons/lu";
import { useEffect, useState, useMemo } from "react";
import {
  fetchData,
  customStyles,
  columns,
  deleteData,
  formatPrice,
} from "@/lib/utils";
import type { TableRowProps } from "@/lib/utils";
import Swal from "sweetalert2";
import Button from "./Button";
import { Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ButtonModal from "./ButtonModal";

const ProductTable = (): React.ReactElement => {
  const [products, setProducts] = useState([]);

  const [filterText, setFilterText] = useState("");

  const router = useRouter();

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetchData(`${process.env.apiURL}/products`);
      setProducts(response);
      setPending(false);
    })();
  }, []);

  const handleDelete = async (id: string) => {
    await Swal.fire({
      title: "Konfirmasi Hapus!",
      text: "Apakah anda yakin ingin menghapus Produk ini ?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#2249d6",
      cancelButtonText: "Batal",
      confirmButtonColor: "#de211b",
      confirmButtonText: "Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(`${process.env.apiURL}/products/${id}`);
        setProducts(products.filter((item: any) => item.id !== id));
      } else if (result.isDismissed) {
        console.log("Dibatalkan");
      }
    });
  };

  const filteredItems = products.filter(
    (item: any) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  // const filteredId = products.findIndex((item: any) => item === item.id);

  const imageElement = (url: string) => {
    return (
      <div className="w-20 h-20">
        <Image
          alt="gambar"
          src={url}
          width={100}
          height={100}
          className="text-center w-full h-full object-cover"
          priority
        />
      </div>
    );
  };

  const ActionElement = (id: string) => (
    <div className="flex gap-2 items-center">
      {/* <Link href={`/admin/edit/${id}`}> */}
      <Button
        buttonType="button"
        className="bg-blue-500 text-white h-8 w-20 rounded-md"
        clickHandler={() => router.push(`/admin/edit/${id}`)}
      >
        Edit
      </Button>
      {/* </Link> */}
      <Button
        buttonType="button"
        className="bg-red-500 text-white h-8 w-20 rounded-md"
        clickHandler={() => handleDelete(id)}
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
      price: formatPrice(price),
      action: ActionElement(id),
    };
  });

  const [pending, setPending] = useState(true);

  const loadingComponent = (
    <div className="text-center flex flex-col items-center justify-center gap-4 absolute left-0 right-0 mt-8">
      <Spinner
        aria-label="Extra large spinner example"
        className="h-8 w-8"
        color="purple"
      />
      <p className="font-semibold">Sedang memuat data...</p>
    </div>
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
      <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
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
        {filterText && (
          <button
            type="button"
            className="p-2.5 ml-2 flex gap-1 text-sm font-medium text-white bg-red-600 rounded-md hover:text-opacity-70"
            onClick={handleClear}
          >
            Hapus <span>Pencarian</span>
          </button>
        )}
      </form>
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div className="md:w-2/3 flex flex-col items-end md:mx-72 p-4">
      <DataTable
        title="Daftar List Produk"
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        customStyles={customStyles}
        pagination
        sortIcon={sortIcon}
        columns={columns}
        progressPending={pending}
        progressComponent={loadingComponent}
        data={dataProduct}
      />
      {!pending && <ButtonModal />}
    </div>
  );
};
export default ProductTable;
