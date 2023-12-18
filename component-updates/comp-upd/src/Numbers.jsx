import React, { PureComponent } from 'react';

class Numbers extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.number === nextProps.number && this.props.title === nextProps.title) {
  //     return false;
  //   }
  //     return true;
  // }
  render() {
    return (
    <div class="number">
      <span class="number__title">{this.props.title}</span>
      <span class="number__value">{this.props.number}</span>
    </div>
    )
  }
}
export default Numbers;