// Contoh parent to child 
 
 // eslint-disable-next-line react/prop-types
 function  ChildComponent({title , description , age = 19, ...props}) {

    return  (
        <div>
           <h1>{title}</h1>
           <p>{description}</p>
           <p>{age}</p>
           <Image {...props}/>
        </div>
    );
}  


export default function  ParentComponent (){
    return  (
        <Children>
        <ChildComponent 
         title='Title'
         description='Deskripsi'
         src="./Images/react.png" 
         alt="react"
         size="200px" 
         />
        </Children>
    );
}

// Contoh Menggunakan props spread Syntax

// eslint-disable-next-line react/prop-types
function Image ({src, alt, size}){
    return(
        <>
        <img src={src} alt={alt} style={{width: size, height: size}}/>
        </>
    );
}


// contoh JSX as children

// eslint-disable-next-line react/prop-types
function Children ( {children} ) {
    return <div className="bg-red-500 pl-5">{children}</div>

}



//  Contoh dari ustadz


// function ChildComponent({nama,desc="testing"}){
//     return(
//         <div>
//             <h1>{nama}</h1>
//             <p>{desc}</p>
//         </div>
//     )
// }
// export default function ParentComponent(){
//     return(
//         <div>
//             <ChildComponent nama="yazid" />

//         </div>
//     )
// }