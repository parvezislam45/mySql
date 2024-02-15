import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('category', category); // Corrected key
    formData.append('price', price);       // Corrected key
    formData.append('image', image);

    try {
      await axios.post('http://localhost:9000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Product added successfully');

    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
 
  return (
    <div>
     <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
    </div>
  );
};

export default Add;
