import React from 'react';

class Objective extends React.Component {

  render() {
    const { obj } = this.props
    if (obj) {
      return (
        <div>
          <p>{obj}</p>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Objective;