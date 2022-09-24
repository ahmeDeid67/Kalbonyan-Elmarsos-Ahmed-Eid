import React from "react";
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ showModal, setShowModal}) => {
    const modal = {
        hidden: {opacity:0,},
        visible: {
            opacity: 1,
            transition:{
                duration: 1
        }},
        exit: {
            opacity: 0
        }
    }

    const content = {
        hidden: {scale: 0},
        visible: {
            scale: 1
        }
    }

return (
    <AnimatePresence>
        { showModal && (
            <motion.div
                variants={modal}
                initial='hidden'
                animate='visible'
                exit='exit'
                className='absolute flex justify-center items-center left-0 right-0 bottom-10 h-screen w-full'>
                    <motion.div variants={content} className='flex flex-col space-y-4 shadow-2xl justify-between bg-white rounded-xl w-3/4 md:1/2 xl:w-1/3 h-2/5 text-center'>
                        <h2 className='text-6xl w-full h-full pt-8 m-auto rounded-t-xl bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500'>🥳 🎉</h2>
                        <div className='font-body px-4 pb-10 text-lg leading-loose'>
                            <p>Thanks for the message!</p>
                            <p>I'll get back to you as soon as I can!</p>
                            <button onClick={()=> {setShowModal(false)}} className='bg-light-green mt-2 p-2 border border-graphite font-body md:w-1/3 hover:scale-105 active:scale-95 transform duration-200'>Back to site</button>
                        </div>
                    </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
    )
}

export default Modal