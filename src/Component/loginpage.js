import React,{Component} from "react";
import '../App.css'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { SetNickName} from '../Reducer/nickname';
import { handleInitialData } from '../Action/callApi'
import {receiveUsers, RECEIVE_USERS} from '../Action/users'
import users from "../Reducer/users";
import { setnickname } from "../Action/nickname";
class Login extends Component {
	state = {
		userId: null,
		toHome: false,
	}
	
	handleSelectionChanged = (event)=> {
		const userId = event.target.value
	
		 this.setState((previousState)=> {
		  return {
			...previousState,
			userId,
		  };
		});
	}

	 btn=()=>{
		const btn=document.getElementsByClassName('btn1');
		if(btn===onclick){
		  console.log('seef')
		}else{
			console.log(this.props.receiveUsers.users)
			return(
				<div key={this.props.users.id} className='result'>
					{this.props.receiveUsers.users},
					{this.props.users.name}
					<img
					 src={this.props.users.avatarURL}
					 alt='seef'
					 height='50'
					 width='50'
					 >
					</img>
				</div>
			 
		
			)
		}
	}
	

	
	handleLogin = function(event) {
		const { userId } = this.state;
		const { dispatch } = this.props;
	
		dispatch(this.props.receiveUsers(userId));

		this.setState(function(previousState) {
		  return {
			...previousState,
			toHome: true,
		  };
		});
	}
	
	/*componentDidMount() {
		(this.props.clearuser)
		//this.props.dispatch(handleInitialData(this.props.users))
	}*/
 

    render() {
	
		console.log(handleInitialData())
	//	console.log(this.showusers)	

		const { userId, toHome } = this.state;
		//const { users } = this.props;
		const { from } = this.props.location.state || { from: { pathname: '/dashboard'}}
		const selected = userId ? userId : -1

		//if authenticated
		if(toHome) {
			return <Redirect to={from} />
		}
		console.log(this.props.receiveUsers.users)
        
        return (
			
		    <div className='loginheder'>
		        <div className="tile-header"><div>Welcome To Would You Rather App</div></div>
		        <div className='user-select'>
				<div>Please sign in to continue</div>
					<br/>
					<select id="loginselect" value={selected} onChange={(event) => this.handleSelectionChanged(event)}>
						<option value="-1" disabled>Select user...</option>
						{Object.keys(users).map(function(key) {
							return (
								<option value={this.props.setnickname.id} key={key}>
									{users[key].name}
									<img
									 src={users.avatarURL}
									 alt='seef'
									 height='50'
									 width='50'
									 >
									</img>
								</option>
							);
						})}
						{console.log(this.props.setnickname)}
					</select>
					 {/*} 
					  <button className='btn1' onClick={this.props.setnickname}>select user</button>{*/}
					  
				<div>{this.showusers}
				</div>

				 </div>

		{function showresult(){
			console.log(this.showusers)
		}}
        <br/>
				<button
					className='btn'
					disabled={userId === null}
					onClick={(event) => this.handleLogin(event)}>
					Login
				</button>
				{/* {redirect && <div>You must log in to view this page</div>} */}
          </div>

		);  
    }
	
}


function mapStateToProps(users) {  
    return {
      users,
    };
  }
  function mapDispatchToprops(dispatch){
	  return{
		setnickname:()=>dispatch({type:SetNickName,
		id:true}),
       // clearuser:()=> {dispatch({type:'CLEARNICKNAME'})},
		receiveUsers:()=>dispatch({type:RECEIVE_USERS,
		users:this.state.userId})
	}
	  
  }

export default withRouter(connect(mapStateToProps,mapDispatchToprops)(Login));