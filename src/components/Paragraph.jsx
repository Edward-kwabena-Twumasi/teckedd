
const Paragraph=(props)=>{

    return(
        
        <div className="paragraph w-2/6 text-black backdrop-blur-sm  rounded-md m-5 flex flex-col justify-start ">
              
               <h1 className="text-md font-bold uppercase text-start font-serif" style={{fontSize:30}}>{props.title}</h1>
                <h2 className=" text-xl mt-4 text-start" >
               Using our <span className="font-medium" style={{fontSize:14}}>{props.title} expertise, </span> 
               {props.description}
                </h2>
                <h1 className='mt-5 font-bold font-serif border-solid border-black border-2 p-3  
              rounded-full w-40 text-center  hover:bg-black hover:text-white hover:scale-125 transition duration-150 ease-in-out '>Read more</h1>
         </div>
       
        
    );
}

export default Paragraph;