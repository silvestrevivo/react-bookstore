import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ message }) => {
  return (
    <div className="errormessage">
      {message === 'error, book not found ...'
        ? <h6><i className="fa fa-book" /> {message}</h6>
        : <h6><i className="fa fa-wifi" /> {message}</h6>}
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string
}

export default ErrorMessage
