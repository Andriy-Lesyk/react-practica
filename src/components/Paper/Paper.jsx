import React from 'react'
import { PaperContainer } from './Paper.styles'
import PropTypes from "prop-types"

function Paper({ children, gap}) {
  return (
      <PaperContainer gap={ gap}>{ children}</PaperContainer>
  )
}
Paper.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.number
}

Paper.defaultProps = {
  gap: 16,
}

export default Paper