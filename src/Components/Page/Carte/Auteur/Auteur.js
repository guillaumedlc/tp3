import React, { Component } from 'react';
import { Card, Button } from 'antd';


class Auteur extends Component {
  constructor(props){
      super(props);
      this.state = {
        color: ""
      }
    }
  changeStyle(){
      if(this.state.color==="")
        this.setState({color: "#6495ED"});
      if(this.state.color==="#6495ED")
        this.setState({color:""});
    }
  render() {
    const auteur = this.props.auteur;
    // PAREIL QUE
    // const { auteur } = this.props;
    
    return (
      <div>
        <Card style={{background:this.state.color}}>
          <p>
              <cd>{auteur.prenom}   </cd>
              <cd>{auteur.nom}</cd>
          </p>
          <p>{auteur.date}</p>
          <Button onClick={()=>{this.changeStyle()}}>Changer Style</Button>
        </Card>
      </div>
    );
  }
}

export default Auteur;