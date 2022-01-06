import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { arr } = this.props;
    if (arr) {
      return (
        <ul>
          {arr.map((elem) => {
            return (
              <li>    
              {elem.institution} &mdash; {elem.degree}, {elem.major}, {elem.year}
              </li>
            )
          })}
        </ul>
      )
    } else {
      return (
        <div></div>
      )
    }
  };
};

export default Education;