import { useState } from "react";
import axios, { Axios, AxiosError } from "axios";

type ApiProps = {
  url: string;
  errResponse: any;
  data: [];
};

export const fetchData = async (
  url: ApiProps["url"]
): Promise<ApiProps["data"]> => {
  try {
    const response = await axios.get(url);

    console.log(response);

    const result = response.data;
    return result;
  } catch (err: ApiProps["errResponse"]) {
    console.log(err.message);
    return err.message;
  }
};

type PostDataProps = {
  url: ApiProps["url"];
  data: {};
};

export const postData = async ({
  url,
  data,
}: PostDataProps): Promise<PostDataProps["data"]> => {
  try {
    const postData = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        // "Accept": "application/json",
      },
    });

    alert("Data Berhasil Ditambahkan.");
    return postData;
  } catch (err: ApiProps["errResponse"]) {
    console.log(err);
    alert("Data gagal ditambahkan.");
    return err.message;
  }
};

export const useToggle = (
  initialState = false
): [boolean | string, () => void] => {
  const [toggleValue, setToggleValue] = useState(initialState);

  const toggler = () => {
    setToggleValue(!toggleValue);
  };

  return [toggleValue, toggler];
};

export type TableRowProps = any;

export const columns = [
  {
    name: "Gambar Produk",
    selector: (row: TableRowProps) => row.image,
    sortable: true,
  },
  {
    name: "Nama Produk",
    selector: (row: TableRowProps) => row.title,
    sortable: true,
  },
  {
    name: "Jenis Produk",
    selector: (row: TableRowProps) => row.category,
    sortable: true,
  },
  {
    name: "Harga",
    selector: (row: TableRowProps) => row.price,
    sortable: true,
  },
  {
    name: "Deskripsi",
    selector: (row: TableRowProps) => row.description,
    sortable: true,
  },
];

export const customStyles = {
  rows: {
    style: {
      minHeight: "65px", // override the row height
    },
  },
  headCells: {
    style: {
      fontWeight: "bold",
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      fontSize: "14px",
    },
  },
};
