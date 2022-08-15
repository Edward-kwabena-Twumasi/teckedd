import logo from '../logo.svg';

const Nav=()=>{

    return(
        <div className='navBar bg-[#334155] text-white  w-full  mx-auto  flex flex-row justify-between px-4 items-center'>
            <div className='navlabel flex items-center'>
                <img src={logo} alt='logo here' height={100} width='100'></img>
                <h4 className='title  hidden lg:block md:block'>ElectInfo</h4>
            </div>

            <div className='navmenu '>
                <ul className='flex  items-end gap-5'>
                    <li className=' px-6   text-white  rounded-md' >
                    Home
                    </li>
                    <li className='px-6  text-white  rounded-md' >
                    About
                    </li>
                    <li className=' px-6   text-white  rounded-md' >
                    Contact
                    </li>
                </ul>
            </div>
 
   </div>
    );
}

export default Nav;