import { rackets } from "./data";

export default function Rackets () {
    return (
        <div className="grid grid-cols-3 gap-4">
            {rackets.map((racket) => (
                <div key={racket.id} className=" mt-5 border rounded-lg p-4 mx-2">
                    <img src={racket.image} alt={racket.title} className="w-full rounded-md " />
                    <p className="text-gray-600 mt-2">{racket.desc}</p>
                    <h2 className="text-lg font-semibold mt-3">{racket.title}</h2>
                    <p className="text-gray-600 h-full ">${racket.price}</p>    
               
                </div>
            ))}
        </div>
    );
}