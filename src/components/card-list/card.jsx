import { Component } from "react";
import "./Card.css";

const Card = ({ user: { id, name, email } }) => {
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}set=set2&size=180*180`}
        height={180}
        width={180}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
