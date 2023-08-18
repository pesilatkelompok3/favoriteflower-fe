"use client";
import { Label, Modal, TextInput, Textarea, FileInput } from "flowbite-react";
import Button from "./Button";
import { postData } from "@/lib/utils";
import { useState } from "react";

type FormModalProps = {
  openModal: any;
  setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const FormModal = ({ props, setProps }: FormModalProps["openModal"]) => {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  //   const [image, setImage] = useState("");

  // const handleChange: ChangeEventHandler<HTMLInputElement> = (e: any) => {
  //   const file = e.target;
  //   console.log(file);
  //   setSelectedFile(file);
  // };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", product);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file", selectedFile);

    console.log(selectedFile);

    await postData({
      url: "http://localhost:5000/products",
      data: formData,
    });
    
    window.location.reload();
  };

  return (
    <Modal show={props} size="md" popup onClose={setProps}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Tambah Produk
          </h3>
          <form
            id="form"
            method="post"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <div>
              <div className="mb-2 block mt-2">
                <Label htmlFor="productName" value="Nama Produk" />
              </div>
              <TextInput
                id="productName"
                placeholder="Nama Produk"
                name="name"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block mt-2">
                <Label htmlFor="productPrice" value="Harga Produk" />
              </div>
              <TextInput
                id="productPrice"
                placeholder="Harga Produk"
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block mt-2">
                <Label htmlFor="categoryProduct" value="Jenis Produk" />
              </div>
              <TextInput
                id="categoryProduct"
                placeholder="Jenis Produk"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block mt-2">
                <Label htmlFor="descProduct" value="Deskripsi Produk" />
              </div>
              <Textarea
                id="descProduct"
                placeholder="Deskripsi Produk"
                name="description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="max-w-md" id="fileUpload">
              <div className="mb-2 block mt-2">
                <Label htmlFor="file" value="Gambar Produk" />
              </div>
              <FileInput
                helperText="Tambahkan gambar produk untuk informasi pelanggan."
                accept="file"
                name="file"
                onChange={(e: any) => setSelectedFile(e.target.files[0])}
                id="file"
              />
            </div>
            <Button
              buttonType="submit"
              className="bg-blue-500 px-4 py-2 rounded-md float-right text-white mt-4"
            >
              Tambah Data
            </Button>
            <div className="clear-both"></div>
          </form>
          {/* <button
                className="bg-primary px-4 py-2 float-right rounded-md text-white mt-4"
                type="submit"
              >
                Tambah Data
              </button> */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;