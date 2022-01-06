import React from 'react';

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { arr } = this.props;
    if (arr) {
      return (
        <div>
          {arr.map((elem) => {
            return (
              <div>
              <p>{elem.position}, {elem.employer}, {elem.location} -- {elem.years}</p>
              <p><i>&emsp;{elem.duties}</i></p>
            </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  };
};

export default Experience;