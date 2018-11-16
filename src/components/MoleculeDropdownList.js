import React from "react"
import cx from "classnames"

const BASE_CLASS = `MoleculeDropdownList`

const MoleculeDropdownList = ({ children, visible, ...props }) => {

  const extendedChildren = React.Children.toArray(children)
    .filter(Boolean)
    .map((child) => {
      return React.cloneElement(child, {
        ...props
      })
    })

  return (
    <div className={cx(BASE_CLASS, {[`${BASE_CLASS}--hidden`]: !visible })}>
      {extendedChildren}
    </div>
  )
}

export default MoleculeDropdownList
