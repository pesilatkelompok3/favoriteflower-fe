'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoginInput from '@/components/LoginInput';
import Alert from '@/components/Alert';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function DefaultForm({ searchParams }: any) {
 const router = useRouter();
 const callbackUrl = searchParams?.callbackUrl || '/admin';

 const onSubmit = async ({ username, password }: { username: string; password: string }) => {
  console.log({ username });
  console.log({ password });
  try {
   const res = await axios.post(`${process.env.apiURL}/api/auth`, {
    username,
    password,
   });
   console.log(res.data);
   const data = res.data;
   console.log({ data });
   const response = await signIn('credentials', {
    username,
    password,
    token: data.data.accessToken,
    redirect: false,
    callbackUrl,
   });

   if (response?.status === 200) {
    Swal.fire({
     title: 'Success',
     text: 'Login Success',
     icon: 'success',
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
    });

    router.push(callbackUrl);
   } else {
    Swal.fire({
     title: 'Login Failed',
     text: 'Username or password is wrong',
     icon: 'error',
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
    });
   }
  } catch (err: any) {
   console.log(err);
   Alert({
    title: err?.response?.statusText || 'Error',
    text: err?.response?.data?.errors || 'Username or password is wrong',
    icon: 'error',
   });
   console.log('access denied: ', err.message);
   return err.message;
  }
 };

 return (
  <>
   <LoginInput onLogin={onSubmit} />
  </>
 );
}
