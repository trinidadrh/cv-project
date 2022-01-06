import React from 'react';

class Skillset extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { skills } = this.props

    return (
      <ul>
        {skills.map((skill) => {
          return <li>{skill.text}</li>;
        })}
      </ul>
    );
  };
};

export default Skillset;
