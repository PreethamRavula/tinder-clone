import { SwipeDown } from '@mui/icons-material';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
        name: 'Elon Musk',
        url: 'https://i.insider.com/62b4c0969f5e550019aa6303?width=700',
    },
    {
        name: 'Jeff Bezos',
        url: 'https://assets.gq.ru/photos/5d9f56f73a54c0000840e2c3/16:9/w_2560%2Cc_limit/0.jpg',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map(person => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style={{backgroundImage: `url(${person.url})`}}
                        className="card" 
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
        
    </div>
  )
}

export default TinderCards