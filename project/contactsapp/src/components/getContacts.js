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

    this.state = {contacts: []};

  }

  componentDidMount() {

    window.fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "lindseth"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });
 
  }
}


export default getContacts;