/*import React from 'react';
import './App.css';
import Card from "./components/Card/index.js";


class App extends React.Component {
  render(){
    return (
  <Card content="This is a card!"></Card>
    );
  }
}

export default App;*/


//new code for lab 4
import React from 'react';
import './App.css';
import CardList from "./components/CardList/index.js";

class App extends React.Component {
	
  render() {
    return (
      <div className="App">
        <CardList />
      </div>

    );
  }
}

export default App;
