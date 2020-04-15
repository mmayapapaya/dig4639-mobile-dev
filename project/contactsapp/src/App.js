import React from 'react';
import GetContacts from './components/GetContacts/index.js'; //DONE
import GetProfile from './components/GetProfile/index.js'; //DONE
import AddContact from './components/AddContact/index.js'; //NOT WORKING
//import DeleteContact from './components/DeleteContact/index.js';

class App extends React.Component {

  render() {
    return (
      <div className="contacts">
      <GetContacts />
      <br></br>
      <GetProfile />
      <br></br>
      <AddContact /> 
      </div>
    );
  }
}

export default App;
