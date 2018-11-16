import React, { Component } from "react"
import cx from "classnames"

import AtomLabel from "@s-ui/react-atom-label"
import AtomSelect from "./AtomSelect"
import MoleculeDropdownList from "./MoleculeDropdownList"
import MoleculeDropdownOption from "@s-ui/react-molecule-dropdown-option"

const BASE_CLASS = `MoleculeSelectField`

// eslint-disable-next-line react/prop-types
const ListOption = ({ onSelect, value, selected, ...props }) => {
  const _onClick = (e, { value }) => {
    onSelect(e, { value })
  }
  return (
    <MoleculeDropdownOption
      {...props}
      selected={selected}
      onClick={_onClick}
      value={value}
    >
      {value}
    </MoleculeDropdownOption>
  )
}

class MoleculeSelectField extends Component {
  state = {
    open: false,
    value: this.props.multiselection ? [] : ''
  }

  handleMultiSelection = (ev, { value: valueOptionSelected }) => {
    const { onChange, closeOnSelect } = this.props
    const { open: currentOpen, value: valueSelect } = this.state
    const open = closeOnSelect ? false : currentOpen
    const value = valueSelect.includes(valueOptionSelected)
      ? valueSelect.filter(option => option !== valueOptionSelected)
      : [...valueSelect, valueOptionSelected]

    this.setState({ value, open }, () => onChange && onChange(ev, { value }))
  }

  handleSelection = (ev, { value }) => {
    const { onChange, closeOnSelect } = this.props
    const { open: currentOpen } = this.state
    const open = closeOnSelect ? false : currentOpen
    this.setState({ value, open }, () => onChange && onChange(ev, { value }))
  }

  toggleDropdownList = e => {
    this.setState(
      prevState => ({
        open: !prevState.open
      }),
      () => {
        const { open } = this.state
        const { onClick } = this.props
        onClick && onClick(e, { open })
      }
    )
  }

  render() {
    const { open, value: valueSelect } = this.state
    const { label, options, multiselection } = this.props
    return (
      <div className={BASE_CLASS}>
        <AtomLabel name="atomLabelName" text={label} />
        <AtomSelect value={multiselection ? valueSelect.join() : valueSelect} onClick={this.toggleDropdownList} />
        <MoleculeDropdownList checkbox={multiselection} visible={open}>
          {options.map((option, index) => (
            <ListOption
              value={option}
              key={index}
              onSelect={multiselection ? this.handleMultiSelection : this.handleSelection}
              selected={multiselection ? valueSelect.includes(option) : valueSelect === option}
            />
          ))}
        </MoleculeDropdownList>
      </div>
    )
  }
}

export default MoleculeSelectField
