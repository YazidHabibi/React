import {createBrowserRouter , RouterProvider,useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

 function AmbilData() {
    const {id} = useParams();
    const [data, setData] = useState([]);
   

    useEffect(() => {
        axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=react${id}`)
        .then((response) => {
            setData(response.data);
            console.log(response.data);
            
        })
        .catch((error) => {
            console.error("Error Fatching Data", error);
            
        }, [])

    }, [data])

    return (
        <div>
            <h1>Detail Product</h1>
            <p>ID PRODUK : {id}</p>
            <p>{data.kind}</p>
            <div></div>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AmbilData/>
    },
    {
        path: "/:id",
        element: <AmbilData/>,
    },
]);


export default function CobauseParams() {
    return (
        <>
        <RouterProvider router={router}/>
        </>
    )
}
