
const Paragraph=(props)=>{

    return(
        
        <div className="paragraph  w-3/5  bg-transparent text-white  ">
           
           
               
                <h2 className=" text-xl m-6 text-left" >
               Using our <span className="font-bold" style={{fontSize:22}}>{props.title}</span> solutions we are tackling everyday problems that face us in an innovative way
                </h2>
         </div>
       
        
    );
}

export default Paragraph;