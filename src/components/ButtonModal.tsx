'use client';

import { Button } from 'flowbite-react';

import FormModal from '@/components/FormModal';

import { useState } from 'react';
export default function ButtonModal() {
 const [isOpenModal, setIsOpenModal] = useState<string | undefined>();
 const [product, setProduct] = useState('');
 const [category, setCategory] = useState('');
 const [price, setPrice] = useState('');
 const [description, setDescription] = useState('');
 const [selectedFile, setSelectedFile] = useState('');
 const [image, setImage] = useState<string | null>(null);

 const handleOpenModal = (value: string | undefined) => {
  setIsOpenModal(value);
  resetDataForm();
 };

 const props = { openModal: isOpenModal, setOpenModal: handleOpenModal };

 const resetDataForm = () => {
  setProduct('');
  setCategory('');
  setPrice('');
  setDescription('');
  setSelectedFile('');
  setImage(null);
 };

 return (
  <>
   <Button onClick={() => props.setOpenModal('form-elements')} className='bg-primary self-end my-8 md:mr-4'>
    Tambah Produk Baru
   </Button>
   <FormModal
    props={props.openModal === 'form-elements'}
    setProps={() => props.setOpenModal(undefined)}
    resetDataForm={resetDataForm}
    product={product}
    setProduct={setProduct}
    category={category}
    setCategory={setCategory}
    price={price}
    setPrice={setPrice}
    description={description}
    setDescription={setDescription}
    selectedFile={selectedFile}
    setSelectedFile={setSelectedFile}
    image={image}
    setImage={setImage}
   />
  </>
 );
}
