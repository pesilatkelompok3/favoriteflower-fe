"use client";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";
export default function FormElements() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };

  return (
    <>
      <Button
        onClick={() => props.setOpenModal("form-elements")}
        className="bg-primary self-end"
      >
        Tambah Produk Baru
      </Button>
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Tambah Produk
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="productName" value="Nama Produk" />
              </div>
              <TextInput id="productName" placeholder="Nama Produk" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="productPrice" value="Harga Produk" />
              </div>
              <TextInput
                id="productPrice"
                placeholder="Harga Produk"
                type="number"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="categoryProduct" value="Jenis Produk" />
              </div>
              <TextInput
                id="categoryProduct"
                placeholder="Jenis Produk"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="descProduct" value="Deskripsi Produk" />
              </div>
              <Textarea
                id="descProduct"
                placeholder="Deskripsi Produk"
                rows={4}
                required
              />
            </div>
            <Button className="bg-primary float-right">Tambahkan Produk</Button>
            <div className="clear-both"></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
