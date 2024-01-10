'use client';

import axios from 'axios';
import Button from '@/components/Button';
import { Label, TextInput, FileInput, Textarea, Avatar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import type { Product } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Alert from '@/components/Alert';
import Resizer from 'react-image-file-resizer';
import { useSession } from 'next-auth/react';

const EditProduct = ({ params: { id } }: { params: { id?: string } }) => {
 const [product, setProduct] = useState<Product | null>(null);
 const [name, setName] = useState('');
 const [category, setCategory] = useState('');
 const [price, setPrice] = useState('');
 const [description, setDescription] = useState('');
 const [image, setImage] = useState('');
 const [prevImage, setPrevImage] = useState('');
 const router = useRouter();
 const { data: session } = useSession();
 const accessToken = (session?.user as { accessToken?: string })?.accessToken;

 useEffect(() => {
  const fetchProductById = (async () => {
   try {
    const res = await axios.get(`${process.env.apiURL}/api/products/${id}`);
    setProduct(res.data.data.product);

    setName(res.data.data.product.name);
    setCategory(res.data.data.product.category);
    setPrice(res.data.data.product.price);
    setDescription(res.data.data.product.description);
    setImage(res.data.data.product.image);
    setPrevImage(res.data.data.product.image);
   } catch (err) {
    console.error(err);
   }
  })();
 }, [id]);

 const resizeFile = (file: File) =>
  new Promise((resolve) => {
   Resizer.imageFileResizer(
    file,
    300,
    300,
    'JPG',
    100,
    0,
    (uri: any) => {
     resolve(uri);
    },
    'base64'
   );
  });

 const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  try {
   const file = event.target.files?.[0];

   if (file) {
    if (file.size > 2000000) {
     throw new Error('File too large');
    }
    const imageRezise = await resizeFile(file);
    setImage(imageRezise as string);
   }
  } catch (error) {
   console.error('Error handling file:', error);
  }
 };

 const submitHandler = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
   // 1. Hapus gambar lama dari Cloudinary
   try {
    const responseDestroyImg = await axios.delete(`${process.env.apiURL}/api/cloudinary/remove`, {
     data: {
      public_id: prevImage,
     },
    });
    setPrevImage('');
   } catch (error) {
    console.error('Error deleting image:', error);
   }

   // 2. Hanya unggah gambar baru jika ada perubahan pada gambar
   try {
    const uploadResponse = await axios.post(`${process.env.apiURL}/api/cloudinary/upload`, {
     image,
    });
    const { url } = uploadResponse.data;

    if (url) {
     const formData = {
      name,
      category,
      description,
      price,
      image: url,
     };

     await axios.put(`${process.env.apiURL}/api/products/${id}`, formData, {
      headers: {
       Authorization: `Bearer ${accessToken}`,
      },
     });

     Alert({
      title: 'Berhasil',
      text: 'Data berhasil diubah',
      icon: 'success',
     });

     router.push('/admin');
    } else {
     Alert({
      title: 'Gagal',
      text: 'Terjadi kesalahan saat mengedit data. Silahkan upload ulang.',
      icon: 'error',
     });
    }
   } catch (error) {
    console.error('Error uploading image:', error);
   }
  } catch (err: any) {
   if (err?.response?.status === 401 && err?.response?.data?.message === 'Token has expired') {
    Alert({
     title: err.response.statusText,
     text: 'Terjadi kesalahan saat mengedit data. Silahkan login kembali.',
     icon: 'error',
    });
   }
   console.error(err);
   return err;
  }
 };

 return (
  <div className='flex items-center justify-center mt-4'>
   <form
    id='form'
    method='post'
    className='w-1/2 flex max-w-md flex-col gap-4'
    onSubmit={submitHandler}
    encType='multipart/form-data'
   >
    <div>
     <div className='mb-2 block'>
      <Label htmlFor='productName' value='Nama Produk' />
     </div>
     <TextInput
      type='text'
      id='productName'
      placeholder='Nama Produk'
      name='name'
      required
      onChange={(e) => setName(e.target.value)}
      value={name}
     />
    </div>
    <div>
     <div className='mb-2 block'>
      <Label htmlFor='productCategory' value='Jenis Produk' />
     </div>
     <TextInput
      type='text'
      id='productCategory'
      placeholder='Masukkan jenis produk'
      required
      value={category}
      name='category'
      onChange={(e) => setCategory(e.target.value)}
     />
    </div>
    <div>
     <div className='mb-2 block'>
      <Label htmlFor='productPrice' value='Harga Produk' />
     </div>
     <TextInput
      type='number'
      id='productPrice'
      placeholder='Masukkan Harga'
      required
      value={price}
      name='price'
      onChange={(e) => setPrice(e.target.value)}
     />
    </div>
    <div>
     <div className='mb-2 block'>
      <Label htmlFor='productDescription' value='Deskripsi Produk' />
     </div>
     <Textarea
      id='productDescription'
      placeholder={product?.description}
      required
      defaultValue={product?.description}
      value={description}
      rows={8}
      name='description'
      onChange={(e) => setDescription(e.target.value)}
     />
    </div>
    <div className='max-w-md' id='fileUpload'>
     <div className='mb-2 block'>
      <Label htmlFor='file' value='Gambar Produk' />
     </div>
     <FileInput
      accept='file'
      helperText='Anda bisa mengedit gambar produk jika gambar sudah usang atau rusak.'
      id='file'
      name='file'
      onChange={handleFileChange}
      // required
     />
    </div>
    <div className='max-w-md'>
     <p className='italic text-lg mb-1'>Preview Gambar</p>
     {!product?.image && !image ? (
      <p className='text-red-500'>Tidak ada gambar saat ini. Silahkan isi gambar agar preview berjalan</p>
     ) : (
      <Avatar
       className='rounded-md'
       alt='cardImage'
       img={(image as string) || `data:image/jpeg;base64,${image}`}
       // size={40}
       size={40}
      />
     )}
    </div>
    <div className='flex justify-end gap-2'>
     <Button buttonType='submit' className='bg-blue-700 text-sm p-2 rounded-md text-white font-semibold mb-4'>
      Edit Product
     </Button>
     <Button
      buttonType='button'
      clickHandler={() => router.push('/admin')}
      className='bg-red-700 text-sm p-2 rounded-md text-white font-semibold mb-4'
     >
      Batalkan
     </Button>
    </div>
   </form>
  </div>
 );
};

export default EditProduct;
