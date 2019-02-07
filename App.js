import React, { Component}from 'react';
import Tweet from '.container/Tweet';
import '.App.css';

class App extends Component{
	render(){
		return(
			<div className='App'>
				<HelloWorld nom="toto"/>
				<Tweet
					image=""
					auteur={{
						nom:'Mon nom',
						prenom:'Mon prénom'
					}}
            </div>
		)
	}
}