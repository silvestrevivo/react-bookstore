import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HeaderSubPage = ({ children, link }) => {
  return (
    <header className="header-subpage">
      <h1 className="header-subpage__title">{children}</h1>
      <Link to="/" className="header-subpage__link">home</Link>
      <Link to={`/${link}`} className="header-subpage__link">{link}</Link>
    </header>
  )
}

HeaderSubPage.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string
}

export default HeaderSubPage
