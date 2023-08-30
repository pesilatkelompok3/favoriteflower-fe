"use client";
import {
  Label,
  Modal,
  TextInput,
  Textarea,
  FileInput,
  Avatar,
} from "flowbite-react";
import Button from "./Button";
import { postData } from "@/lib/utils";
import { useState } from "react";
import Alert from "./Alert";
type FormModalProps = {
  openModal: any;
  setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const FormModal = ({ props, setProps }: FormModalProps["openModal"]) =>
  // handlerClick: () => void
  {
    const [product, setProduct] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [image, setImage] = useState<string | null>(null);

    const handleFileChange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file as any);
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
      }
    };

    const submitHandler = async (e: React.FormEvent) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append("name", product);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("file", selectedFile);

      await postData({
        url: `${process.env.apiURL}/products`,
        data: formData,
      });
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
                  <Label htmlFor="productName" value="Nama Produk" className="font-semibold" />
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
                  <Label htmlFor="productPrice" value="Harga Produk" className="font-semibold" />
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
                  <Label htmlFor="categoryProduct" value="Jenis Produk" className="font-semibold" />
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
                  <Label htmlFor="descProduct" value="Deskripsi Produk" className="font-semibold" />
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
                  <Label htmlFor="file" value="Gambar Produk" className="font-semibold"/>
                </div>
                <FileInput
                  helperText="Gambar Produk akan ditampilkan di halaman produk. Silahkan masukkan 1 Gambar produk dengan kualitas yang pas."
                  accept="file"
                  name="file"
                  onChange={handleFileChange}
                  id="file"
                  required
                />
              </div>
              <div className="max-w-md mt-2">
                <p className="text-gray-500">Preview Gambar</p>
                {!selectedFile ? (
                  <p className="text-red-500 mt-1 text-sm">
                    Tidak ada gambar saat ini. Mohon isi gambar agar preview
                    berjalan.
                  </p>
                ) : (
                  <Avatar
                    className="rounded-md mt-2"
                    alt="cardImage"
                    img={image as string}
                    // size={40}
                    size={40}
                  />
                )}
              </div>
              <Button
                buttonType="submit"
                className="bg-blue-500 px-4 py-2 rounded-md float-right text-white mt-4"
              >
                Tambah Data
              </Button>
              <div className="clear-both"></div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

export default FormModal;
