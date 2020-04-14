import React from 'react';

class addContact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {added: {}};
  }

  componentDidMount() {
    try{

    fetch("https://plato.mrl.ai:8081/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "lindseth",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": "Jeffg",
        "number": "777"
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({added: data.added}) )
    .catch(err => {
      console.log(err);
    });
    } catch(e) {
      console.log(e)
    }

  }

  render() {
    return (
    <div>
    <form onSubmit={this.state.added.name}>
    <input id="name" type="text" />
    <button></button>
    </form>
        <h2>Added</h2>
        <p>{this.state.added.name}</p>
        <p>{this.state.added.number}</p>
      </div>
    );
  }
}

export default addContact;