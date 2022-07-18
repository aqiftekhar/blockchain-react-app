import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import Lottery from './Lottery';

class App extends Component {

  state = {
    manager : '',
    players : [],
    balance : '',
    value : ''
  };

  async componentDidMount(){
    const manager = await Lottery.methods.manager().call();
    const players = await Lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(Lottery.options.address);

    this.setState({manager, players, balance});
  }

  render(){
    return (

      <div>
        <h2>Lottery Contract:</h2>
        <p>
          This contract is managet by {this.state.manager}.<br/>
          There are currently {this.state.players.length} people entered,<br/>
          competing to win {web3.utils.fromWei(this.state.balance, 'ether')} Ether!
          </p>
          <hr/>

          <form>
            <h4>Want to try your luck!</h4>
            <div>
              <label>Amount of Ether to Enter</label>
              <input 
                value={this.state.value}
                onChange={event => this.setState({ value : event.target.value })}/>
            </div>
            <button>Enter</button>
          </form>
      </div>
    );
  }

}

export default App;
