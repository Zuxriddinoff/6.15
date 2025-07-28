import React from 'react'

function Popup({children}) {
  return (
    <>
    <div className='fixed top-0 left-0 w-full h-screen bg-black/50  z-40'></div>
    <div className='z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        {children}
    </div>
    </>
  )
}

export default Popup