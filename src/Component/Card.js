import React from 'react'
import { MdPriceChange } from 'react-icons/md';
import './Carddesign.css';

function Card(props) {
  return (
    <>
      <div className='card'>
      <img src='https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg' alt="sliderimg" width="200px" height="450px"/>
        <h3>{props.prodname}</h3>
        <p>{props.price}</p>
      </div>
    </>
  )
}

export default Card
