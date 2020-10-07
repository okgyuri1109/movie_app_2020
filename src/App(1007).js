import React from 'react';
import ProTypes from 'prop-types';
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgE from './images/5.jpg';

function Food({name, image, altText, rating}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={altText}></img>
    </div>
      );
}

const foodLink = [
  {
    id: 1,
    name : '버갈튀',
    image : imgA,
    altText: '버갈튀를 먹는 모습',
    rating: 5
  },
  {
    id: 2,
    name: '족발',
    image : imgB,
    altText: '족발을 먹는 모습',
    rating: 5
  },
  {
    id: 3,
    name: '치즈볼',
    image : imgC,
    altText: '치즈볼을 먹는 모습',
    rating: 5
  },
  {
    id: 4,
    name: '칼국수',
    image : imgD,
    altText: '칼국수를 먹는 모습',
    rating: 5
  },
  {
    id: 5,
    name: '케이크',
    image : imgE,
    altText: '케이크를 먹는 모습',
    rating: 2.5
  }
];



function App() {
  console.log(foodLink.map(dish => (<Food key={dish.id} name = {dish.name} image={dish.image} altText={dish.altText}/>)));
  return (
  <div>
    {foodLink.map(dish => (
      <Food key={dish.id} name = {dish.name} image={dish.image} rating={dish.rating}/>
    ))}
  </div>
  );
}

Food.proTypes = {
  name: ProTypes.string.isRequired,
  image: ProTypes.string.isRequired,
  rating: ProTypes.string.isRequired,
}

export default App;