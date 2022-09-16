
const Card=(props)=>{

    return(
        
        <div className={"card h-1/2 w-2/5  m-7  rounded-lg  shadow-md  "+props.extrastyle}>
            <div className="h-full w-full   rounded-lg bg-no-repeat bg-center bg-cover" style={{ 
                    backgroundImage: props.image
                    }}>

            </div>
           
        </div>
        
    );
}

export default Card;