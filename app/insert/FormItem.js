'use client';
import { InputName, Description, InputPrice, InputImage, SelectCategory,
  Button } from '../Form';
import { redirect } from 'next/navigation';

const insertAPI = async (formData) => {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/products/insert`;
  const option = {
    method: 'POST',
    body: await formData,
  };
  const response = await fetch(endpoint, option);
  return response;
};

const onSubmit = async (formData) => {
  await insertAPI(formData);
  redirect('/');
};

export const FormItem = ({categories}) => {
  return (
    <form action={onSubmit}>
      <InputName />
      <Description />
      <InputPrice />
      <InputImage />
      <SelectCategory categories={categories} />
      <Button />
    </form>
  );
};
