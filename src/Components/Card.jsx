import React from "react";
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineDownloading } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className="relative flex-shrink-0 h-64 bg-zinc-900/100 w-60 rounded-[2vw] text-white p-5 overflow-hidden">
      <FaFileLines />
      <p className="leading-1 mt-5">{data.desc}</p>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-5 px-8">
          <h5>{data.fileSize}</h5>
          {data.close ? <IoIosCloseCircleOutline /> : <MdOutlineDownloading />}
        </div>

        {data.tag.isOpen ? (
          <div className={`w-full ${data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'} py-4 text-center`}>
            {data.tag.tagTitle}
          </div>
        ) : null}
       
      </div>
    </motion.div>
  );
}

export default Card;
