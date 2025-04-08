 import { FaLinkedin } from "react-icons/fa";
 import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <b className="text-lg">DA</b>
    </div>
    <div className="m-8 flex items-center justify-center gap- text-2xl">
        <a target="_blank" href="https://www.linkedin.com/in/devon-artist/git"><FaLinkedin /></a>
        <a target="_blank" href="https://github.com/dartist1"><FaGithub /></a>
    </div>
    
  </nav> 
    
  
};

export default Navbar
