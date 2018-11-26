import React, { Component } from "react"

import AtomLabel from "@s-ui/react-atom-label"
import MoleculeDropdownList from "../MoleculeDropdownList"
import AtomInput from "@s-ui/react-atom-input"

import WithState from '../hoc/withState'
import WithOpenToggle from '../hoc/withOpenToggle'
import WithSelectUi from '../hoc/withSelectUi'

import ListOption from './Option'

const BASE_CLASS = `MoleculeSelectField`
const MoleculeInputSelect = WithSelectUi(AtomInput)

const MoleculeSelectField = props => {
  
  const { value, label, options, isOpen, onToggle, onChange, closeOnSelect } = props

  const handleSelection = (ev, { value }) => {
    onChange(ev, { value })
    closeOnSelect && onToggle(ev, { open: false })
  }

  return (
    <div className={BASE_CLASS}>
      <AtomLabel name="atomLabelName" text={label} />
      <MoleculeInputSelect value={value} onClick={onToggle} />
      <MoleculeDropdownList visible={isOpen}>
        {options.map((option, index) => (
          <ListOption
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

export default WithState({ multiselection: false })(WithOpenToggle(MoleculeSelectField))
