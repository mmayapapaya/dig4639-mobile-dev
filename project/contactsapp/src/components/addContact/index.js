import React from 'react';


class AddContact extends React.Component {

/*constructor(props) {
    super(props);

    // this.state = {added: {}};

    this.nameRef= React.createRef();
    this.numberRef = React.createRef();
    this.onSubmit = props.onSubmit;

  }

  getValue = (event) => {
    event.preventDefault();

    const name = this.nameRef.current.value;
    const number = this.numberRef.current.value;

    this.setState({"name": name, "number": number});
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
        name: this.nameRef.current.value,
        number: this.numberRef.current.value
      })
    })
    .then(response => response.json() )
    .then((data) => {
    this.setState({added: this.nameRef.current.value})
    this.setState({added: this.numberRef.current.value})

  });

} */

constructor(props) {
    super(props);

    this.state = {added:{}};
    
    this.nameRef= React.createRef();
    this.numberRef = React.createRef();

  }

  getValue = (event) => {

    const name = this.nameRef.current.value;
    const number = this.numberRef.current.value;

    event.preventDefault(); {
      fetch("https://plato.mrl.ai:8081/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "lindseth",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": this.nameRef.current.value,
        "number": this.numberRef.current.value
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({added: name, number}) )
    }

    this.setState({added:{}});

  }

  render() {
    return (
      <div>
      <h3>Add Contact!</h3>
    <p>{this.state.name}<br></br>{this.state.number}</p>
    <form onSubmit={this.getValue}>
    <input type="text" ref={this.nameRef} />
    <input type="text" ref={this.numberRef} />
      <button type="submit" className="add">Add Contact</button>
      </form>
      </div>
    );
  }
}

export default AddContact;