import React, { Component } from "react"
import MoleculeSelectField from "./components/MoleculeSelectField/index"

const beatles = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
]
const bands = ["The Beatles", "Led Zeppelin", "Queen", "The Rolling Stones"]

class App extends Component {
  state = {
    favoriteBeatle: null,
    favoriteBands: null
  }

  onChange = (field, e, { value }) => {
    this.setState({ [field]: value })
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>

        <pre><code>{ JSON.stringify(this.state, null, 2) }</code></pre>
 
        <div style={{ width: "500px" }}>
          <h2>Select (unique selection)</h2>
          <MoleculeSelectField
            label="Favourite Beatle"
            options={beatles}
            onChange={this.onChange.bind(this, "favoriteBeatle")}
            closeOnSelect
          />
        </div>

        <div style={{ width: "500px" }}>
          <h2>Select (multi selection)</h2>
          <MoleculeSelectField
            label="Favourite Bands"
            options={bands}
            onChange={this.onChange.bind(this, "favoriteBands")}
            multiselection
          />
        </div>
      </div>
    )
  }
}

export default App
