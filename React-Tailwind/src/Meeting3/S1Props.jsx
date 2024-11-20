// eslint-disable-next-line react/prop-types
function Greeting({name, message}){
    return(
        <>
        <h1>{name}</h1>
        <p>{message}</p>
        </>
    );
}

export default function App() {
    return (
        <Greeting
        name = "Alice"
        message= "Welcome To React"
        />
    )   
}