
const Page=()=>{

    return(
        
        <div className="page h-80  bg-[#cbd5e1] m-7 rounded-lg self-center shadow-md flex flex-col">
            <div className="h-2/3  rounded-tl-lg rounded-tr-lg bg-no-repeat bg-center bg-cover" style={{ 
                    backgroundImage: `url("https://picsum.photos/id/1/200/300")` 
                    }}>

            </div>
            <div className="place-self-start h-1/3 p-4">
                <h1  className="place-self-start ">
                    Machine learning
                </h1>
                <h2 className="place-self-start " >
                I am a card representing a product about Machine learning
                </h2>
         </div>
        </div>
        
    );
}

export default Page;