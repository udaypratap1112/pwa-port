import React from 'react'
import aboutImage from '../assets/about.jpg'
import { useTransform,motion} from 'framer-motion'

const Page2 = ({ progress, size }) => {
 
    const backgroundPos = useTransform(progress, [0, 20], ['0%', '60%'])

    return (
      <motion.div className='page bg-inherit  grid  sm:grid-cols-[1.6fr,3fr] gap-20 px-0 sm:px-10 md:px-28 h-fit   sm:h-screen  sm:min-w-screen sm:max-w-[100vw] shrink-0 overflow-hidden pb-10 sm:pb-0'>
          <motion.div className={`bg-no-repeat bg-cover min-h-[500px] sm:min-w-[400px] `} style={{backgroundImage:`url(${aboutImage})`,backgroundPositionX:backgroundPos}}></motion.div>
          <div   className="about self-center px-3 sm:px-0">
                <p className='font-semibold'>ABOUT</p>
                <motion.p initial={{ y:30,opacity:0.5 }} whileInView={{ y:0,opacity:1,transition:{duration:0.8,ease:'linear'}}} viewport={{once:true}} className='text-xl sm:text-2xl leading-1'>Hello, I'm Uday Pratap, a dedicated Software Engineer with a passion for creating intuitive, engaging,
                    and high-performing websites. With expertise in front-end and back-end development, I transform
                    ideas into functional, beautiful digital solutions.</motion.p>
                <div  className="flex gap-5 sm:gap-10 mt-10">
                    <motion.div initial={{ y:60,opacity:0.2 }} whileInView={{ y:0,opacity:1,transition:{duration:0.8,ease:'linear',delay:0.5}}} viewport={{once:true}} >
                        <p className='font-semibold'>WHAT I DO</p>
                        <p className='leading-[1.4]' ><span className='font-semibold' >Front-End Development:</span> Crafting visually appealing ,
                            interactive user interfaces and
                            ensuring seamless user experiences across all devices, from desktops to smartphones using
                            modern technologies like HTML, CSS, JavaScript, and React.</p>

                        <p className='mt-5 sm:mt-3 leading-[1.4]'><span className='font-semibold'>Back-End Development:</span> Building robust and scalable
                            server-side applications with Node.js, Express.js and MongoDB</p>
                    </motion.div>
                    <div >

                        <motion.div initial={{ y:40,opacity:0.2 }} whileInView={{ y:0,opacity:1,transition:{duration:0.8,ease:'linear',delay:0.5}}} viewport={{once:true}}>
                            <p className='font-semibold '>SKILLS</p>
                            <p className='leading-[1.4]'><span></span>
                                JavaScript, TypeScript, ReactJS, Redux, Context API, Material UI,  HTML5, CSS3, Bootstrap 5, GSAP,
                                Node.js, Express.js, MongoDB, RESTful API, AJAX, Authentication, Git, Puppeteer, Web Scraping, Tailwind CSS,
                                JWT.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
    </motion.div>
  )
}

export default Page2