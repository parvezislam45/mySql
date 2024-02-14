import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:9000/products");
      
        setProducts(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:9000/products/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>All Product</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          {product.image && (
              <img src={`http://localhost:9000/public/images/${product.image}`} alt={product.name} />
            )}

            <h1>{product.category}</h1>
            <h1>{product.desc}</h1>
            <h1>{product.price}</h1>
          <button
            onClick={() => handleDelete(product.id)}
            className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white"
          >
            Delete
          </button>
          <Link to={`/update/${product.id}`}>
            <button>Update</button>
          </Link>
        </div>
      ))}

      <Link to="add">
        <button>Add Products</button>
      </Link>
    </div>
  );
};

export default Home;
