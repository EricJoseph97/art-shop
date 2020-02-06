import React, { setState } from 'react';
import './App.css';
import Inventory from './components/Inventory';
import TopBar from './components/TopBar';
import UserForm from './components/UserForm';
import {Container} from '@material-ui/core'

export default class App extends React.Component {

    constructor() {
      super();
 
      this.state = {
        search: undefined,
        typing: false,
        typingTimeout: 0,
        dialog: false
      }
      
    }
    
    render() {

  
      const handleClose = e => {
        setState({dialog: false});
      }
  
      const handleOpen = e => {
        setState({dialog: true});
      }
  
      const handleSearch = val => {
        
        this.setState({search: val})
        
        console.log(this.state.search)      
      }
    
  
      return (
        <div className="App">
          <TopBar searchChange={handleSearch.bind(this)} openDialog={handleOpen}/>
          <Container>
            <Inventory search={this.state.search}/>
          </Container>
          <UserForm dialog={this.state.dialog} closeDialog={handleClose}/>
          
        </div>
      );
    }
    
  }