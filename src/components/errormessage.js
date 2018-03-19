import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ message }) => {
  return (
    <div className="errormessage">
      {message === 'error, book not found ...'
        ? <h3><i className="fa fa-book" /> {message}</h3>
        : <h3><i className="fa fa-wifi" /> {message}</h3>}
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string
}

export default ErrorMessage
