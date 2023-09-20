'use client'
import { InputName, Description, InputPrice, InputImage, OptionCategory,
  SelectCategory, Button } from '../../components/Form';
import { redirect } from 'next/navigation';

const updateAPI = async event => {
  event.preventDefault();
  const data = {
    name: event.target.name.value,
    description: event.target.description.value,
    price: event.target.price.value,
    image: event.target.image.value,
    category: event.target.category.value,
    idItem: event.target.idItem.value,
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = '/api/products/update';
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSONdata
  };
  const response = await fetch(endpoint, option);
  return response;
};

const onSubmit = async event => {
  await updateAPI(event);
  redirect('/');

};

const HiddenInput = ({ idItem }) => {
  return (
    <input type="hidden" name="idItem" value={idItem} />
  )
};

export const FormItem = ({categories, idItem, old}) => {
  return (
    <form action={() => onSubmit(event)}>
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


