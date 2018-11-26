import React, { Component } from "react"

import AtomLabel from "@s-ui/react-atom-label"
import MoleculeInputSelect from "../MoleculeInputSelect"
import MoleculeDropdownList from "../MoleculeDropdownList"

import WithOpenToggle from './hoc/withOpenToggle'

import ListOption from './Option'

const BASE_CLASS = `MoleculeSelectField`

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
        <MoleculeInputSelect multiselection value={values} onClick={onToggle} />
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
