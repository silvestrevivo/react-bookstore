import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/img/GooglePlayLogo.png'

const Header = ({ onChange, onKeyPress, value }) => {
  return (
    <header className="header">
      <h1>Bookstore</h1>
      <p className="subheader">powered by</p>
      <img src={logo} alt="logo" className="header__logo" />
      <input
        className="header__input"
        type="text"
        value={value}
        placeholder="Search book title.."
        onChange={onChange}
        onKeyPress={onKeyPress} />
    </header>
  )
}

Header.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string
}

export default Header
