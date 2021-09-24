import React from "react";
import UserCardDescription from "../UserCardDescription";
import UserImage from "../UserImage";
import styles from './UserCard.module.scss'

class UserCard extends React.Component {
  render() {
   

    const { user } = this.props;

    const { firstName, lastName, profilePicture, discription } = user;

    const userName = `${firstName} ${lastName}`.trim() || "Unknown User";

    return (
      
        <div className={styles.cardWrapp}>
          <UserImage src={profilePicture} alt={userName} />
          <UserCardDescription userName ={userName} userDiscription ={discription} />
        </div>
      
    );
  }
}

export default UserCard;
