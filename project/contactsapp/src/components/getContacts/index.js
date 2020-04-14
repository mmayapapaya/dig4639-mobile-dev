import React from 'react';

const HEADERS = {
	"method": "GET",
	"headers": {
	"API": "lindseth",
	"Content-Type": "applications/json",
	"Accept": "applications/json"
	}
}

class getContacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: [{name:"", number: 0}]};

    this.nameRef= React.createRef();
    this.numberRef = React.createRef();

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
      <div className="contacts">
      <addContact />
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}<br></br>{value.number}</p>;
         })
       }
       <form onSubmit={this.getValue}>
          <input type="text" ref={this.nameRef} />
          <input type="text" ref={this.numberRef} />
      <button className="add">Add Contact!</button>
      </form>
      </div>
    );
  }
 }

export default getContacts;
