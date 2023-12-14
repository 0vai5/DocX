import React, { useRef } from 'react'
import Card from './card'

function Foreground() {
const ref = useRef(null)

    const data = [
        {
            'desc' : 'GTA VI full trailer HD',
            'fileSize' : "27mb",
            close : true,
            tag: {isOpen: false, tagTitle: 'Download Now!', tagColor: 'green'}
        },
        {
            'desc' : 'Guardians Of the Galaxy Volume 3 | UHD 4K',
            'fileSize' : "4GB",
            close : true,
            tag: {isOpen: true, tagTitle: 'Download Now!', tagColor: 'blue'}
        }
    ]
  return (
    <>
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
    </>
  )
}

export default Foreground