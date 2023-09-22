'use client';
import { InputName, Description, InputPrice, InputImage, SelectCategory,
  Button } from '../Form';
import { redirect } from 'next/navigation';

const updateAPI = async formData => {
  const endpoint = '/api/products/update';
  const option = {
    method: 'POST',
    body: formData
  };
  const response = await fetch(endpoint, option);
  return response;
};

const onSubmit = async formData => {
  await updateAPI(formData);
  redirect('/');

};

const HiddenInput = ({ idItem }) => {
  return (
    <input type="hidden" name="idItem" value={idItem} />
  )
};

export const FormItem = ({categories, idItem, old}) => {
  return (
    <form action={onSubmit}>
      <InputName defaultValue={old.name} />
      <Description defaultValue={old.description} />
      <InputPrice defaultValue={old.price} />
      <InputImage defaultValue={'/images/helmet.jpg'} />
      <SelectCategory categories={categories} defaultValue={old.category_id} />
      <Button />
      <HiddenInput idItem={idItem} />
    </form>
  );
};


