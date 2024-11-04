import { IoPersonCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"
import { BsXLg } from "react-icons/bs";

export default function HeaderMenu({setMenuState}) {

    return (
        <section>
            <motion.div animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 0.2 }}
                className='fixed z-20 left-0 top-0 bg-cyan opacity-20 w-full h-full'></motion.div>

            <motion.div animate={{ x: -220 }} transition={{ ease: "easeOut", duration: 0.3 }} exit={{ x: 120 }}
                className='fixed -right-56 p-6 w-80 top-0 h-full flex flex-col items-end z-20 bg-white shadow-2xl  rounded-s-2xl'>
                <nav className='flex justify-between items-center w-full  border-b-2 p-2 border-gray2'>
                    <span>
                        <BsXLg className="text-xl font-bold" onClick={()=>{setMenuState(false)}}/>
                    </span>
                    <span className="flexbox gap-2">
                        <p className="subtitle">OLÁ, FAÇA SEU LOGIN</p>
                        <IoPersonCircleOutline className="text-2xl subtitle" />
                    </span>
                </nav>

            </motion.div>

        </section>

    )
}
