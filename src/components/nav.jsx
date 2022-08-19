import logo from '../logo.svg';

const Nav=()=>{

    return(
        <div className='navBar bg-[#0f172a] text-white  w-full  mx-auto  flex flex-row justify-between px-5 items-center '>
            <div className='navlabel flex items-center'>
                <img src={logo} alt='logo here' height={100} width='100'></img>
                <h4 className='title  hidden lg:block md:block'>TeckEdd</h4>
            </div>

            <div className='navmenu '>
                <ul className='flex  items-end gap-5'>
                    <li className='    text-white  rounded-md' >
                    Home
                    </li>
                    <li className=' text-white  rounded-md' >
                    AI
                    </li>
                    <li className='    text-white  rounded-md' >
                    Solar
                    </li>
                    <li className='   text-white  rounded-md' >
                    Robotics
                    </li>
                    <li className='   text-white  rounded-md' >
                    Products
                    </li>
                </ul>
            </div>
 
   </div>
    );
}

export default Nav;