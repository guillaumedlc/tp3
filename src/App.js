import React, { Component } from 'react';
import Carte from "./Components/Page/Carte/Carte";
import Contenu from './Components/Page/Contenu/Contenu';

const carte1 ={
  auteur: {
    prenom: "Guillaume",
    nom: "dlc",
    date:"02/10/1996"
  },
  image:{
    src:"https://www.switchbacktravel.com/sites/default/files/Backcountry%20Skis%20%28m%29.jpg",
    alt:"guigui"
  },
  Comment:"OL 2-1 PSG"
}
const carte2 ={
    auteur: {
        prenom: "Victor",
        nom: "Mo",
        date:"14/02/1997"
        
      },
      image:{
        src:"https://www.sciencesetavenir.fr/assets/img/2016/11/17/cover-r4x3w1000-582d8dc4f3809-Cochon%20content.jpg",
        alt:"vivi"
      },
      Comment:"J'aime beaucoup me pavaner sur la plage"
}
const carte3 ={
    auteur: {
        prenom: "Pilou",
        nom: "Br",
        date:"10/02/1997"
      },
      image:{
        src:"http://media.topito.com/wp-content/uploads/2012/03/cheval-600x443.jpg",
        alt:"pipi"
      },
      Comment:"Mon vidéoprojecteur est génial ! Tout comme mes amis :)"
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    guillaume: true,
    victor: false,
    pilou: false
    }

  }
  Guillaume(){
    this.setState({
      guillaume: true,
      victor: false,
      pilou: false
    }
    )
  }
  Victor(){
    this.setState({
      guillaume: false,
      victor: true,
      pilou: false
    }
    )
  }
  Pilou(){
    this.setState({
      guillaume: false,
      victor: false,
      pilou: true
    }
    )
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.Guillaume()}}>Guillaume</button>
        <button onClick={() => {this.Victor()}}>Victor</button>
        <button onClick={() => {this.Pilou()}}>Pilou</button>
        {
          this.state.guillaume &&(
            <Carte carteData={carte1}/>
          )
        }
        {
          this.state.victor &&(
            <Carte carteData={carte2} />
          )
        }
        {
          this.state.pilou &&(
            <Carte carteData={carte3} />
          )
        }

        <h5>Contenu :</h5>
        {
          this.state.guillaume &&(
            <Contenu content={carte1.Comment}/>
          )
        }
        {
          this.state.victor &&(
            <Contenu content={carte2.Comment}/>
          )
        }
        {
          this.state.pilou &&(
            <Contenu content={carte3.Comment}/>
          )
        }
      
      </div>
    );
  }
}

export default App;
