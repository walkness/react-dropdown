import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const DropdownMenu = ({ children, className, right }) => (
  <div className={classNames('dropdown-menu', className, { 'dropdown-menu-right': right })}>
    { children }
  </div>
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
