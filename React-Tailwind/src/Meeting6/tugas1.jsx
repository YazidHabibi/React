import { useState } from "./data";
import { products } from "../Meeting9/Product";

const Product = ({ products }) => {
    return (
        <div>
            {products && products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id} className="mt-5 border rounded-lg p-4 mx-2">
                        <img src={product.image} alt={product.title} className="w-full rounded-md " />
                        <p className="text-gray-600 mt-2">{product.desc || 'Tidak ada deskripsi'}</p>
                        <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
                        <p className="text-gray-600">${product.price}</p>
                    </div>
                ))
            ) : (
                <p className="text-center mt-5">Tidak ada produk tersedia.</p>
            )}
        </div>
    );
};

export default Product;
