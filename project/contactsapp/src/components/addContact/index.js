import React from 'react';

const HEADERS = {
  "method": "GET",
  "headers": {
  "API": "lindseth",
  "Content-Type": "applications/json",
  "Accept": "applications/json"
  }
}

class AddContact extends React.Component {

constructor(props) {
    super(props);

    this.state = {added: {}};

    this.nameRef= React.createRef();
    this.numberRef = React.createRef();
    this.onSubmit = props.onSubmit;

  }

  componentDidMount() {
    fetch("https://plato.mrl.ai:8081/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "lindseth",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.nameRef,
        number: this.numberRef
      })
    })
    .then(response => response.json() )
    .then((data) => {
    this.setState({added: this.nameRef})
    this.setState({added: this.numberRef})

  });

}

  render() {
    return (
      <div>
      <h3>Add Contact!</h3>
    <form onSubmit={AddContact}>
    <input type="text" ref={this.nameRef} />
    <input type="number" ref={this.numberRef} />
      <button className="add">Add Contact</button>
      </form>
      </div>
    );
  }
}

export default AddContact;