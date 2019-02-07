import React, { Component } from 'react';
import Image from "./Image/Image";
import Auteur from "./Auteur/Auteur";
import "./Carte.css";



class Carte extends Component {
  render() {

    // const author = this.props.tweetData.author;
    // const content = this.props.tweetData.content;
    // const image = this.props.tweetData.image; 

    // SAME
    const { auteur, image } = this.props.carteData;
    console.log("auteur", auteur);

    return(
      <div className="carte-container" >
        <Image image={image}/>
        <Auteur auteur={auteur} />
      </div>
    )
  }
}

export default Carte;