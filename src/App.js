import React, { Component } from 'react';
import './App.css';
import Inventory from './components/Inventory';
import TopBar from './components/TopBar';
import {Container} from '@material-ui/core'

class App extends Component {
  state = {
    inventory: [
      {
        id: 1,
        title: 'Clock',
        img: '/images/car-blue.png',
        cols: 2,
        type: 'painting',
        price: '20.00' 
      },
      {
        id: 2,
        title: 'Forest',
        img: '/images/car-green.png',
        type: 'painting',
        price: '25.00' 
      },
      {
        id: 3,
        title: 'Mountain',
        img: '/images/car-red.png',
        type: 'painting',
        price: '15.00' 
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <TopBar />
        <Container>
          <Inventory inventory={this.state.inventory}/>
        </Container>
        
      </div>
    );
  }

}

export default App;
