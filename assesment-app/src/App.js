import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/Booklist'
import Shelf from './Components/Shelf'
import Books from './data.js'
import { Component } from 'react';

class App extends Component{
  constructor(){
    super()
    this.state = {
      
    }


    
  }

  render() {
    return(
      <div className="App">
      <Header/>
      <Booklist/>
      <Shelf/>
    </div>
    )
    
  }

}
export default App;
