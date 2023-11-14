import React from "react";
import Card from "./Card";

const Cards = () => {
  const logger = (params) => {
    console.log(params);
  };

  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => logger("this is params")}>Click me</button>

      <Card
        logParams="First card clicked"
        logger={logger}
        titleColor="blue"
        title="Blog post title"
        bgImg="https://plus.unsplash.com/premium_photo-1698846876562-52cdc02883b1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        logParams="Second card clicked"
        logger={logger}
        titleColor="yellow"
        title="Another blog post title"
        bgImg="https://images.unsplash.com/photo-1699727152382-8ce951c1caa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        logParams="Last card clicked"
        logger={logger}
        titleColor="rebeccapurple"
        title="The last blog post title is a little bit longer than the others"
        bgImg="https://images.unsplash.com/photo-1699730191180-051789dfaab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default Cards;
