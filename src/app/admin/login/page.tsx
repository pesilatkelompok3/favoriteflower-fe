"use client";
import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import Button from "@/components/Button";
import { postData } from "@/lib/utils";

export default function DefaultForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(notelp);
    // console.log(password);

    const data = await postData({
      url: "http://localhost:5000/signin",
      data: {
        username,
        password,
      },
    });
    console.log(data);
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
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
            id="password1"
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
