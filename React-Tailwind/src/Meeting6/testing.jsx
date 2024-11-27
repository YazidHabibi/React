// rendering

export default function RenderingList () {

    const user = [
        { id : 1 , name : "Belva"},
        { id : 2 , name : "Berly"},
        { id : 3 , name : "Budi"},
    ];

    const filteredUsers = user
    .filter((user) => user.name.endsWith("a"))
    .map((user) => <li key={user.id}>{user.name}</li>)
    
    return (

        <ul>
            {user.map((user) =>(
                <li key={user.id}>{user.name}</li>
            ))}
            
            {filteredUsers.map((user) =>(
                <li key={user.id}>{user.name}</li>
            ))}

            <hr />

            {[...user,...filteredUsers].map((user) =>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}