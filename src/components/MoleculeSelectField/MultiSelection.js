import React, { Component } from "react"

import AtomLabel from "@s-ui/react-atom-label"
import MoleculeInputTags from "@s-ui/react-molecule-input-tags"
import MoleculeDropdownList from "../MoleculeDropdownList"

import WithOpenToggle from '../hoc/withOpenToggle'
import WithSelectUi from '../hoc/withSelectUi'

import ListOption from './Option'

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

class MoleculeSelectField extends Component {
  state = {
    values: []
  }

  handleMultiSelection = (ev, { value: valueOptionSelected }) => {
    const { onChange, closeOnSelect } = this.props
    const { open: currentOpen, values: valuesState } = this.state
    const open = closeOnSelect ? false : currentOpen
    const values = valuesState.includes(valueOptionSelected)
      ? valuesState.filter(value => value !== valueOptionSelected)
      : [...valuesState, valueOptionSelected]

    this.setState({ values, open }, () => onChange && onChange(ev, { values }))
  }

  render() {
    const { values } = this.state
    const { label, multiselection, options, isOpen, onToggle } = this.props
    return (
      <div className={BASE_CLASS}>
        <AtomLabel name="atomLabelName" text={label} />
        <MoleculeInputSelect tags={values} onClick={onToggle} tagsCloseIcon={closeIcon}/>
        <MoleculeDropdownList checkbox visible={isOpen}>
          {options.map((option, index) => (
            <ListOption
              value={option}
              key={index}
              onSelect={this.handleMultiSelection}
              selected={values.includes(option)}
            />
          ))}
        </MoleculeDropdownList>
      </div>
    )
  }
}

export default WithOpenToggle(MoleculeSelectField)
