import React, { Component } from "react";
import styles from "./UserCardDescription.module.scss";

class UserCardDescription extends Component {
  render() {
    const { userName, userDiscription } = this.props;
    return (
      <>
        <h2 className={styles.userName}>{userName}</h2>
        <p className={styles.userInfo}>{userDiscription}</p>
      </>
    );
  }
}

export default UserCardDescription;
