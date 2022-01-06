import React from 'react';

class Header extends React.Component {

  render() {
    const { name, address, phone, email } = this.props
    if (name && address && phone && email) {
      return (
        <div>
          <h1>{name}</h1>
          <p>{address}</p>
          <p>Phone: {phone} | Email: {email}</p>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Header;