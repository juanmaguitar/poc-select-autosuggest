import React, {Component} from 'react'

const arrowDown = () => <span>▼</span>

export default BaseComponent => {
  const displayName = BaseComponent.displayName

  return class WithSelectUi extends Component {
    static displayName = `WithSelectUi(${displayName})`

    render() {
      const { onClick, ...props } = this.props
      const inputProps = {
        rightIcon: arrowDown,
        onClickRightIcon: onClick,
        charSize: 10
      }

      return (
        <BaseComponent {...inputProps} {...props} />
      )
    }
  }
}