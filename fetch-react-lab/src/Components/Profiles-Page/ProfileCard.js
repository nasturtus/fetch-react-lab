import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  console.log(props);
  const imgURL = props.person.picture.large;

  return (
    <div className="grid">
      <div id="grid-item-image">
        <img src={imgURL} alt="profile icon" />
      </div>
      <div id="grid-item-details">
        <div id="grid-item-name">
          {props.person.name.last}, {props.person.name.first}
        </div>
        <div id="grid-item-city">City: {props.person.location.city}</div>
        <div id="grid-item-email">Email: {props.person.email}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
