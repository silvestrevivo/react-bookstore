import React from 'react'
import PropTypes from 'prop-types'
import Classnames from 'classnames'

const Card = ({ children, className }) => (
  <div className={Classnames('card', className)}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Card
