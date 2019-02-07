import React, { Component } from 'react';
import './Contenu.css';

class Contenu extends Component {

  render() {
    const content = this.props.content;
    // PAREIL QUE
    // const { content } = this.props;
    return (
      <div className="contenu-container">
        <p>{content}</p>
        <button>C'est super</button>
      </div>
    );
  }
}

export default Contenu;
