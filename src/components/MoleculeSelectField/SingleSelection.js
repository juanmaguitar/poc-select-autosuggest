import React from "react"

import MoleculeDropdownList from "../MoleculeDropdownList"
import AtomInput from "@s-ui/react-atom-input"

import WithOpenToggle from '../hoc/withOpenToggle'
import WithSelectUi from '../hoc/withSelectUi'

import MoleculeDropdownListOption from '../MoleculeDropdownListOption'

const BASE_CLASS = `MoleculeSelectField`
const MoleculeInputSelect = WithSelectUi(AtomInput)

const MoleculeSelectFieldSingleSelection = props => {
  
  const { value, options, isOpen, onToggle, onChange, closeOnSelect } = props

  const handleSelection = (ev, { value }) => {
    onChange(ev, { value })
    closeOnSelect && onToggle(ev, { open: false })
  }

  return (
    <div className={BASE_CLASS}>
      <MoleculeInputSelect value={value} onClick={onToggle} />
      <MoleculeDropdownList visible={isOpen}>
        {options.map((option, index) => (
          <MoleculeDropdownListOption
            value={option}
            key={index}
            onSelect={handleSelection}
            selected={value === option}
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
