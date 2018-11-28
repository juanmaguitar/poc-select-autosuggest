import React from "react"

import AtomInput from "@s-ui/react-atom-input"

import MoleculeDropdownList from "../MoleculeDropdownList"
import MoleculeDropdownListOption from '../MoleculeDropdownListOption'

import WithOpenToggle from '../hoc/withOpenToggle'

const BASE_CLASS = `MoleculeSelectField`

const MoleculeSelectFieldSingleSelection = props => {
  
  const { value, options, isOpen, onToggle, onChange } = props

  const handleSelection = (ev, { value }) => {
    onChange(ev, { value })
    onToggle(ev, { open: false })
  }

  const handleChange = (ev, { value }) => {
    onChange(ev, { value })
    options && onToggle(ev, { open: true })
  }

  return (
    <div className={BASE_CLASS}>
      <AtomInput value={value} onClick={onToggle} onChange={handleChange}/>
      <MoleculeDropdownList visible={isOpen}>
        {options.map((option, index) => (
          <MoleculeDropdownListOption
            value={option}
            key={index}
            onSelect={handleSelection}
            selected={value === option}
            highlightQuery={value}
          />
        ))}
      </MoleculeDropdownList>
    </div>
  )
}

MoleculeSelectFieldSingleSelection.defaultProps = {
  value: '',
  onChange: () => {},
  onToggle: () => {}
}

export default WithOpenToggle(MoleculeSelectFieldSingleSelection)
