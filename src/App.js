import React, { Component } from "react"

import AtomLabel from "@s-ui/react-atom-label"
import MoleculeSelectField from "./components/MoleculeSelectField"
import MoleculeAutosuggest from "./components/MoleculeAutosuggest"

const beatles = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
]

const bands = [
  "The Beatles",
  "Led Zeppelin",
  "Queen",
  "The Rolling Stones",
  "The Who",
  "Deep Purple",
  "The Police"
]

const countries = [
  "India",
  "Poland",
  "Canary Islands",
  "Luxembourg",
  "Cameroon",
  "Venezuela",
  "Djibouti",
  "Kyrgyzstan",
  "Northern Mariana Islands",
  "Cook Islands",
  "St. Vincent & Grenadines",
  "El Salvador",
  "South Sudan",
  "Indonesia",
  "St. Kitts & Nevis",
  "Congo - Kinshasa",
  "Palau",
  "Afghanistan",
  "India",
  "Sri Lanka",
  "Germany",
  "Denmark",
  "Australia",
  "Northern Mariana Islands",
  "Equatorial Guinea"
]

class App extends Component {
  state = {
    favoriteBeatle: null,
    favoriteBands: null,
    favoriteCountry: null
  }

  onChange = (field, e, { value }) => {
    this.setState({ [field]: value })
  }

  onChangeAutosuggest = (e, { value }) => {
    this.setState({ favoriteCountry: value })
  }

  get countries() {
    const {favoriteCountry} = this.state
    const currentValueCountry = favoriteCountry && favoriteCountry.toLowerCase()
    return favoriteCountry
      ? countries
          .filter( country => country.toLowerCase().includes(currentValueCountry) )
      : countries
  }

  render() {
    return (
      <div className="App">
        <pre>
          <code>{JSON.stringify(this.state, null, 2)}</code>
        </pre>

        <div style={{ width: "500px" }}>
          <h2>Select (single selection)</h2>
          <AtomLabel text="Favourite Beatle" />
          <MoleculeSelectField
            options={beatles}
            onChange={this.onChange.bind(this, "favoriteBeatle")}
            closeOnSelect
          />
        </div>

        <div style={{ width: "500px" }}>
          <h2>Select (multi selection)</h2>
          <AtomLabel text="Favourite Band" />
          <MoleculeSelectField
            options={bands}
            onChange={this.onChange.bind(this, "favoriteBands")}
            multiselection
          />
        </div>

        <div style={{ width: "500px" }}>
          <h2>Autosuggest</h2>
          <AtomLabel text="Favourite Country" />
          <MoleculeAutosuggest
            options={this.countries}
            onChange={this.onChangeAutosuggest}
          />
        </div>
      </div>
    )
  }
}

export default App
