import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import Lottery from './Lottery';

class App extends Component {

  state = {
    manager : ''
  };

  async componentDidMount(){
    const manager = await Lottery.methods.manager().call();
    console.log(manager);
    this.setState({manager});
  }

  render(){
    return (

      <div>
        <h2>Lottery Contract:</h2>
        <p>This contract is managet by {this.state.manager}</p>
      </div>
    );
  }

}

export default App;
