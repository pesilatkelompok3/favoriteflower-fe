'use client';
import { Label, Modal, TextInput, Textarea, FileInput, Avatar } from 'flowbite-react';
import Button from './Button';
import { fetchData, postData } from '@/lib/utils';
import { useState } from 'react';
import Alert from './Alert';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import { addProduct } from '@/lib/reducers/products';
import { useDispatch } from 'react-redux';

type FormModalProps = {
 openModal: any;
 setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>;
 resetDataForm: () => void;
 product: string;
 setProduct: React.Dispatch<React.SetStateAction<string>>;
 category: string;
 setCategory: React.Dispatch<React.SetStateAction<string>>;
 price: string;
 setPrice: React.Dispatch<React.SetStateAction<string>>;
 description: string;
 setDescription: React.Dispatch<React.SetStateAction<string>>;
 selectedFile: string;
 setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
 image: string | null;
 setImage: React.Dispatch<React.SetStateAction<string | null>>;
};

const FormModal = ({
 props,
 setProps,
 resetDataForm,
 product,
 setProduct,
 category,
 setCategory,
 price,
 setPrice,
 description,
 setDescription,
 selectedFile,
 setSelectedFile,
 image,
 setImage,
}: FormModalProps['openModal']) => {
 const { data: session } = useSession();
 const accessToken = (session?.user as { accessToken?: string })?.accessToken;
 const dispatch = useDispatch();

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
   console.log({ file });

   if (file) {
    if (file.size > 5000000) {
     throw new Error('File too large');
    }

    const imageRezise = await resizeFile(file);
    console.log({ imageRezise });
    setImage(imageRezise as string);
    console.log(image);
   }
  } catch (error) {
   console.error('Error handling file:', error);
  }
 };

 const submitHandler = async (e: React.FormEvent) => {
  e.preventDefault();

  const uploadResponse = await axios.post(`${process.env.apiURL}/api/cloudinary/upload`, {
   image,
  });

  console.log({ uploadResponse });
  const { url: dataImage } = uploadResponse.data;

  if (dataImage) {
   setSelectedFile(dataImage);
   console.log('selectedFile', selectedFile);
   const formData = {
    name: product,
    category,
    price,
    description,
    image: dataImage,
   };

   const response: any = await postData({
    url: `${process.env.apiURL}/api/products`,
    data: formData,
    token: accessToken,
   });

   dispatch(addProduct(response.data));
   setProps(false);
   resetDataForm();
  } else {
   console.error('Error uploading image');
  }
 };

 return (
  <Modal show={props} size='md' popup onClose={setProps}>
   <Modal.Header />
   <Modal.Body>
    <div className='space-y-6'>
     <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Tambah Produk</h3>
     <form id='form' method='post' onSubmit={submitHandler} encType='multipart/form-data'>
      <div>
       <div className='mb-2 block mt-2'>
        <Label htmlFor='productName' value='Nama Produk' className='font-semibold' />
       </div>
       <TextInput
        id='productName'
        placeholder='Nama Produk'
        name='name'
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        required
       />
      </div>
      <div>
       <div className='mb-2 block mt-2'>
        <Label htmlFor='productPrice' value='Harga Produk' className='font-semibold' />
       </div>
       <TextInput
        id='productPrice'
        placeholder='Harga Produk'
        type='number'
        name='price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
       />
      </div>
      <div>
       <div className='mb-2 block mt-2'>
        <Label htmlFor='categoryProduct' value='Jenis Produk' className='font-semibold' />
       </div>
       <TextInput
        id='categoryProduct'
        placeholder='Jenis Produk'
        name='category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
       />
      </div>
      <div>
       <div className='mb-2 block mt-2'>
        <Label htmlFor='descProduct' value='Deskripsi Produk' className='font-semibold' />
       </div>
       <Textarea
        id='descProduct'
        placeholder='Deskripsi Produk'
        name='description'
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
       />
      </div>
      <div className='max-w-md' id='fileUpload'>
       <div className='mb-2 block mt-2'>
        <Label htmlFor='file' value='Gambar Produk' className='font-semibold' />
       </div>
       <FileInput
        helperText='Gambar Produk akan ditampilkan di halaman produk. Silahkan masukkan 1 Gambar produk dengan kualitas yang pas.'
        accept='file'
        name='file'
        onChange={handleFileChange}
        id='file'
        required
       />
      </div>
      <div className='max-w-md mt-2'>
       <p className='text-gray-500'>Preview Gambar</p>
       {!image ? (
        <p className='text-red-500 mt-1 text-sm'>Tidak ada gambar saat ini. Mohon isi gambar agar preview berjalan.</p>
       ) : (
        <Avatar
         className='rounded-md mt-2'
         alt='cardImage'
         img={image as string}
         // size={40}
         size={40}
        />
       )}
      </div>
      <Button buttonType='submit' className='bg-blue-500 px-4 py-2 rounded-md float-right text-white mt-4'>
       Tambah Data
      </Button>
      <div className='clear-both'></div>
     </form>
    </div>
   </Modal.Body>
  </Modal>
 );
};

export default FormModal;
