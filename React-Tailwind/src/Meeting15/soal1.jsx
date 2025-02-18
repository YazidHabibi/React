import { useState } from "react";
import axios from "axios";

export const SimpleUserForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [respondata, setRespondata] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios
        .post("https://fakestoreapi.com/auth/login", {
            username,
            password,
        })
        .then((response) => {
            setRespondata(response.data);
        })
        .catch((error) => {
            setError(error.message);
        });
    };

    return  (
        <div>
            <h1>Submit User Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name :</label>
                    <input type="text"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label >Password :</label>
                    <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {respondata && (
                <div>
                    <h2>Response Data:</h2>
                    <pre>{JSON.stringify(respondata, null, 2)}</pre>
                </div>
            )}
            {error && (

                <p>{error}</p>
    )}
            
        </div>
        
    )
}

