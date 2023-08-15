"use client";
import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import Button from "@/components/Button";

export default function DefaultForm() {
  const [notelp, setNotelp] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(notelp);
    console.log(password);
  };

  const onNoteChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotelp(e.target.value);
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="w-1/2 flex max-w-md flex-col gap-4" onSubmit={onSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="notelp" value="Nomor Telepon" />
          </div>
          <TextInput
            type="text"
            id="notelp"
            placeholder="088xxxxxxxxx"
            required
            value={notelp}
            onChange={onNoteChangeHandler}
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
