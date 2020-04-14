import React from 'react';

const HEADERS = {
	"method": "GET",
	"headers": {
	"API": "lindseth",
	"Content-Type": "applications/json",
	"Accept": "applications/json"
	}
}

class getProfile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {profile: [{name:"", count: ""}]};

  }

  componentDidMount() {

    window.fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "lindseth"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({profile: data.profile});
    });
 
  }

  render() {
    return (
      <div className="contacts">
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}<br></br>{value.count}</p>;
         })
       }
      </div>
    );
  }
 }

export default getProfile;
