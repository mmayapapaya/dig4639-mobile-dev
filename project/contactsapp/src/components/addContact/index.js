import React from 'react';

const HEADERS = {
    "method": "GET",
    "headers": {
        "API": "lindseth",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

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

} 

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
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers API,DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Accept,Host"
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

  } */
    constructor(props){
        super(props);
    
    this.nameRef= React.createRef();
    this.numberRef = React.createRef();
        this.state = {
            value : '',
        }
    }


addContact = (event) => {
    let createContact = {...HEADERS,
    "method": "POST",
    "API": "lindseth",
    "Content-Type": "application/json",
    "Accept": "application/json",
    body: JSON.stringify({
        name: this.nameRef.current.value,
        number: this.numberRef.current.value
    })
}

event.preventDefault();
fetch("http://plato.mrl.ai:8080/contacts/add", createContact)
.then((res) => res.json())
.then((data) => {
    this.setState({value: this.nameRef.current.value})
    this.setState({value: this.numberRef.current.value})
    console.log(data)
    }, 
    )
}


  render() {
    return (
      <div>
      <h3>Add Contact!</h3>
      <p className="infotext">Enter the name and phone number of the contact you would like to add.</p>
    
    <form onSubmit={this.addContact}>
    <input type="text" ref={this.nameRef} />
    <input type="text" ref={this.numberRef} />
      <button type="submit" className="add" onClick={() => window.location.reload(false)}>Add Contact</button>
      </form>
      </div>
    );
  }
}

export default AddContact;