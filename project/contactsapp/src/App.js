import React from 'react';
import GetContacts from './components/GetContacts/index.js';
//import getProfile from './components/GetProfile/index.js';
//import addContact from './components/AddContact/index.js';

class App extends React.Component {

  render() {
    return (
      <div className="contacts">
      <GetContacts />
      </div>
    );
  }
}

export default App;
