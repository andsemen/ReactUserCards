import React from "react";
import "./userStyles.css";
import Image from "../Image";


class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switcher: 1,
    };
  }

  switchHandler = () => {
    let { switcher } = this.state;
    if(switcher > 6) {
      switcher =  0
    }

    return this.setState({
      switcher: switcher + 1,
    });
    
  };


  
  render() {
    const { switcher } = this.state;
    const { user } = this.props;
    const { firstName, lastName, profilePicture,  discription } =
      user[switcher];

    return (
      <div onClick={this.switchHandler}  className="cardWrapp">
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
