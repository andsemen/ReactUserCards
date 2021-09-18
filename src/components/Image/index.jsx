import React from 'react'
import './../UserCard/userStyles.css'


class Image extends React.Component {



  

  render() {

      const {src, alt} = this.props

    return <div className="imgWrapp">
    <img  className="img" src={src} alt={alt} />
  </div>
  }
}

export default Image