import React from "react";
import "./userStyles.css";
import Image from "../Image";

class UserCard extends React.Component {
  render() {
    const { user } = this.props;

    const { firstName, lastName, profilePicture, discription } = user;

    return (
      
        <div className="cardWrapp">
          <Image src={profilePicture} alt={firstName} />
          <h2 className="userName">
            {firstName} {lastName}
          </h2>
          <p className="userInfo">{discription}</p>
        </div>
      
    );
  }
}

export default UserCard;
