import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import SignInForm from './Components/SignInForm/SignInForm';
import AddGear from './Components/AddGear/AddGear';
import AddList from './Components/AddList/AddList';
import AppContext from './Components/AppContext/AppContext'
import UserHome from './Components/UserHome/UserHome';
// import Header from './Components/Header/Header';
import List from './Components/List/List';
import config from './config'

class App extends React.Component {

	constructor(props) {
        super(props);


        this.state = {
            loggedIn : false,
            users : [],
            gear : [],
			lists : [],
			userId : 1
          }
    }


	contactApi(action, url, callback = null, body = null) {
        const options =  {
            method: action,
            body : (body) ? JSON.stringify(body) : null,
            headers: {
                "Content-Type": "application/json",
            }
        };
        fetch(url, options)
            .then(res => {
              if (!res.ok) {
                // get the error message from the response,
                return res.json().then(error => {
                  // then throw it
                  throw error
                })
              } else if (res.status !== 204) {
                return res.json()
              }
              
            })
            .then(data => {
              // call the callback when the request is successful
              // this is where the App component can remove it from state
              if (callback) {
                callback(data);
              }
              
            })
            .catch(error => {
              console.error(error)
            })
        
	}
	
	componentDidMount() {
        this.contactApi('GET', `${config.API_ENDPOINT}/api/lists/user/${this.state.userId}`, this.setLists);
		this.contactApi('GET', `${config.API_ENDPOINT}/api/gear/user/${this.state.userId}`, this.setGear);
    }

	setLoggedIn = (loggedIn) => {
		this.setState({loggedIn : loggedIn})
	}

    setUsers = (users) => {
        this.setState({users : users});
	}
	
	setGear = (gear) => {
		this.setState({gear : gear})
	}

	setLists = (lists) => {
		this.setState({lists : lists})
	}

	addGear = (gear) => {
		const newGear = [...this.state.gear, gear]
		this.setGear(newGear)
	}

    handleGearAdd = (e, gear) => {
        e.preventDefault();
        this.props.history.push('/home'); 
        this.contactApi('POST', `${config.API_ENDPOINT}/api/gear`, this.addGear, gear);
	}
	
	
    handleListAdd = (e, list) => {
        e.preventDefault()
		this.props.history.push('/home')
        this.contactApi('POST', `${config.API_ENDPOINT}/api/lists`, this.addList, list)
	}


	addList = (list) => {
		const newLists = [...this.state.lists, list]
		this.setLists(newLists)
	}

	deleteGear = (idToDelete) => {
		this.setGear(this.state.gear.filter(gear => gear.id !== idToDelete))
	}

	deleteList = (idToDelete) => {
		this.setLists(this.state.lists.filter(list => list.id !== idToDelete))
	}

	goBack = () => {
        this.props.history.goBack();
	}

	render() {

		const contextValue = {
			loggedIn : this.state.loggedIn,
			users : this.state.users,
			gear : this.state.gear,
			lists : this.state.lists,
			deleteGear : this.deleteGear,
			deleteList : this.deleteList,
			addGear : this.handleGearAdd,
			addList : this.handleListAdd,
			goBack : this.goBack,
			userId : this.state.userId
		}

    return (
		<AppContext.Provider value={contextValue}>
			{/* <Header /> */}
			<main className='App'>
				<Switch>
					
					<Route
						path='/sign-in'
						component={SignInForm}
					/>
					
					<Route
						path='/add-gear'
						component={AddGear}
					/>

					<Route
						path='/add-list'
						component={AddList}
					/>

					<Route
						path='/home'
						component={UserHome}
					/>

					<Route 
						path='/list/:listId'
						component={List}
					/>

					<Route
						path='/'
						component={LandingPage}
					/>
				
				</Switch>
			</main>
		</AppContext.Provider>
    );
  }
}
export default withRouter(App);
