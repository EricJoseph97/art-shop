import React, { useState, useEffect } from 'react';
import './App.css';
import Inventory from './components/Inventory';
import TopBar from './components/TopBar';
import UserForm from './components/UserForm';
import {Container} from '@material-ui/core'

export default function App() {

    const [inventory] = useState([
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
    ]);

   

    return (
      <div className="App">
        <TopBar />
        <Container>
          <Inventory inventory={inventory}/>
        </Container>
        <UserForm />
        
      </div>
    );
  }
