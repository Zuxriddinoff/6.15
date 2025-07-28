import React from 'react'

function Title({children, className}) {
  return (
    <h3 className={`font-bold text-[26px] text-center ${className}`}>{children}</h3>
  )
}

export default Title