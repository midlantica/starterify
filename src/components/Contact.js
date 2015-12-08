import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.person.img} />
        <h3>{this.props.person.name}</h3>
        <p>{this.props.person.phone}</p>
        <p>{this.props.person.email}</p>
      </div>
    )
  }
})
