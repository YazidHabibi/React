import { useState } from "react"
function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
        <h1>Counter: {count} </h1>
        <button onClick={() => setCount(count + 1)} className="bg-blue-500">Tambah</button>
        <br />
        <button onClick={() => setCount(count - 1)} className="bg-red-500">Kurang</button>
        <br />

        <button onClick={() => (setCount(0))} className="bg-green-500">Reset</button>
        
        </>
    )
}

export default Counter;
