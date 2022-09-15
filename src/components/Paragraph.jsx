
const Paragraph=(props)=>{

    return(
        
        <div className="paragraph  w-3/5  text-black backdrop-blur-sm  rounded-md m-2">
           
           
               
                <h2 className=" text-xl m-6 text-left" >
               Using our <span className="font-bold" style={{fontSize:22}}>{props.title}</span> 
               {props.description}
                </h2>
         </div>
       
        
    );
}

export default Paragraph;