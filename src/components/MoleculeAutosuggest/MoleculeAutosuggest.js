import React from "react"

import AtomLabel from "@s-ui/react-atom-label"
import AtomInput from "@s-ui/react-atom-input"

import MoleculeDropdownList from "../MoleculeDropdownList"
import MoleculeDropdownListOption from '../MoleculeDropdownListOption'

import WithOpenToggle from '../hoc/withOpenToggle'
// import WithSelectUi from '../hoc/withSelectUi'


const BASE_CLASS = `MoleculeSelectField`
// const MoleculeInputSelect = WithSelectUi(AtomInput)

const MoleculeSelectFieldSingleSelection = props => {
  
  const { value, label, options, isOpen, onToggle, onChange } = props

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
      <AtomLabel name="atomLabelName" text={label} />
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
