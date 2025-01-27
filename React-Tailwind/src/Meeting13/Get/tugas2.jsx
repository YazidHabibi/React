import axios from "axios";
import { useEffect, useState } from "react";

export default function Axios() {
  const [posts, setPosts] = useState([]);
  const [quantity, setQuantity] = useState({}); // Object to store quantities by product ID

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setPosts(response.data);
        // Initialize quantities for each product
        const initialQuantities = response.data.reduce((acc, product) => {
          acc[product.id] = 0;
          return acc;
        }, {});
        setQuantity(initialQuantities);
      })
      .catch((error) => {
        console.error("Error Fetching Data",error);
      });
  }, []);

  const incrementQuantity = (id) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(0, prevQuantities[id] - 1), // Prevent negative quantities
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-10">Daftar Produk</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-4 text-center">
              {product.title}
            </h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                onClick={() => incrementQuantity(product.id)}
              >
                Tambah
              </button>
              <span className="text-lg font-medium border px-4 py-2 rounded-lg">
                {quantity[product.id]}
              </span>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                onClick={() => decrementQuantity(product.id)}>Kurang</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
