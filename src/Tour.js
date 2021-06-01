import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour} ) => {
  const [readmore, setReadmore] = useState(false)


  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{
        readmore? info : `${info.substring(0,100)}`}...
        <button onClick={()=>setReadmore(!readmore)}>{readmore?'Show Less':'Read More' }</button>
        <button className="delete-btn" onClick={()=>removeTour(id)}> Not Interested</button> </p>
      </footer>
    </article>
)};

export default Tour;
