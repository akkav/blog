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
              text='React is an open-source, front end, JavaScript library.'
              label='React'
              path='/products'
            />
            <CardItem
              src='images/flutter.jpg'
              text='Flutter is a google UI toolkit to create beautyfull UI'
              label='Flutter'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/html.jpg'
              text='HTML5 is a markup language used for structuring and presenting content'
              label='HTML'
              path='/products'
            />
            <CardItem
              src='images/node js.png'
              text='Node.js is an open-source, cross-platform, back-end JavaScript'
              label='nodeJS'
              path='/products'
            />
            <CardItem
              src='images/mongo.png'
              text='MongoDB is a source-available cross-platform document-oriented.'
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
