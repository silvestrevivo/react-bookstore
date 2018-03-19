import React from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ onClick }) => {
  return (
    <div className="toogle" onClick={onClick}>
      <h1>0---0</h1>
    </div>
  )
}

Toggle.propTypes = {
  onClick: PropTypes.func
}

export default Toggle
