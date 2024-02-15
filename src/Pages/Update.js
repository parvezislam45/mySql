import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
const Update = () => {
  const {id} = useParams();
  const [name,setName]= useState('');
  const [category,setCategory]= useState('');
  const [desc,setDesc]= useState('');
  const [price,setPrice]= useState('');
  const [image,setImage]= useState('')
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:9000/products/'+id)
    .then(res => {
      setName(res.data[0].name);
      setCategory(res.data[0].category)
      setDesc(res.data[0].desc);
      setPrice(res.data[0].price);
      setImage(res.data[0].image)
    })
    .catch(err => console.log(err))
  },[])


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:9000/products/' + id, { name, desc, category, price, image })
      .then(res => {
        if (res.data.updated) { // Check for the correct property name
          navigate("/");
        } else {
          alert("not updated");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error updating product");
      });
  }
  return (
    <div>
    <h1>Update</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input value={name} onChange={e => setName(e.target.value)} placeholder='name' type="text" />
      <br/>
      <label htmlFor="">description</label>
      <input value={desc} onChange={e => setDesc(e.target.value)} placeholder='description' type="text" />
      <br/>
      <label htmlFor="">category</label>
      <input value={category} onChange={e => setCategory(e.target.value)} placeholder='category' type="text" />
      <br/>
      <label htmlFor="">price</label>
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder='price' type="text" />
      <br/>
      <label htmlFor="">image</label>
      <input value={image} onChange={(e) => setImage(e.target.files[0])} type="file" />
      <br/>
      <button>Update</button>
    </form>
    </div>
  );
};

export default Update;