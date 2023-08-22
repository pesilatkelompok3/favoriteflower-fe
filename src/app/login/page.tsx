"use client";
import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import Button from "@/components/Button";
import { postData } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function DefaultForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const data = await postData({
    //   url: "http://localhost:5000/signin",
    //   data: {
    //     username,
    //     password,
    //   },
    // });

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
    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
      <h1 className="text-lg font-bold md:text-xl lg:text-3xl">
        Login Favorite<span className="text-primary">Flower</span>
      </h1>
      <form className="w-1/2 flex max-w-md flex-col gap-4" onSubmit={onSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            type="text"
            id="username"
            placeholder="Nama anda"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            type="password"
            id="password"
            placeholder="Masukkan Password..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          buttonType="submit"
          className="bg-primary p-2 rounded-md text-white font-semibold"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
