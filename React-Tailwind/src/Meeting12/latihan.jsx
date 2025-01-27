import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

function CobaRouter () {
     return ( 
    <>
     <h2>Halaman Utama</h2>
     <Link to="/second-place">Kata kata kedua</Link>
    </>
    )
}

function SecondPlace () {
    return (
        <>
        <h2>Halaman Kedua</h2>
        <Link to="/">Kata kata untuk kembali ke halaman awal</Link>
        </>
    )
}

const router = createBrowserRouter ([
    {
        path: "/  im",  
        element: <CobaRouter />
        
    },
    {
        path: "/second-place",
        element: <SecondPlace />
    }
]);

function App () {
    return <RouterProvider router={router} />
}


export default App