import React from "react";

const ESLCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.imageUrl} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Movie Name:</strong> {item.name}
            </li>
            <li>
              <strong>SetName:</strong> {item.set.name}
            </li>
            <li>
              <strong>Text:</strong> {item.text}
            </li>
            <li>
              <strong>Type:</strong> {item.type}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ESLCard;
