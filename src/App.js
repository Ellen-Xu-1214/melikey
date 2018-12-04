import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import Input from './Components/Input';
import Display from './Components/Display';


class App extends Component {
  constructor(){
    super();

    this.state={
      movie: [],
    };
  }

  handleInputSubmit(term) {
    console.log(term);

    const url = `https://tastedive.com/api/similar?q=${term}&k=325053-EllenXu-B1UICBF1&type=movies&limit=1&info=1`;

  request.get(url, (err, res) => {

      console.log(res.body.Similar.Results);
      this.setState( 
        { movie:res.body.Similar.Results[0]}
      );
      console.log(this.state.movie.Name);
    });

  }


  render() {
    return (
      <div className="App">
        <h1>Movie Suggestion</h1>
        <Input onInputSubmit={term => this.handleInputSubmit(term)} />
        <Display data={this.state.movie} />
      </div>
    );
  }
}

export default App;
