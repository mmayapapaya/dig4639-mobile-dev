import React from 'react';

const HEADERS = {
	"method": "GET",
	"headers": {
	"API": "lindseth",
	"Content-Type": "applications/json",
	"Accept": "applications/json"
	}
}

class GetProfile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {profile: []};

    this.nameRef= React.createRef();
    this.numberRef = React.createRef();
  }

  componentDidMount() {

    window.fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "lindseth"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({profile: [data]});
    });
 
  }


  render() {
    return (
      <div className="profile">
      <h3>User Profile!</h3>
       {
         this.state.profile.map((value, index) => {
           return <p key={index}>{value.name}<br></br>{value.count}</p>;
         })
       }
      </div>
    );
  }
}

export default GetProfile;