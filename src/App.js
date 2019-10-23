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
import uuid from 'uuid'

class App extends React.Component {

	constructor(props) {
        super(props);


        this.state = {
            loggedIn : false,
            users : [],
            gear : [],
			lists : [],
			gearListsLookup : []
          }
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

	setGearListsLookup = (gearListsLookup) => {
		this.setState({gearListsLookup : gearListsLookup})
	}

	addGear = (e, gear) => {
		e.preventDefault();
        this.props.history.push('/home');
		const newGear = [...this.state.gear, gear]
		this.setGear(newGear)
	}

	addList = (e, list) => {
		e.preventDefault()
		this.props.history.push('/home')
		this.addListGearLookup(list, list.gear)
		const newLists = [...this.state.lists, list]
		this.setLists(newLists)
	}
	
	addListGearLookup = (list, gear) => {
		const newLookups = gear.map((g) => {
			return ({
				id : uuid.v4(),
				gear_id : g.id,
				list_id : list.id,
				user_id : 1
			})
		})
		this.setState({gearListsLookup: [...this.state.gearListsLookup, ...newLookups]})
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

	componentDidMount() {
		this.setUsers(this.props.data.users)
		this.setGear(this.props.data.gear)
		this.setLists(this.props.data.lists)
		this.setGearListsLookup(this.props.data.gear_lists_lookup)
	}

	render() {

		const contextValue = {
			loggedIn : this.state.loggedIn,
			users : this.state.users,
			gear : this.state.gear,
			lists : this.state.lists,
			gearListsLookup : this.state.gearListsLookup,
			deleteGear : this.deleteGear,
			deleteList : this.deleteList,
			addGear : this.addGear,
			addList : this.addList,
			goBack : this.goBack
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
