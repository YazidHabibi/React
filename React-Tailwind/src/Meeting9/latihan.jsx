import { useState } from "react";

// const SimpleNameList = () => { 
//     const [names, setNames] = useState(["Alice", "Bob"]);

//     return ( 
//         <div>
//         <h2>Daftar Nama</h2>
//         <ul>
//             {names.map((name,index) => (
//                 <li key={index}>{name}</li>
//             ))}
//         </ul>
//             <button onClick={() => setNames([...names, "Charlie"])}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg">
//                 Tambah Nama 
//             </button>

//         </div>
//     )
// }
    
    

const UpdateStateWithMap = () => {

    const [users, setUsers] = useState ([
        {id:1, name: "Alice", active: false},
        {id:2, name: "Bob", active: false},
        {id:3, name: "Charlie", active: false},
    ]);

    const toggleActive = (id) => {
        setUsers((prevUsers) =>
        prevUsers.map((user) =>
         user.id === id ? {...user, active : !user.active} : user
        )
    );
}

    return(
        <div>
            <h2>Daftar Pengguna:</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="mb-2">
                        <span>
                            {user.name} - {user.active ? "Aktif" : "Tidak Aktif"}
                        </span>
                        <button onClick={( ) => toggleActive(user.id)} className="px-4 py-2 bg-blue-500 text-white rounded-lg"> Toggle</button>
                    </li>
                ))}
            </ul>

        </div>
    )
};
export default UpdateStateWithMap;