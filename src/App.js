import React, { useState, useEffect } from 'react';
import './App.css';
import Inventory from './components/Inventory';
import TopBar from './components/TopBar';
import UserForm from './components/UserForm';
import {Container} from '@material-ui/core'

export default function App() {

    const [ dialog, setDialog] = useState(false);

    const handleClose = e => {
      setDialog(false);
    }

    const handleOpen = e => {
      setDialog(true);
  }
   

    return (
      <div className="App">
        <TopBar openDialog={handleOpen}/>
        <Container>
          <Inventory />
        </Container>
        <UserForm dialog={dialog} closeDialog={handleClose}/>
        
      </div>
    );
  }
