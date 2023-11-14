import React from "react";

const Card = ({ titleColor, title, bgImg, logger, logParams }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={bgImg} alt="" />
      </div>

      <div className="card-body">
        <span>News</span>
        <h3 style={{ backgroundColor: titleColor }}>{title}</h3>
        <p style={{ color: titleColor }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum enim
          voluptate nihil quia odio repellat reprehenderit, voluptatem
          repudiandae debitis perspiciatis repellendus quo quis sunt fugit odit
          ut dicta unde deserunt.
        </p>
        <button onClick={() => logger(logParams)}>Button Card</button>
      </div>
    </div>
  );
};

export default Card;
