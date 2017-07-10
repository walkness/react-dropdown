import React, { PropTypes } from 'react';
import classNames from 'classnames';


const DropdownMenu = ({ children, className, right }) => (
  <ul className={classNames('dropdown-menu', className, { 'dropdown-menu-right': right })}>
    { children }
  </ul>
);

DropdownMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  right: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  children: null,
  className: null,
  right: false,
};

export default DropdownMenu;
