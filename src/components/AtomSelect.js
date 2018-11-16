import React from 'react'

import AtomInput from '@s-ui/react-atom-input'

const arrowDown = () => <span>▼</span>

const AtomSelect = ({onClick, value}) => (
  <div onClick={onClick}>
    <AtomInput
      value={value}
      charsSize={10} 
      rightIcon={arrowDown}
      disabled
    />
  </div>
)

export default AtomSelect