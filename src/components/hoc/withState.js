import React, {Component} from 'react'

const withState = ({multiselection = false}) => BaseComponent => {
  return class BaseComponentWithState extends Component {
    state = {
      value: this.props.value || multiselection ? [] : ''
    }

    onChange = (e, {value}) => {
      this.setState({value})
    }

    render() {
      console.log('this.props...')
      console.log(this.props)
      const {value} = this.state
      const {onChange, props} = this
      return (
        <div>
          <BaseComponent {...props} value={value} onChange={onChange} />
        </div>
      )
    }
  }
}

export default withState
