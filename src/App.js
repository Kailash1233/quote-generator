import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {

  state = {advice: '' };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
          const { advice } = response.data.slip;

          this.setState({ advice });
        })
        .catch((error)  => {
          console.log(error);
        })

  }
  
  render () {
    const { advice } = this.state;
    return (
    <div className="App">
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='glow-on-hover' type="button" onClick={this.fetchAdvice}>
            <span>Get my Advice!😌</span>
          </button>
      </div>
    </div>
  );
}
}

export default App;
