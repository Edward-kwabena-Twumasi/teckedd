import bgvid from '../assets/humanoid.mp4'
import person from '../assets/solarenergy.jpg'


const Home=(props)=>{

    return(
        
        <div className=" home z-40 h-screen w-full  text-white">

          

           <div className="vidoverlay absolute z-10 w-full h-full flex flex-row-reverse justify-between">
                {/* Company vision card card */}
               <div className='flex flex-col justify-end'>
    
                  <div className='visionintrocard h-40 m-7 rounded-lg shadow-md bg-white '>
                     <div className='flex justify-start rounded-tr-lg rounded-tl-lg'>
                  <img src={person} alt='person talking'  className="rounded-full border-solid  border-2 m-3 w-14 h-14 mr-0"></img>
                  <h1 className=' p-3 text-left text-sm font-bold text-black mt-4'> 
                  Robert Doe,CEO (Code Den)
                  </h1>
                  </div>
                  <h3 className=' p-3 text-left text-sm font-medium text-slate-400 m-3 mt-0'>
                  TeckEdd has a promising future.
                  </h3>
                  </div>
                  <div className='visionintrocard h-40 m-7 rounded-lg shadow-md bg-white '>
                     <div className='flex justify-start rounded-tr-lg rounded-tl-lg'>
                  <img src={person} alt='person talking'  className="rounded-full border-solid  border-2 m-3 w-14 h-14 mr-0"></img>
                  <h1 className=' p-3 text-left text-sm font-bold text-black mt-4'> 
                  Edward K. Twumasi,CEO
                  </h1>
                  </div>
                  <h3 className=' p-3 text-left text-sm font-medium text-slate-400 m-3 mt-0'>
                  TeckEdd believes in the popular saying "If it can be imagined,It can be created"
                  </h3>
                  </div>
               </div>
         
                {/* company home intro  section */}
                <div className='flex flex-col  justify-center ml-10  mt-10'>
                     <h1  className=" text-2xl font-bold mt-20 text-start text-slate-500" style={{fontSize:52}}>
                        Smart, Creative
                         
                     </h1>
                     <h1  className=" text-2xl font-bold mt-5 text-start" style={{fontSize:50}}>
                       and intelligent
                         
                     </h1>
               
                     <h1 className='mt-10 font-bold font-serif border-solid border-white border-2 p-7 py-4 
                  rounded-full  text-center  hover:bg-black hover:text-white hover:scale-100 transition duration-150 ease-in-out '>Explore products</h1>
            
                </div>
              
           </div>
           <video src={bgvid} autoPlay loop className="w-screen h-full object-cover absolute z-5"/>
                
         </div>
       
        
    );
}

export default Home;