export  default  function SimpleClick () {
    function HandleClick() {
        console.log("Button Clicked");
        
    }
    return (
        <div>
            <button className=" ml-52 mt-28 border-2 bg-blue-500 p-5 rounded-lg" onClick={HandleClick} >Click Me !</button>
        </div>
    )
}

