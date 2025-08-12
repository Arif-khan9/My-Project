
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { CiBrightnessDown } from "react-icons/ci";
import { FiX } from "react-icons/fi";
import { motion} from 'framer-motion';
import fadeIn, { fadeWithNoSize } from './Animation';

const Navbar = () => {  
 const [ darkmode , setDarkmode]=  useState(false)
const [menu, setMenu] = useState(false)

 const lightmode = () =>{
  setDarkmode(!darkmode)
 }

 const clickHandlebutton = () =>{
  setMenu(!menu)
 }
 useEffect(()=>{
  document.body.className = darkmode ? "bg-black text-white" : "bg-white text-black";
 },[darkmode])
  return ( 
    <>  
    
    <nav className="shadow-2xl " > 
        <div className='fixed top-0 left-0 w-full  backdrop-blur-md  bg-blue-100/30  shadow-sm flex   justify-between items-center py-3 md:py-6   px-7'>
            <div>
            <a href="#section"><img className='h-6 w-6 ' src="home_logo copy.png" alt="" /></a>
          </div>
        <div className="ml-37 md:ml-3 ">
          <ul className=' hidden md:flex   md:gap-7 pt-15 pl-10 gap-5  p-4 shadow-md   px-8 md:py-4 md:rounded-full shadow-sm '>
                <li><a href="#about" className=" hover:cursor-pointer " >About</a>  </li>
                <li><a href="#skill" className='hover:cursor-pointer '>Skills</a></li>
                <li> <a href="#project" className='hover:cursor-pointer '>Projects</a></li>
                <li><a href="#contect" className='hover:cursor-pointer'>Contact</a></li>      
            </ul>
          {menu ? (
            <motion.ul  className='  md:hidden pt-10 pl-10 flex flex-col gap-8   h-screen w-64 bg-sky-200  ' variants={fadeIn("left")} initial="hidden" whileInView={"show"}>
              <motion.div variants={fadeIn("left")} initial="hidden" whileInView={"show"}>
                   <FiX  onClick={clickHandlebutton} className="relative bottom-5 text-cyan-800 text-4xl left-25  "/>
              </motion.div>
                <li onClick={clickHandlebutton}><a href="#about" className=" hover:cursor-pointer text-cyan-800" >About</a>  </li>
                <li onClick={clickHandlebutton}><a href="#skill" className='hover:cursor-pointer text-cyan-800'>Skills</a></li>
                <li onClick={clickHandlebutton}> <a href="#project" className='hover:cursor-pointer text-cyan-800'>Projects</a></li>
                <li onClick={clickHandlebutton}><a href="#contect" className='hover:cursor-pointer text-cyan-800'>Contact</a></li>      
            </motion.ul>
             
          ) : (
             <FiX  onClick={clickHandlebutton} className=" hidden md:hidden relative bottom-11 text-cyan-800 text-3xl left-35 bg"/>
          )}  
        </div>
        <div className='flex items-center justify-center gap-3 '>
          {darkmode ?<IoMoonOutline  className="h-6 w-6 " onClick={lightmode} /> :  <CiBrightnessDown  className="h-6 w-6" onClick={lightmode}/>}
            <a download href="../../last.pdf"><button  className='md:flex hidden md:block border px-10 py-3 gap-3.5 rounded-full'>Resume <span><GoDownload className="h-5 w-5" /></span></button></a>
           <div><CiMenuFries  values="menu" onClick={clickHandlebutton} className='md:hidden h-6 w-6  '/> </div>
        </div>
        </div> 
        </nav>
        </>
       ) }

export default Navbar

;


