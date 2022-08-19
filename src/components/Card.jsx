
const Card=(props)=>{

    return(
        
        <div className={"card h-80 w-2/5  m-7  rounded-lg  shadow-md flex flex-col "+props.extrastyle}>
            <div className="h-80 w-full   rounded-lg bg-no-repeat bg-center bg-cover" style={{ 
                    backgroundImage: `url("https://bit.ly/3PzUbGf")` 
                    }}>

            </div>
           
        </div>
        
    );
}

export default Card;