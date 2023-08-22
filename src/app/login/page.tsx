"use client";
import React from "react";
import { postData } from "@/lib/utils";
import LoginInput from "@/components/LoginInput";

export default function DefaultForm() {
  const onLogin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const data = await postData({
      url: "http://localhost:5000/signin",
      data: {
        username,
        password,
      },
    });
  };

  return (
    <>
      <LoginInput onLogin={onLogin} />
    </>
  );
}
