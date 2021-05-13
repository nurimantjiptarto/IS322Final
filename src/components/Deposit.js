import React from 'react';
import { connect } from 'react-redux';

class Deposit extends React.Component {
    
    state = { name: this.state.name , balance: '' }
    
    onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addPlayer(this.state.name, this.state.initiative, this.props.characterType);

    this.setState({ name: '', initiative: '' });
  }


}

export default Deposit;