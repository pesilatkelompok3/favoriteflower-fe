"use client";
import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import Button from "@/components/Button";

type LoginInputProps = {
  onLogin: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
};
export default function LoginInput({ onLogin }: LoginInputProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
      <h1 className="text-lg font-bold md:text-xl lg:text-3xl">
        Favorite<span className="text-primary">Flower</span>
      </h1>
      <form
        className="w-1/2 flex max-w-md flex-col gap-4"
        onSubmit={onSubmitHandler}
      >
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
