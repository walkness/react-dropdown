import React, { Component, PropTypes } from 'react';

export { default as DropdownMenu } from './DropdownMenu';
export { default as DropdownToggle } from './DropdownToggle';

class Dropdown extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static childContextTypes = {
    dropdownOpen: PropTypes.bool,
    handleDropdownClick: PropTypes.func,
    closeDropdown: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    }
  }

  getChildContext() {
    return {
      dropdownOpen: this.state.open,
      handleDropdownClick: this.handleDropdownClick.bind(this),
      closeDropdown: this.closeDropdown.bind(this),
    }
  }

  componentWillUnmount() {
    if (this.boundClickHandler) {
      document.removeEventListener('click', this.boundClickHandler);
      this.boundClickHandler = null;
    }
  }

  handleDocumentClick(e) {
    if (this.state.open) {
      let dropdownClicked = false;
      for (let element = e.target; element; element = element.parentNode) {
        if (element.nodeName === 'UL' && element.className.includes('dropdown-menu')) {
          dropdownClicked = true;
        }
      }
      if (!dropdownClicked)
        this.closeDropdown()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentRoute !== this.props.currentRoute)
      this.closeDropdown();
  }

  handleDropdownClick(e) {
    if (this.state.open)
      this.closeDropdown()
    else
      this.openDropdown()
  }

  openDropdown() {
    this.setState({open: true}, () => {
      this.boundClickHandler = this.handleDocumentClick.bind(this);
      document.addEventListener('click', this.boundClickHandler);
    })
  }

  closeDropdown() {
    this.setState({open: false}, () => {
      if (this.boundClickHandler) {
        document.removeEventListener('click', this.boundClickHandler);
        this.boundClickHandler = null;
      }
    })
  }

  render() {
    let classNames = [];
    if (this.props.className)
      classNames.push(this.props.className)
    classNames.push('dropdown')
    if (this.state.open)
      classNames.push('open');
    return (
      <li className={ classNames.join(' ') }>
        { this.props.children }
      </li>
    );
  }
}

export default Dropdown;
