import React, { Component } from 'react';
import './App.css';
import Country from  './components/Country'

class App extends Component {
  state = {
    words: [
      { id: 1, name: 'United States', gold: 2, silver: 4, bronze: 4 },
      { id: 2, name: 'China', gold: 3, silver: 1, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 1 },
    ]
  }

  goldIncrement = (wordId) => {
    const countries = [...this.state.words]
   // const word = this.state.words.filter(w => w.id === wordId);
    const idx = countries.findIndex((c) => c.id === wordId)
    //console.log(word)
    countries[idx].gold +=1;
   
    //console.log(this.state.words)
    this.setState({words: countries})
   
    
  }

  goldDecrement = (wordId) => {
    const countries = [...this.state.words]
   // const word = this.state.words.filter(w => w.id === wordId);
    const idx = countries.findIndex((c) => c.id === wordId)
    //console.log(word)
    countries[idx].gold -=1;
   
   // console.log(this.state.words)
    this.setState({words: countries})
    
  }

  silverIncrement = (wordId) => {
    const countries = [...this.state.words]
   // const word = this.state.words.filter(w => w.id === wordId);
    const idx = countries.findIndex((c) => c.id === wordId)
    //console.log(word)
    countries[idx].silver +=1;
   
    //console.log(this.state.words)
    this.setState({words: countries})
   
    
  }

  silverDecrement = (wordId) => {
    const countries = [...this.state.words]
   // const word = this.state.words.filter(w => w.id === wordId);
    const idx = countries.findIndex((c) => c.id === wordId)
    //console.log(word)
    countries[idx].silver -=1;
   
   // console.log(this.state.words)
    this.setState({words: countries})
    
  }

  bronzeIncrement = (wordId) => {
    const countries = [...this.state.words]
   // const word = this.state.words.filter(w => w.id === wordId);
    const idx = countries.findIndex((c) => c.id === wordId)
    //console.log(word)
    countries[idx].bronze +=1;
   
    //console.log(this.state.words)
    this.setState({words: countries})
   
    
  }

  bronzeDecrement = (wordId) => {
    const countries = [...this.state.words]
   // const word = this.state.words.filter(w => w.id === wordId);
    const idx = countries.findIndex((c) => c.id === wordId)
    //console.log(word)
    countries[idx].bronze -=1;
   
   // console.log(this.state.words)
    this.setState({words: countries})
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
        </header>
        <div>
        Total Medals: {this.state.words.reduce((a, b) => a + b.gold + b.silver + b.bronze, 0)}
        </div>
        { this.state.words.map(word =>
        <Country 
          key={ word.id}
          word={ word }
          
          goldIncrement={ this.goldIncrement }
          goldDecrement={ this.goldDecrement}
          silverIncrement={ this.silverIncrement }
          silverDecrement={ this.silverDecrement}
          bronzeIncrement={ this.bronzeIncrement }
          bronzeDecrement={ this.bronzeDecrement}
          />
  )}
        </div>
  
    );
  }
}

export default App;