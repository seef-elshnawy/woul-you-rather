import React,{Component} from "react";
import '../App.css'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { SetNickName} from '../Reducer/nickname';
import { handleInitialData } from '../Action/callApi'
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
	
	handleLogin = function(event) {
		const { userId } = this.state;
		const { dispatch } = this.props;
	
		dispatch(SetNickName(userId));
	
		this.setState(function(previousState) {
		  return {
			...previousState,
			toHome: true,
		  };
		});
	}
	
	componentDidMount() {
		this.props.dispatch({type:'CLEARNICKNAME'})
		this.props.dispatch(handleInitialData(this.props.users))
	}

    render() {
		console.log(handleInitialData())

		const { userId, toHome } = this.state;
		const { users } = this.props;
		const { from } = this.props.location.state || { from: { pathname: '/dashboard'}}
		const selected = userId ? userId : -1

		//if authenticated
		if(toHome) {
			return <Redirect to={from} />
		}
		console.log(this.props.users)
        
        return (
		    <div className='loginheder'>
		        <div className="tile-header"><div>Welcome To Would You Rather App</div></div>
		        <div className='user-select'>
					<div>Please sign in to continue</div>
					<br/>
					<select id="loginselect" value={selected} onChange={(event) => this.handleSelectionChanged(event)}>
						<option value="-1" disabled>Select user...</option>
						{Object.keys(users).map((user)=> {
							return (
								<option value={user} key={user.id}>
									{user.name}
									<img
									 src={user.avatarURL}
									 alt='seef'
									 height='50'
									 width='50'
									 >
									</img>
								</option>
							);
						})}
						{console.log(users)}
					</select>
		</div>
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

function mapStateToProps ({users}) {  
    return {
      users,
    };
  }

export default withRouter(connect(mapStateToProps)(Login));