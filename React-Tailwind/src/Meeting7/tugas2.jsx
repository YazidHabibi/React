 // eslint-disable-next-line react/prop-types
 function ShowAlert ({message , children}) {
        return (
        <div>
            <button 
            className="bg-blue-500 w-20 h-20 ml-20 mt-20 rounded-xl"
            onClick={() => alert(message)}>
            {children}
            </button>
        </div>
        )
}

export default function Alert () {
    return(
        <div>
            <ShowAlert message="Anda Telah Mengklik Tombol Ini dihbashbdbsadbsa">Click Me !</ShowAlert>
        </div>
    )
}