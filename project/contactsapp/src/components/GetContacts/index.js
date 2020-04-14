import React from 'react';

const HEADERS = {
	"method": "GET",
	"headers": {
	"API": "lindseth",
	"Content-Type": "applications/json",
	"Accept": "applications/json"
	}
}

class GetContacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: [{name:"", number: ""}]};

    this.nameRef= React.createRef();
    this.numberRef = React.createRef();
  }

    getValue = (event) => {

    event.preventDefault();

    const name = this.nameRef.current.value;
    const number = this.numberRef.current.value;

    this.setState({"name": name, "number": number});

  }

  componentDidMount() {

    window.fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "lindseth"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });
 
  }


  render() {
    return (
      <div>
      <h3>Contact List!</h3>
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}<br></br>{value.number}</p>;
         })
       }
    <p>{this.state.name}<br></br>{this.state.number}</p>
    <form onSubmit={this.getValue}>
    <input type="text" ref={this.nameRef} />
    <input type="text" ref={this.numberRef} />
      <button className="add">Add Contact</button>
      </form>
      </div>
    );
  }
}

export default GetContacts;