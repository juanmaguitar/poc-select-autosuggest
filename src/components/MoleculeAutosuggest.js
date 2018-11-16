import React, { Component } from "react"
import cx from "classnames"

import AtomLabel from "@s-ui/react-atom-label"
import AtomInput from '@s-ui/react-atom-input'
import MoleculeDropdownOption from "@s-ui/react-molecule-dropdown-option"
import MoleculeDropdownList from "./MoleculeDropdownList"

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

class MoleculeInputAutosuggest extends Component {
  state = {
    open: false,
    value: '',
    suggestions: []
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
    const { open, value, suggestions } = this.state
    return (
      <div className={BASE_CLASS}>
        <AtomLabel name="atomLabelName" text="Hello label" />
        <AtomSelect value={value} onClick={this.toggleDropdownList} />
        <MoleculeDropdownList visible={open}>
          {suggestions.map((suggestion, index) => (
            <ListOption
              value={suggestion}
              key={index}
              onSelect={this.handleSelection}
              selected={value === suggestion}
            />
          ))}
        </MoleculeDropdownList>
      </div>
    )
  }
}

export default MoleculeInputAutosuggest
