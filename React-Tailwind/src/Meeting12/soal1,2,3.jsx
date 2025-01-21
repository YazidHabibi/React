import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

function FirstPage ( ){
    return (
        <>
        <div className=" border-2 rounded-lg shadow-md bg-gray-500">
        <h2 className=" my-5 text-center text-white">Ini Adalah Halaman Utama</h2>
        <Link to="/PageKedua" className=" bg-blue-500 m-5 p-3 rounded-md ml-[625px]">AboutPage</Link>
        </div>
        </>
    )
}

function SecondPage ( ){
    return (
        <>
        <div className="border-2 rounded-lg shadow-md" >
        <h2 className="my-5 text-center">Ini Adalah Halaman Kedua</h2>
        <Link to="/" className=" bg-red-500 m-5 p-3 rounded-md ml-[625px]">HomePage</Link>
        </div>
        </>
    )
}

const pager =   createBrowserRouter ([
    {
        path: '/',
        element: <FirstPage />,
        // Soal 2 Menambhakan Error Page 
        errorElement: <h2 className="text-red-500 text-6xl text-center mt-16">Error 404</h2>
    },
    {
        path: '/PageKedua',
        element: <SecondPage />,
    }
])

function Pages () {
    return <RouterProvider router={pager}/>
}

export default Pages