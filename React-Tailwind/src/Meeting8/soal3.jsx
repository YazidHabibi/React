import {useState} from 'react'

function SimpleCalculator () {
    const [Number1, setNumber1] = useState()
    const [Number2, setNumber2] = useState()
    const [result, setResult] = useState(0)

    const HandlePlus = () => {
        setResult(parseInt(Number1) + parseInt(Number2))
    }

    const HandleMinus = () => {
        setResult(Number1 - Number2)
    }

    const HandleMultiply = () => {
        setResult(Number1 * Number2)
    }

    const HandleDivide = () => {
        setResult(Number1 / Number2)
    }

    function ResetResult () {
        setResult(0)
        setNumber1('')
        setNumber2('')
    }

    return (
        <>
        <div className="m-3 border-2 rounded-lg ">
            <input type="number"
            value={Number1}
            onChange={(e) => setNumber1(e.target.value)}
            placeholder='Masukan Angka Pertama'
            className='w-full p-2'/>
        </div>
            
        <div className='m-3 border-2 rounded-lg'>
            <input type="number"
            value={Number2}
            onChange={(e) => setNumber2(e.target.value)}
            placeholder='Masukan Angka Kedua'
            className='w-full p-2'/>
        </div>

        <div className='border-2 rounded-lg p-5 m-5'>
            <button onClick={HandlePlus} className='bg-blue-400 border-1 rounded-md p-3 mb-3 w-full'>Tambah</button>
            <br />
            <button onClick={HandleMinus} className='bg-blue-400 border-1 rounded-md p-3 mb-3 w-full'>Kurang</button>
            <br />
            <button onClick={HandleMultiply} className='bg-blue-400 border-1 rounded-md p-3 mb-3 w-full'>Kali</button>
            <br />
            <button onClick={HandleDivide} className='bg-blue-400 border-1 rounded-md p-3 mb-3 w-full'>Bagi</button>

            <button onClick={ResetResult} className='bg-red-400 border-1 rounded-md p-3 mb-3 w-[300px] '>Reset</button>


        <h2 className='border-2 rounded-lg text-center p-5 bg-gray-300 text-black'> Hasilnya : {result}</h2>
        </div>
        </>

    )
}

export default SimpleCalculator;