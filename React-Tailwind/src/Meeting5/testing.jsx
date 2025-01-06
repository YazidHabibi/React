// If Condtional 

// function Test ({name, Benar}) {
//     // if conditional
//     if (Benar) {
//         return <li>{name} true</li>
//     } else { 
//         return <li>{name} false</li>
//     }
// }

// Termary operator

function Test ({name, Benar}) {
    // Termary Operator / nested termary
    
    return <li>
        {Benar
        ? name  + ' true'
        : name === 'Berlyva'
            ? 'my name is ' + name
            : name + ' false'
            }
        </li>

}

// Logical and





// export default function Conditional () {
//     return (
//         <div>
//             <ul>
//                 <Test name = 'Berlyva'Benar = {false} isCheckList={true}/>
//                 <Test name = 'fulan'Benar = {false} />
//                 <Test name = 'tiga'Benar = {true} />
//                 <Test name = 'empat'Benar = {true} />
//             </ul>
//         </div>
//     )
// } 