
import { useState } from 'react'
export function InputName() {
  const id = "name";
  const label = "Name";
  return (
    <div className="form-floating mb-3">
      <input type="text" className="form-control" id={id} name={id}
      placeholder=""/> 
      <label forhtml={id}>{label}</label>
    </div>
  );
}

export function Description() {
  const id = "description";
  const label = "Description";
  return (
    <div className="form-floating mb-3">
      <textarea className="form-control" placeholder="" id={id} name={id}>
      </textarea>
      <label forhtml={id}>{label}</label>
    </div>
  )
}

export function InputPrice() {
  const id = "price";
  const label = "Price";
  return (
    <div className="form-floating mb-3">
      <input type="number" step={0.01} min={0} className="form-control" 
      d={id} name={id} placeholder=""/> 
      <label forhtml={id}>{label}</label>
    </div>
  );
}

export function InputImage() {
  const label = 'Image';
  const id = 'image';
  //const [value, setValue] = useState('/public/images/helmet.jpg');
  const [selectedImage, setSelectedImage] = useState(
    '/images/helmet.jpg');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const value = '/images/helmet.jpg';
  return (
    <div className="mb-3">
      <label forhtml={id} className="form-label">{label}</label>
    <input className="form-control" type="file" id={id} name={id}
     accept="image/*" onChange={handleImageChange} />
    </div>
  );
}

export function OptionCategory({categories}) {
  const option = (category) => (
    <option value={category.id} key={category.id}>{category.name}</option>
  );
  return (categories.map(option));
}

export function SelectCategory({categories}) {
  const id = 'category';
  const label = 'Category';
  return (
    <select className="form-select mb-3" aria-label="Default select example"
    id={id} name={id} defaultValue={label}>
      <OptionCategory categories={categories} />
    </select>
  );
}

export function Button() {
  return (
    <button type="submit" className="btn btn-primary ">Confirm</button>
  );
}
