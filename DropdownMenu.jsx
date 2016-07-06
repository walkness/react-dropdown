import React from 'react';


const DropdownMenu = (props, context) => (
  <ul className='dropdown-menu'>
    { props.children }
  </ul>
);

export default DropdownMenu;
