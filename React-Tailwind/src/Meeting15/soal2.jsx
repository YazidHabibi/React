import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { DetailPrdct } from "../Meeting14/soal2";



const ProtectedRoute = () => {
  const token = localStorage.getItem("authToken");
  return token ? <Outlet /> : <Navigate to="/" replace />;
};



const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/auth/login", { username, password })
      .then((response) => {
        const token = response.data.token;
        if (token) {
          localStorage.setItem("authToken", token);
          navigate("/product");
        } else {
          setError("Invalid credentials");
        }
      })
      .catch(() => {
        setError("Invalid credentials");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
        {error && <p className="mt-4 p-2 bg-red-100 text-red-700 rounded-lg">{error}</p>}
      </div>
    </div>
  );
};



const Store = () => {
  const [produk, setProduk] = useState([]);
  const [quantity, setQuantity] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduk(response.data);
        const initialQuantities = response.data.reduce((acc, product) => {
          acc[product.id] = 0;
          return acc;
        }, {});
        setQuantity(initialQuantities);
      })
      .catch((error) => console.error("Error Fetching Data", error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Products</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg">
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {produk.map((product) => (
          <div key={product.id} className="bg-white border rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <img src={product.image} alt={product.title} className="w-40 h-40 object-contain rounded-lg mb-4" />
            <h2 className="text-lg font-semibold text-gray-800 text-center">{product.title}</h2>
            <p className="text-gray-600 font-medium mt-2">${product.price}</p>
            <div className="flex items-center mt-4 space-x-3">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={() => setQuantity((prev) => ({ ...prev, [product.id]: prev[product.id] + 1 }))}>+</button>
              <span className="text-lg font-semibold px-4 py-2 bg-gray-100 border rounded-lg">{quantity[product.id]}</span>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => setQuantity((prev) => ({ ...prev, [product.id]: Math.max(0, prev[product.id] - 1) }))}>-</button>
            </div>
            <Link to={`/${product.id}`} className="mt-5 w-full text-center bg-blue-500 text-white py-3 rounded-lg">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/product" element={<Store />} />
          <Route path="/:id" element={<DetailPrdct />} />
        </Route>
      </Routes>
    </Router>
  );
};


