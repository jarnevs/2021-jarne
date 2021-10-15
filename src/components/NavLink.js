import React from 'react';

const NavLink = ({ children, route = '#', className }) => {
  const changeActive = (e) => {
    
  }
  
  return (
    <a 
      className={className}
      onClick={changeActive}
      href={route}
    >
      {children}
    </a>
  )
}

export default NavLink;