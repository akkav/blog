import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Review from './reviews/reviews';
import Services from './services';

function Cards() {
  return (
    <div className='cards'>
      <h1 style={{marginBottom:"1rem",color:'hsl(205, 86%, 17%)'}}><span >Learning Stuff</span></h1>
      <div className="underline"></div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/react.webp'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='React'
              path='/products'
            />
            <CardItem
              src='images/flutter.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Flutter'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/html.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='HTML'
              path='/products'
            />
            <CardItem
              src='images/node js.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='nodeJS'
              path='/products'
            />
            <CardItem
              src='images/mongo.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='MongoDB'
              path='/products'
            />
          </ul>
        </div>
      </div>
      <Services />
      <Review />
    </div>

  );
}

export default Cards;
