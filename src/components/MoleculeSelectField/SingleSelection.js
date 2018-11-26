import React, { Component } from "react"

import AtomLabel from "@s-ui/react-atom-label"
import MoleculeDropdownList from "../MoleculeDropdownList"
import AtomInput from "@s-ui/react-atom-input"

import WithOpenToggle from '../hoc/withOpenToggle'
import WithSelectUi from '../hoc/withSelectUi'

import ListOption from './Option'

const BASE_CLASS = `MoleculeSelectField`
const MoleculeInputSelect = WithSelectUi(AtomInput)

class MoleculeSelectField extends Component {
  state = {
    value: ''
  }

  handleSelection = (ev, { value }) => {
    const { onChange, closeOnSelect, onToggle } = this.props
    this.setState(
      { value }, 
      () => {
        onChange(ev, { value })
        closeOnSelect && onToggle(ev, { open: false })
      }
    )
  }

  render() {
    const { value } = this.state
    const { label, options, isOpen, onToggle } = this.props
    return (
      <div className={BASE_CLASS}>
        <AtomLabel name="atomLabelName" text={label} />
        <MoleculeInputSelect value={value} onClick={onToggle} />
        <MoleculeDropdownList visible={isOpen}>
          {options.map((option, index) => (
            <ListOption
              value={option}
              key={index}
              onSelect={this.handleSelection}
              selected={value === option}
            />
          ))}
        </MoleculeDropdownList>
      </div>
    )
  }
}

export default WithOpenToggle(MoleculeSelectField)
