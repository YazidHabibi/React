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


import { useState } from "react";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit =  (e) => {
        e.preventDefault();
        axios
            .post("https://fakestoreapi.com/auth/login", { 
                username, 
                password,
            })
            .then((respone) => {
                setResponse(respone.data);
                setError(null);
            })
            .catch((err) => {
                setError(error.message);
                setResponse(null);
            });
    };
    return (
        <div>
            <h1>Input Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div>
                    <h2>Response:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div>
                    <h2>Error:</h2>
                    <pre>{JSON.stringify(error, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

