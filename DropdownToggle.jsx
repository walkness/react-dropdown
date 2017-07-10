import React, { PropTypes } from 'react';


const DropdownToggle = (props, context) => (
  <button
    className='dropdown-toggle'
    data-toggle='dropdown'
    aria-haspopup='true'
    aria-expanded={context.dropdownOpen}
    onClick={context.handleDropdownClick}
  >

    <span className='caret' />

    <span className='sr-only'>Toggle Dropdown</span>

  </button>
);

DropdownToggle.contextTypes = {
  dropdownOpen: PropTypes.bool.isRequired,
  handleDropdownClick: PropTypes.func.isRequired,
};

export default DropdownToggle;
