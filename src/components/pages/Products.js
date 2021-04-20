import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';

export default function Products() {
  return(<>
  <div className="title">
          <h2>Learning Stuff</h2>
          <div className="underline"></div>
        </div>
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
          <ul className='cards__items'>
            <CardItem
              src='images/react.webp'
              text='React is an open-source, front end, JavaScript library.'
              label='React'
              path='/products'
            />
            <CardItem
              src='images/javascript.png'
              text='Flutter is a google UI toolkit to create beautyfull UI'
              label='JavaScript'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/css.png'
              text='HTML5 is a markup language used for structuring and presenting content'
              label='CSS'
              path='/products'
            />
            <CardItem
              src='images/css.png'
              text='Node.js is an open-source, cross-platform, back-end JavaScript'
              label='CSS'
              path='/products'
            />
            <CardItem
              src='images/php.png'
              text='MongoDB is a source-available cross-platform document-oriented.'
              label='PHP'
              path='/products'
            />
          </ul>
        </div>
      </div>

  
    
  
  
  </>);
}
