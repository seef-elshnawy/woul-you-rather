import '../App.css';
import { alldata } from '../Api/api';
import {Route} from 'react-router-dom'
import login from './loginpage';
import { handleInitialData } from '../Action/callApi'
import React,{Component} from 'react';
import { connect } from 'react-redux'
class App extends Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialData())
    console.log(handleInitialData())
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
       <alldata></alldata>
    <Route exact path='/login' component={login}>

     </Route>
      </header>
    </div>
  )
}
}
export default connect()(App);
