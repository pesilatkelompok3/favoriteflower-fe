"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import LoginInput from "@/components/LoginInput";
import Alert from "@/components/Alert";
import Swal from "sweetalert2";

export default function DefaultForm() {
  const router = useRouter();

  const onSubmit = async ({ username, password }: { username: string; password: string }) => {
    console.log("user:", username, "pass", password);
    try {
      const response = await axios.post(
        `${process.env.apiURL}/signin`,
        {
          username,
          password,
        },
        // { withCredentials: true }
      );
      localStorage.setItem("token", response.data.token)
      Cookies.set("token", response.data.token);

      Swal.fire({
        title: response.statusText,
        text: response.data.message,
        icon: "success",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });

      router.push('/admin');

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