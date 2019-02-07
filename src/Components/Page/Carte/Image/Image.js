import React, { Component } from 'react';
import "./Image.css";

class Image extends Component {
  render() {
    const { image } = this.props;
    const { src, alt } = image;
    // PAREIL QUE 
    // const src = this.props.image.src;
    // const alt = this.props.image.alt;

    return (
      <div className="image-container">
        <img src={src} alt={alt}/>
      </div>
    );
  }
}


export default Image;