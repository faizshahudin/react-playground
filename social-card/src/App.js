import React, { Component } from 'react';

import CardSection from './components/CardSection';
import Card from './components/Card';
import Response from './components/Response';
import hashimImage from './img/profileimage.jpg';
import oneMdb from './img/1mdb.jpg';
import peterImage from './img/peter.jpg';
import reactImage from './img/react.png';

const postData = [
  {
    profilePic: hashimImage,
    name: 'Hashim Manaf',
    account: '@h&m',
    date: 'Oct 17',
    title: 'Good insight about what going on',
    author: '@pemudabangkitqiam',
    description: 'The issues about 1MDB is still mysterious to us, with the government...',
    cardPic: oneMdb,
    website: 'malaysiandaily.my',
    comment: 12,
    retweet: 50,
    like: 15
  },
  {
    profilePic: peterImage,
    name: 'Peter Jackson',
    account: '@peterjackson',
    date: 'Sep 17',
    title: 'Learning React? Start Small.',
    author: '@dceddia',
    description: 'Can\'t pry yourself away from tutorials? The cure is to make tiny little experiment apps.',
    cardPic: reactImage,
    website: 'dev.to',
    comment: 2,
    retweet: 47,
    like: 190
  }

];

class App extends Component {
  render() {
    return (
      <div>
        {postData.map((post) => (
          <div className="container">
            <CardSection post={post} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
