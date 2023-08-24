"use client";

import axios from "axios";
import Button from "@/components/Button";
import { Label, TextInput, FileInput, Textarea, Avatar } from "flowbite-react";
import { useEffect, useState } from "react";
import type { Product } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Alert from "@/components/Alert";
const EditProduct = ({ params: { id } }: { params: { id?: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const router = useRouter();

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file as any);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  useEffect(() => {
    const fetchProductById = (async () => {
      try {
        const res = await axios.get(`${process.env.baseURL}/products/${id}`);
        setProduct(res.data);

        // Set All Default Value in Form
        setName(res.data.name);
        setCategory(res.data.category);
        setPrice(res.data.price);
        setDescription(res.data.description);
        setImage(res.data.url);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("file", selectedFile);

      await axios.patch(`${process.env.baseURL}/products/${id}`, formData, {
        withCredentials: true,
      });

      Alert({
        title: "Berhasil",
        text: "Data berhasil diubah",
        icon: "success",
      });

      router.push("/admin");
    } catch (err: any) {
      alert(err.message);
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <form
        id="form"
        method="post"
        className="w-1/2 flex max-w-md flex-col gap-4"
        onSubmit={submitHandler}
        encType="multipart/form-data"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="productName" value="Nama Produk" />
          </div>
          <TextInput
            type="text"
            id="productName"
            placeholder="Nama Produk"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="productCategory" value="Jenis Produk" />
          </div>
          <TextInput
            type="text"
            id="productCategory"
            placeholder="Masukkan jenis produk"
            required
            value={category}
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="productPrice" value="Harga Produk" />
          </div>
          <TextInput
            type="number"
            id="productPrice"
            placeholder="Masukkan Harga"
            required
            value={price}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="productDescription" value="Deskripsi Produk" />
          </div>
          <Textarea
            id="productDescription"
            placeholder={product?.description}
            required
            defaultValue={product?.description}
            value={description}
            rows={8}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="max-w-md" id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Gambar Produk" />
          </div>
          <FileInput
            accept="file"
            helperText="Anda bisa mengedit gambar produk jika gambar sudah usang atau rusak."
            id="file"
            name="file"
            onChange={handleFileChange}
            // required
          />
        </div>
        <div className="max-w-md">
          <p className="italic text-lg mb-1">Preview Gambar</p>
          {!product?.url ? (
            <p className="text-red-500">
              Tidak ada gambar saat ini. Silahkan isi gambar agar preview
              berjalan
            </p>
          ) : (
            <Avatar
              className="rounded-md"
              alt="cardImage"
              img={image as string}
              // size={40}
              size={40}
            />
          )}
        </div>
        <div className="flex justify-end gap-2">
          <Button
            buttonType="submit"
            className="bg-blue-700 text-sm p-2 rounded-md text-white font-semibold mb-4"
          >
            Edit Product
          </Button>
          <Button
            buttonType="button"
            clickHandler={() => router.push("/admin")}
            className="bg-red-700 text-sm p-2 rounded-md text-white font-semibold mb-4"
          >
            Batalkan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
