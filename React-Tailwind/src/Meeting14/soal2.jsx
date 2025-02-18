import  {createBrowserRouter, Link, RouterProvider, useParams} from "react-router-dom";
import { useState, useEffect, } from "react";
import  axios  from "axios";

export function BacaBuku () {
  const [quantity,setQuantity] = useState(0);
  const [produk, setProduk] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduk(response.data);
        
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
        {produk.map((product) => (
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

            <Link to={`/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Lihat Detail</Link>

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
)
}

      export function DetailPrdct() {
        const { id } = useParams();
        const [product, setProduct] = useState(null);
      
        useEffect(() => {
          axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.error("Error fetching product detail:", error));
        }, [id]);
      
        if (!product) {
          return <p className="text-center text-gray-500 mt-4">Loading product details...</p>;
        }
      
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 flex flex-col lg:flex-row items-center lg:items-start lg:gap-8 bg-gray-50 rounded-lg shadow-md max-w-5xl mx-auto">
              <div className="w-full lg:w-1/3">
                <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded-lg shadow-sm" />
              </div>
              <div className="w-full lg:w-2/3">
                <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                <p className="text-gray-700 text-lg mb-4">Rp. {product.price}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-gray-500 mb-4">Category: {product.category}</p>
                <div className="flex gap-4">
                  <Link to={`/product`} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300">Back to Home</Link>
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Add to Bag</button>
                </div>
                <p className="text-gray-500 mt-6 text-sm">Free shipping on all continental US orders.</p>
              </div>
            </div>
          </div>
        );
      }

const router = createBrowserRouter([
    {
        path: "/",
        element: <BacaBuku/>
    },
    {
        path: "/:id",
        element: <DetailPrdct/>
    }
 ]) ;

export default function Buku () {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

