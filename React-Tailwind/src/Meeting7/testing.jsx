// export default function Testing () {
//     const handleClick = () => {
//         console.log("Button Clicked");
        
//     }
    
//     return (
//     <button className="bg-blue-500 w-20 h-20 ml-20 mt-20 rounded-xl"
//     onClick={handleClick}>
//         Click Me !!
//     </button>
// )
// }


export default function Event () {
    const handleDivClick = () => {
        console.log("Div Clicked");
}

    const handleButtonClick = (event) => {
        console.log("Button Clicked");
        event.stopPropagation();
    }

    return (
        <div onClick={handleDivClick} className="bg-gray-400 p-3">
            <button onClick={handleButtonClick} className="bg-blue-500 p-5 rounded-lg">Click Me !</button>
        </div>
    )
}


// eslint-disable-next-line no-unused-vars
function Signup () {
    return (
        <form 
        onSubmit={(e) => 
        {e.preventDefault()
        alert('Submitting')
        }}
        >
            <input/>
            <button>Send</button>
        </form>
    )
}