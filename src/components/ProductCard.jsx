
const ProductCard=()=>{

    return(
        
        <div className="productcard h-30 w-2/5  bg-[#cbd5e1] m-3 rounded-lg  shadow-md flex flex-col ">
            <div className="h-80 w-full   rounded-lg bg-no-repeat bg-center bg-cover" style={{ 
                    backgroundImage: `url("https://picsum.photos/id/100/400/400")` 
                    }}>

            </div>
           
        </div>
        
    );
}

export default ProductCard;