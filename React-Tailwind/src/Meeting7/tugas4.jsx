export default function PreventDefault () {
    return (
        <form className="bg-red-500 w-1/2 h-auto ml-20 mt-20 rounded-md"
         onSubmit={(e) => {
             e.preventDefault()
             alert('Submit')}}
        >
            <input type="submit"value='submit' className="p-2 border-2 rounded-xl mr-3"/>
            <input type="text" className="border-2 rounded-lg" placeholder="Masukkan text" />
        </form>


    )
}