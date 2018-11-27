import React from "react"

import AtomLabel from "@s-ui/react-atom-label"
import MoleculeInputTags from "@s-ui/react-molecule-input-tags"
import MoleculeDropdownList from "../MoleculeDropdownList"

import WithOpenToggle from '../hoc/withOpenToggle'
import WithSelectUi from '../hoc/withSelectUi'

import MoleculeDropdownListOption from '../MoleculeDropdownListOption'

const BASE_CLASS = `MoleculeSelectField`
const MoleculeInputSelect = WithSelectUi(MoleculeInputTags)

const closeIcon = (
  <svg viewBox="0 0 24 24">
    <path
      id="a"
      d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z"
    />
  </svg>
)

const MoleculeSelectFieldMultiSelection = props => {

  const { label, options, isOpen, onToggle, onChange, closeOnSelect, value: values } = props

  const handleMultiSelection = (ev, { value: valueOptionSelected }) => {
    
    const newValues = values.includes(valueOptionSelected)
    ? values.filter(value => value !== valueOptionSelected)
    : [...values, valueOptionSelected]

    onChange(ev, { value: newValues })
    closeOnSelect && onToggle(ev, { open: false })

  }

  const handleChangeTags = (ev, { tags: value }) => {
    onChange(ev, { value })
    closeOnSelect && onToggle(ev, { open: false })
  }

  return (
    <div className={BASE_CLASS}>
      <AtomLabel name="atomLabelName" text={label} />
      <MoleculeInputSelect tags={values} onClick={onToggle} tagsCloseIcon={closeIcon} onChangeTags={handleChangeTags}/>
      <MoleculeDropdownList checkbox visible={isOpen}>
        {options.map((option, index) => (
          <MoleculeDropdownListOption
            value={option}
            key={index}
            onSelect={handleMultiSelection}
            selected={values && values.includes(option)}
          />
        ))}
      </MoleculeDropdownList>
    </div>
  )
  
}

MoleculeSelectFieldMultiSelection.defaultProps = {
  value: [],
  onChange: () => {},
  onToggle: () => {}
}


export default WithOpenToggle(MoleculeSelectFieldMultiSelection)
