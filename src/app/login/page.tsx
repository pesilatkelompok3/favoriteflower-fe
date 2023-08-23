"use client";
import React from "react";
import { postData } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginInput from "@/components/LoginInput";

export default function DefaultForm() {
  const router = useRouter();

  const onSubmit = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    console.log("user:", username, "pass", password);
    try {
      const postData = await axios.post(
        `${process.env.baseURL}/signin`,
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      // alert("Data Berhasil Ditambahkan.");
      console.log("Data successfully added.");

      router.push("/admin");

      return postData;
    } catch (err: any) {
      console.log(err);
      // alert("Data gagal ditambahkan.");
      console.log("access denied: ", err.message);
      return err.message;
    }

    // console.log(data);
  };

  return (
    <>
      <LoginInput onLogin={onSubmit} />
    </>
  );
}
