import React from 'react';


const HEADERS = {
    "method": "GET",
    "headers": {
        "API": "lindseth",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

class DeleteContact extends React.Component{
    constructor(props){
        super(props);

        this.removeRef = React.createRef();
        this.state = {
            value : '',
        }
    }


deleteContact = (event) => {
    let removeContact = {...HEADERS,
    "method": "POST",
    body: JSON.stringify({
        position: this.removeRef.current.value
    })
}

event.preventDefault();
fetch("http://plato.mrl.ai:8080/contacts/remove", removeContact)
.then((res) => res.json())
.then((data) => {
    this.setState({value: this.removeRef.current.value})
    console.log(data)
    }, 
    )
}

render(){
    return(
 <div>
 <h3>Remove Contact!</h3>
 <p className="infotext">Enter the positon of the contact you would like to remove.</p>
 <form onSubmit = {this.deleteContact}>          
 <input type ="text" ref={this.removeRef}></input>
 <button className="add" type ="submit" onClick={() => window.location.reload(false)}>Delete Contact</button>

  </form>
  </div>
    );
}
}

export default DeleteContact;