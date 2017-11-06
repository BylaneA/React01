import React from 'react';


class Connexion extends React.Component{

	goToChat= event => {
		//default action of the event will not be triggered
		event.preventDefault();
		//récupérer le pseudo
		console.log(this.pseudoInput.value);
		//changer l'url
	};

	render () {
		return (
			<div className="connexionBox" onSubmit={(e) => this.goToChat(e)}>
				<form className="connexion">
					<input type="text" placeholder="Pseudo" required ref={(input) => {this.pseudoInput = input}} />
					<button type="submit">GO</button>
				</form>
			</div>
		)
	}
}

export default Connexion;
