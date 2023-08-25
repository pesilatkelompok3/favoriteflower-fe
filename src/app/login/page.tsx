"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginInput from "@/components/LoginInput";
import Alert from "@/components/Alert";

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
      const response = await axios.post(
        `${process.env.baseURL}/signin`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      Alert({
        title: "Berhasil",
        text: response.data.message,
        icon: "success",
      });

      router.push("/admin");

      return response;
    } catch (err: any) {
      console.log(err);
      Alert({
        title: err.response.statusText,
        text: err.response.data.errors,
        icon: "error",
      });
      console.log("access denied: ", err.message);
      return err.message;
    }
  };

  return (
    <>
      <LoginInput onLogin={onSubmit} />
    </>
  );
}
