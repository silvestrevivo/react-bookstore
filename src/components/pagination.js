import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ children }) => {
  return (
    <div className="pagination">
      {children}
    </div>
  )
}

Pagination.propTypes = {
  children: PropTypes.node
}

const RetroPage = ({ onClick, disabled }) => (
  <button
    className="pagination__button"
    onClick={onClick}
    disabled={disabled}> &lt;&lt; </button>
)

RetroPage.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

const AddPage = ({ onClick, disabled }) => (
  <button
    className="pagination__button"
    onClick={onClick}
    disabled={disabled}> &gt;&gt; </button>
)

AddPage.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default Pagination

export { RetroPage, AddPage }
