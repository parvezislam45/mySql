import React, { useState } from 'react';
import axios from "axios";
import { useNavigate} from "react-router-dom";

const Update = () => {
    const [productId, setProductId] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    
    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
          const formData = new FormData();
          formData.append('name', name);
          formData.append('desc', desc);
          formData.append('category', category);
          formData.append('price', price);
          formData.append('image', image);
    
          const response = await axios.put(`http://localhost:9000/products/${productId}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
    
          setMessage(response.data);
        } catch (error) {
          console.error('Error updating product:', error);
          setMessage('Error updating product');
        }
      };
  
    return (
        <div>
        <h2>Update Product</h2>
        <form onSubmit={handleUpdate}>
          <label>
            ID:
            <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
          </label>
          <br />
          <label>
            Name:
            <input defaultValue={name.name} type="text" value={name} onChange={(e) => setName(e.target.value)} />
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
          <label>
            Image:
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </label>
          <br />
          <button type="submit">Update Product</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
};

export default Update;