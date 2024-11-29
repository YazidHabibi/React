// eslint-disable-next-line react/prop-types
function EventPropagation ({onClick,children}) {
    return ( 
        <button className="bg-blue-500 w-20 h-20 ml-20 mt-20 rounded-xl"
        onClick={(e) => 
        {e.stopPropagation(); 
        onClick()}}>
            {children}
        </button>
    )
}
export default function EventPropagationExample () {
    return (
        <div className="bg-gray-400 p-9 inset-y-auto"
        onClick={() => alert("Tombol Pertama Telahh Dklik")}>
            <EventPropagation className="bg-blue-600 p-x rounded-lg " 
            onClick={() => alert("Tombol Kedua Telah Dklik")}>
                Tekan INI !!!!!
            </EventPropagation>
        </div>
    )
}