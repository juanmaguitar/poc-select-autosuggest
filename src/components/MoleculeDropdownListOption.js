import React from "react"

import MoleculeDropdownOption from "@s-ui/react-molecule-dropdown-option"

const ListOption = ({ onSelect, value, selected, ...props }) => {
  const onClick = e => {
    onSelect(e, { value })
  }
  return (
    <MoleculeDropdownOption
      {...props}
      selected={selected}
      onClick={onClick}
      value={value}
    >
      {value}
    </MoleculeDropdownOption>
  )
}

export default ListOption
