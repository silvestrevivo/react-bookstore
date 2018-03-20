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

const Title = ({ children, className }) => (
  <h2 className={Classnames('card__title', className)}>
    {children}
  </h2>
)

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

const SubTitle = ({ children, className }) => (
  <h2 className={Classnames('card__subtitle', className)}>
    {children}
  </h2>
)

SubTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

const Publisher = ({ children, className }) => (
  <h4 className={Classnames('card__publisher', className)}>
    {children}
  </h4>
)

Publisher.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

const Description = ({ description, className }) => (
  <p className={Classnames('description', className)}>
    {description}
  </p>
)

Description.propTypes = {
  description: PropTypes.string,
  className: PropTypes.string
}

export default Card

export { Title, SubTitle, Publisher, Description }
