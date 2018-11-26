import React from "react"

import AtomInput from "@s-ui/react-atom-input"
import MoleculeInputTags from "@s-ui/react-molecule-input-tags"

const arrowDown = () => <span>▼</span>
const closeIcon = (
  <svg viewBox="0 0 24 24">
    <path
      id="a"
      d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z"
    />
  </svg>
)

const MoleculeInputSelect = ({ onClick, multiselection, value }) => {

  const inputProps = {
    rightIcon: arrowDown,
    onClickRightIcon: onClick,
    charSize: 10
  }

  return multiselection ? (
    <MoleculeInputTags {...inputProps} tags={value} tagsCloseIcon={closeIcon} />
  ) : (
    <AtomInput {...inputProps} readOnly value={value} />
  )
}
export default MoleculeInputSelect
