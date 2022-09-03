import bgvid from '../assets/humanoid.mp4'

const Home=(props)=>{

    return(
        
        <div className=" home z-0 h-screen w-full  text-white">

          

           <div className="vidoverlay absolute z-2 w-full h-full">
                <div className='flex flex-col justify-start'>
                <h1  className=" text-2xl font-bold mt-20" style={{fontSize:40}}>
                   The Teck company
                </h1>
                <h2 className="text-xl text-black-100 mt-5" >
              We dare to create cutting edge tech products the beat imagination
                </h2>
                </div>
              
           </div>
           <video src={bgvid} autoPlay loop className="w-full h-full object-cover"/>
                
         </div>
       
        
    );
}

export default Home;