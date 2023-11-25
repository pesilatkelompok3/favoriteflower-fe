import { useState } from "react";
import axios from "axios";
import Alert from "@/components/Alert";

type ApiProps = {
  url: string;
  errResponse: any;
  data: [];
};

export const fetchData = async (url: ApiProps["url"]): Promise<ApiProps["data"]> => {
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

export const checkUserLoggedIn = () => {
  return true;
};

type PostDataProps = {
  url: ApiProps["url"];
  data: {};
};

export const postData = async ({ url, data }: PostDataProps): Promise<PostDataProps["data"]> => {
  try {
    const postData = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    Alert({
      title: "Berhasil",
      text: "Data ditambahkan. Silahkan tambah data lainnya jika ada.",
      icon: "success",
    });

    return postData;
  } catch (err: ApiProps["errResponse"]) {
    if (err.response.status === 401 && err.response.data.message === "Token has expired") {
      Alert({
        title: err.response.statusText,
        text: "Terjadi kesalahan saat menambahkan data. Silahkan login kembali.",
        icon: "error",
      });
    }

    console.log(err.response.data.message);

    return err.message;
  }
};

export const deleteData = async (url: ApiProps["url"]) => {
  try {
    const deleteData = await axios.delete(url, {
      withCredentials: true,
    });

    Alert({
      title: "Berhasil!",
      text: "Produk berhasil dihapus",
      icon: "success",
    });

    return deleteData;
  } catch (err: ApiProps["errResponse"]) {
    console.log(err);

    if (err.response.status === 401 && err.response.data.message === "Token has expired") {
      Alert({
        title: err.response.statusText,
        text: "Terjadi kesalahan saat menghapus data. Silahkan login kembali.",
        icon: "error",
      });
    }

    console.log(err.response.data.message);

    return err.message;
  }
};

export const signOut = async (url: ApiProps["url"]) => {
  try {
    const signOut = await axios.post(
      url,
      {
        username: "",
        password: "",
      },
      {
        withCredentials: true,
      }
    );
    return signOut;
  } catch (err: ApiProps["errResponse"]) {
    return err.message;
  }
};

export const useToggle = (initialState = false): [boolean | string, () => void] => {
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
  {
    // name: "Aksi",
    selector: (row: TableRowProps) => row.action,
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

export type ProductParams = {
  params: {
    productId: string;
  };
};

export type Product = {
  id: number | string;
  name: string;
  price: string;
  category: string;
  description: string;
  image?: string;
  url?: string;
};

export const formatPrice = (price: string) => {
  return parseFloat(price).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};

// export const AnimateOnScroll = () => useEffect(() => Aos.init({delay: 0, duration: 400}));
