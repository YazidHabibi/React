import axios from 'axios';
import { useEffect, useState } from 'react';


export default function CobaAxios () {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
            setPosts(response.data)
        })
        .catch((error) => {
            console.error("Error Fatching Data", error);
        }, []);
    }, [posts])

    return (
        <div>
            <ul>
                {posts.map((product) =>
                (
                    <li key={product.id}>{product.price} {product.title}</li>
                    ))}
            </ul>
        </div>
    )
}
