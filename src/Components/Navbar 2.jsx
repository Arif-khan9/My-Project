
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { CiBrightnessDown } from "react-icons/ci";
const Navbar = () => {
  const [ darkmode , setDarkmode]=  useState(false)

 const lightmode = () =>{
  setDarkmode(!darkmode)
 }
 

  return (
    
    <>
   <body className={darkmode ? 'bg-white text-black' : 'bg-black text-white'} >
    
   </body>
    <nav className="shadow-2xl"> 
        <div className='fixed top-0 left-0 w-full   backdrop-blur-md  bg-white/30  shadow-sm flex md:gap-8 md:px-10 lg:gap-20  justify-between items-center  py-6 px-5'>
            <div>
            <a href="#section"><img className='h-6 w-6' src="home_logo copy.png" alt="" /></a>
          </div>
        <div className=" ml-40 ">
            <ul className='md:flex  md:gap-7 pt-20 pl-10 flex flex-col gap-5   h-screen w-64 bg-amber-500 p-4 shadow-md md:hidden   md:px-8 md:py-4 md:rounded-full shadow-sm  md:block'>
                <li><a href="#about" className=" hover:cursor-pointer" >About</a>  </li>
                <li><a href="#skill" className='hover:cursor-pointer'>Skills</a></li>
                <li> <a href="#project" className='hover:cursor-pointer'>Projects</a></li>
                <li><a href="#contect" className='hover:cursor-pointer'>Contact</a></li>      
            </ul>
        </div>
        <div className='flex items-center justify-center gap-6'>
          {darkmode ?<IoMoonOutline  className="h-6 w-6" onClick={lightmode} /> :  <CiBrightnessDown  className="h-6 w-6" onClick={lightmode}/>}
          
         
            <a download href="../../last.pdf"><button  className='md:flex hidden md:block border px-10 py-3 gap-3.5 rounded-full'>Resume <span><GoDownload className="h-5 w-5" /></span></button></a>
            <div>
            <CiMenuFries  className='md:hidden h-6 w-6'/>
            </div>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
