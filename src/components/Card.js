import React from 'react';

const Card = ({ data }) => {
  return (
    <a href="#" className="card">
      <div className="card__image">
        <img src={require(`../images/${data.image}`).default} alt={data.title} />
      </div>
      <div className="card__content">
        <h2>{data.title}</h2>
        <p>{data.date}</p>
      </div>
      <div className="card__tags">
        {data.tags.map((tag, index) => <span key={index}>{tag}</span>)}
      </div>
    </a>
  )
}

export default Card;