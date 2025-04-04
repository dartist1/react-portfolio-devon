import aboutImg from "../../assets/about.jpg"
import { ABOUT_TEXT } from "../../constants"
import { motion } from "motion/react"

const About = () => {
  return <div className="border-b border-neutral-900 pb-4">
    
    <div className="flex flex-wrap">
        <motion.div whileInView={{opacity: 1, x:0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="about" />
            </div>            
        </motion.div>
        <motion.div whileInView={{ opacity:1, x:0 }} initial={{ opacity:0, x:100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2">
            <h2 className="my-7 text-3xl">
                About 
                <span className="text-pink-300"> Me</span> 
            </h2>
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
        </motion.div>
    </div>
  </div>
}

export default About
