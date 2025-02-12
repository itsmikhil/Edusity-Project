import React from 'react'

const NavOptions = ({el,idx}) => {
  return (
    <h3 className='nav-option text-[1.05vw] cursor-pointer md:text-[5vw]' key={idx}>{el}</h3>
  )
}

export default NavOptions