import { useState } from "react";
import { products } from "./Product";

export default function Product({ product }) { 
    const [quantity, setQuantity] = useState(0);

    const handleAdd =  () => {
        setQuantity(quantity + 1);
    }

    const handleSubstract = () => {
        setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    }

   
    return (
        <div className="flex flex-2 justify-center m-10 ">
            {products.map((product) => (
                <div key={product.id} className="mt-5 border rounded-lg p-4 mx-4">

                    <img src={product.image} alt={product.title} className=" rounded-md" />

                    <h2 className="text-lg font-semibold mt-3">{product.title}</h2>

                    <p className="text-gray-600 ">${product.price}</p>

                    <div className="flex mt-4 ">
                    <h2 className="border border-black shadow-md w-10 text-center pt-3 rounded-lg mr-3 ">{quantity}</h2>

                    <div className="flex">
                    <button onClick={() => handleAdd(quantity + 1)}  className="bg-green-500 rounded-md m-1 p-2 hover:-translate-y-1 ">Tambah</button>

                    <button onClick={() => handleSubstract(quantity - 1)} className="bg-red-500 rounded-md m-1 p-2 hover:-translate-y-1">Kurang</button>
                    </div>

                    
                    
                    </div>
                </div>
            ))}

        </div>  
    )
}


