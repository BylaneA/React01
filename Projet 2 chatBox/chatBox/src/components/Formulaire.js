import React from 'react';

class Formulaire extends React.Component{

	state = {
		length: this.props.length
	}

	createMessage = event => {
		event.preventDefault();

		const message = {
			message: this.message.value,
			pseudo: this.props.pseudo
		}
		//qu'on envoie ensuite dans AddMessage
		this.props.addMessage(message);

		//Reset message
		this.messageForm.reset();
		//Reset compteur une fois le message envoyé
		const length = this.props.length;
		this.setState({ length });
	};

	compteur = event => {
		const length = this.props.length -this.message.value.length;
		//MAJ du state
		this.setState({ length });
	};

	render () {
		return (
			<form 
				className="form" onSubmit={(e) => this.createMessage(e)}
				ref={input => this.messageForm= input}>
				<textarea required maxLength={this.props.length} ref={input => this.message = input} onChange={e => this.compteur(e)}></textarea>

				<div className="info">
					{this.state.length}
				{/* ce n'est plus props mais state, pour MAJ l'état de la longueur du mess */} 
				</div>

				<button type="submit"> Envoyer!</button>
			</form>
		)
	}
}

export default Formulaire;
