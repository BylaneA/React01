import React from 'react';

//Components
import Formulaire from './Formulaire';
import Message from './Message';

class App extends React.Component{

	state = {
		messages:{}
	}

	addMessage = (message) =>{
		//Copier le state
		//{...this.state} -> recupérer le stat
		const messages = {...this.state.messages};
		//on ajoute le message avec une clé timestamp
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		//Mettre à jour le state
		this.setState({ messages });
	};

	render () {
		return (
			<div className="box">
				<div>
					<div className="messages">
						<Message pseudo={this.props.params.pseudo} />

					</div>
					<Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="140" />
				</div>			
			</div>
		)
	}
}

export default App;
