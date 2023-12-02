"use client";

import Button from "@/components/Button";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState<string>("");
  const [message, setmessage] = useState<string>("");

  const submitHandlerForm = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      name,
      message,
    });

    const templateMessage = `Halo FavoriteFlower! Nama saya ${name} saya ingin berpesan tentang ${message}.`;

    window.open(
      `${process.env.waAPI}/send/?phone=${process.env.waNUMBER}&text=${templateMessage}`,
      "_blank"
    );
  };
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-24 md:w-96 bg-black" style={{ height: "1px" }}></div>
        <h1 className="mx-4 text-lg font-bold underline">Kontak Kami</h1>
        <div className="w-24 md:w-96 bg-black" style={{ height: "1px" }}></div>
      </div>
      <div className="my-8 mx-8 flex flex-col md:flex-row md:items-center justify-center md:gap-12 md:mx-6">
        <div className="hidden md:block rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4807296308045!2d107.59485287425848!3d-6.83281896683724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e147ced755cf%3A0x672923024363929!2sJl.%20Cihideung%2C%20Cihideung%2C%20Kec.%20Parongpong%2C%20Kabupaten%20Bandung%20Barat%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1691829159229!5m2!1sid!2sid"
            width="350"
            height="350"
            style={{ border: "2px solid black", borderRadius: "8px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form method="post" onSubmit={submitHandlerForm}>
          <div className="mb-6 md:w-[500px]">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Nama
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-6 md:w-[500px]">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Pesan
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Apa pesan yang ingin anda sampaikan?"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-6">
            <Button
              buttonType="submit"
              className="bg-green-400 w-full px-2 h-[38px] rounded-md cursor-pointer flex justify-center items-center hover:bg-green-500 text-white"
            >
              Kirim
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
