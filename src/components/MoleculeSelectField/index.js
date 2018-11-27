import React from "react"

import MoleculeSelectFieldSingleSelection from "./SingleSelection"
import MoleculeSelectFieldMultiSelection from "./MultiSelection"

import WithState from '../hoc/withState'

const MoleculeSelectField = ({ multiselection, ...props }) =>
  multiselection ? (
    <MoleculeSelectFieldMultiSelection {...props} />
  ) : (
    <MoleculeSelectFieldSingleSelection {...props} />
  )

export default WithState(MoleculeSelectField)