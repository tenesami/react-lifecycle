import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import LanguageName from './LanguageName';

class App extends Component {
  state = {
    name: "Tesafye"
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>{this.state.name}</h2>
          <LanguageName />
        </header>
      </div>
    );

  }
}

export default App;
