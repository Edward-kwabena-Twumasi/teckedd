//import logo from '../logo.svg';

const Nav=()=>{

    return(
        <div className='navBar  h-30  text-white  w-full  mx-auto absolute z-50 flex flex-row  p-5 items-center hover:bg-white hover:text-black' >
            <div className='navlabel flex items-center'>
                
                <h4 className='title  hidden lg:block md:block font-bold'>T e c k E d d</h4>
            </div>

            <div className='navmenu ml-60'>
                <ul className='flex  items-end gap-8 font-mono font-extrabold'>
                    <li className='    hover:text-[#cbd5e1] p-2 rounded-md ' >
                    Software 
                    </li>
                    <li className='   hover:text-[#cbd5e1] p-2 rounded-md' >
                    <a href='#AI'>AI</a> 
                    </li>
                    <li className='      hover:text-[#cbd5e1] p-2 rounded-md' >
                    <a href='#Solar'>Solar</a> 
                    </li>
                    <li className='     hover:text-[#cbd5e1] p-2 rounded-md' >
                    <a href='#Robotics'>Robotics</a> 
                    </li>
                    <li className='     hover:text-[#cbd5e1] p-2  ' >
                    <a href='#Products'>Products</a> 
                    </li>
                </ul>
            </div>
 
   </div>
    );
}

export default Nav;