import React from 'react';
import Contact from './Contact';

var people = [{
  'name': 'Scott',
  'email': 'scott@gmail.com',
  'img': 'http://lorempixel.com/80/80/cats/1/',
  'phone': '555 545 5545'
}, {
  'name': 'Drew',
  'email': 'drew@gmail.com',
  'img': 'http://lorempixel.com/80/80/cats/3/',
  'phone': '305 545 5545'
}, {
  'name': 'Fred',
  'email': 'fred@gmail.com',
  'img': 'http://lorempixel.com/80/80/cats/7/',
  'phone': '615 545 5545'
}, {
  'name': 'Joe',
  'email': 'joe@gmail.com',
  'img': 'http://lorempixel.com/80/80/cats/2/',
  'phone': '898 545 5545'
}, {
  'name': 'Greg',
  'email': 'greg@gmail.com',
  'img': 'http://lorempixel.com/80/80/cats/9/',
  'phone': '616 545 5545'
},]

export default React.createClass({
  render() {
    return (
      <section>
        <h2>Contact List</h2>
        {people.map(function(person, i){
          return (<Contact person={person} key={i} />)
        })}
      </section>
    )
  }
})
