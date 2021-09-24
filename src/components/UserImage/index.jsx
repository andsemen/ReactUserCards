import React from "react";
import styles from "./UserImage.module.scss";

class UserImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: true,
    };
  }

  handlErorrImg = () => {
    const { isError } = this.state;

    this.setState({
      isError: !isError,
    });
  };

  render() {
    const { isError } = this.state;
    const { src, alt } = this.props;

    return (
      <div className={styles.imgWrapp}>
        <img
          onError={this.handlErorrImg}
          className={styles.img}
          src={
            isError && src
              ? src
              : "https://pbs.twimg.com/profile_images/511333573119320064/3q1981fx_400x400.jpeg"
          }
          alt={alt}
        />
      </div>
    );
  }
}

export default UserImage;
