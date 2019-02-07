import React, {Component} from 'react';
import Image from './/components/Image';
import Contenu from '../components/Contenu';
import Auteur from '../components/Auteur';

export default class Tweet extends Component{
	render(){
	return(
		<div>
			<Image image={this.props.image}/>
			<Auteur auteur={this.props.auteur}/>
			<Contenu contenu={this.props.contenu}/>
		</div>
		);
	}
}