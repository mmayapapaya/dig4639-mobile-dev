import React from 'react';
import './App.css';
import Card from "./components/Card/index.js";


class App extends React.Component {
  render(){

  return (
    <div>
<Card content="This is a card!"></Card>
    </div>
  );
}
}

export default App;
