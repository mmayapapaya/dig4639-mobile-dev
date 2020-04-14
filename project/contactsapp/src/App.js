import React from 'react';

const HEADERS = {
	"method": "GET",
	"headers": {
	"API": "lindseth",
	"Content-Type": "applications/json",
	"Accept": "applications/json"
	}
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

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
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}<br></br>{value.number}</p>;
         })
       }
      </div>
    );
  }
}

export default App;
