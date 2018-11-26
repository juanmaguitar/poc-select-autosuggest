import React from "react"

import MoleculeSelectFieldSingleSelection from "./SingleSelection"
import MoleculeSelectFieldMultiSelection from "./MultiSelection"

const MoleculeSelectField = ({ multiselection, ...props }) =>
  multiselection ? (
    <MoleculeSelectFieldMultiSelection {...props} />
  ) : (
    <MoleculeSelectFieldSingleSelection {...props} />
  )

export default MoleculeSelectField
