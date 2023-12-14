import React from 'react'

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen bg-zinc-800">
        <div className="absolute py-10 w-full flex justify-center font-semibold text-zinc-700 text-lg tracking-tight">Document</div>
        <h1 className="absolute -translate-x-[50%] -translate-y-[50%] font-zinc-900 text-[13vw] leading-none tracking-tighter top-1/2 left-1/2 font-semibold">DocX</h1>
      </div>
    </>
  )
}

export default Background