import bgvid from '../assets/humanoid.mp4'

const Home=(props)=>{

    return(
        
        <div className=" home z-0 h-screen w-full  text-white">

          

           <div className="vidoverlay absolute z-2 w-full h-full flex justify-end">
            <h1>TeckEdd was started to create cutting edge technologies that are futuristic in nature.
               This is because we believe in the popular saying "If it can be imagined,It can be created"</h1>
                <div className='flex flex-col justify-start'>
                <h1  className=" text-2xl font-bold mt-20" style={{fontSize:60}}>
                   The Teck company
                </h1>
                <h2 className="text-xl text-black-100 mt-5" style={{fontSize:30}}>
              We dare to create cutting edge tech products the beat imagination
                </h2>
                </div>
              
           </div>
           <video src={bgvid} autoPlay loop className="w-screen h-full object-cover"/>
                
         </div>
       
        
    );
}

export default Home;