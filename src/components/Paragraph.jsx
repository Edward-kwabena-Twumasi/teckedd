
const Paragraph=(props)=>{

    return(
        
        <div className="paragraph  w-3/5  text-black backdrop-blur-sm  rounded-md m-2 flex flex-col">
              
               <h1 className="text-xl font-bold" style={{fontSize:30}}>{props.title}</h1>
                <h2 className=" text-xl m-6 text-left" >
               Using our <span className="font-medium" style={{fontSize:19}}>{props.title} , </span> 
               {props.description}
                </h2>
                <h1 className='mt-10 font-bold font-serif border-solid border-black border-2 p-3 m-5 
              rounded-full w-40 self-center  hover:bg-black hover:text-white hover:scale-125 transition duration-150 ease-in-out '>Read more</h1>
         </div>
       
        
    );
}

export default Paragraph;