import React from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ onChange }) => {
  return (
    <div className="toggle">
      <input onChange={onChange} type="checkbox" name="toggle" className="toggle__checkbox" id="mytoggle" />
      <label className="toggle__label" htmlFor="mytoggle">
        <span className="toggle__inner" />
        <span className="toggle__switch" />
      </label>
    </div>
  )
}

Toggle.propTypes = {
  onChange: PropTypes.func
}

export default Toggle
