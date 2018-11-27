import React, {Component} from 'react'

const withState = BaseComponent => {
  return class BaseComponentWithState extends Component {
    state = {
      value: this.props.value
    }

    static defaultProps = {
      onChange: () => {}
    }

    onChange = (e, {value}) => {
      console.log( e, {value} )
      const {onChange} = this.props
      this.setState({value}, () => onChange(e, {value}))

    }

    render() {
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
