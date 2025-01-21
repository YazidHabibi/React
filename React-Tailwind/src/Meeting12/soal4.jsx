import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage  () {
    return (
        <>
        <h2>Ini Halaman Home</h2>
        <Link to="/ProfilePage">Halaman Profile</Link>
        </>
    )   
}

function DinamisRute () {
    return (
        <>
        <h1>Ini Halaman Profile</h1>
        <Link to="/">Halaman Home</Link>
        </>
    )
}

const router = createBrowserRouter ([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/ProfilePage',
        element: <DinamisRute />,
    }
])  

function Halaman () {
    return <RouterProvider router={router}/>
}

export default Halaman;