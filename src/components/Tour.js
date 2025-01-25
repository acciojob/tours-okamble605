import React, { useState } from "react";

const Tour = ({ tour, onDeleteTour }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id, name, info, image, price } = tour;

  const toggleInfo = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tour">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2 className="tour-name">{name}</h2>
        <p className="tour-info">
          {isExpanded ? info : `${info.substring(0, 200)}...`}
          <button className="toggle-info" onClick={toggleInfo}>
            {isExpanded ? "See less" : "Show more"}
          </button>
        </p>
        <p className="tour-price">${price}</p>
        <button className="delete-tour" onClick={() => onDeleteTour(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Tour;
