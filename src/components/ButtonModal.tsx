"use client";

import { Button } from "flowbite-react";

import FormModal from "@/components/FormModal";

import { useState } from "react";
export default function FormElements() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button
        onClick={() => props.setOpenModal("form-elements")}
        className="bg-primary self-end"
      >
        Tambah Produk Baru
      </Button>
      <FormModal
        props={props.openModal === "form-elements"}
        setProps={() => props.setOpenModal(undefined)}
      />
    </>
  );
}
