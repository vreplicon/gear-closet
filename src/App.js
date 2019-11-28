import React from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import SignInForm from "./Components/SignInForm/SignInForm";
import AddGear from "./Components/AddGear/AddGear";
import AddList from "./Components/AddList/AddList";
import AppContext from "./Components/AppContext/AppContext";
import UserHome from "./Components/UserHome/UserHome";
import List from "./Components/List/List";
import config from "./config";
import UpdateList from "./Components/UpdateList/UpdateList";
import UpdateGear from "./Components/UpdateGear/UpdateGear";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      users: [],
      gear: [],
      lists: [],
      userId: null,
      allowApiContact: true
    };
  }

  contactApi(action, url, callback = null, body = null) {
    const options = {
      method: action,
      body: body ? JSON.stringify(body) : null,
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error;
          });
        } else if (res.status !== 204) {
          return res.json();
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
        console.error(error);
      });
  }

  handleLoginRequest = email => {
    this.contactApi(
      "POST",
      `${config.API_ENDPOINT}/api/users/sign-in`,
      this.getUserInfo,
      { email }
    );
  };

  handleSignUpRequest = email => {
    this.contactApi(
      "POST",
      `${config.API_ENDPOINT}/api/users/sign-up`,
      this.getUserInfo,
      { email }
    );
  };

  getUserInfo = user => {
    this.setLoggedIn(true);
    this.contactApi(
      "GET",
      `${config.API_ENDPOINT}/api/lists/user/${user.id}`,
      this.setLists
    );
    this.contactApi(
      "GET",
      `${config.API_ENDPOINT}/api/gear/user/${user.id}`,
      this.setGear
    );
    this.props.history.push("/home");
    localStorage.setItem("userId", user.id);
    this.setState({ userId: user.id });
  };

  setLoggedIn = loggedIn => {
    this.setState({ loggedIn: loggedIn });
  };

  setUserId = userId => {
    this.setState({ userId });
  };

  setUsers = users => {
    this.setState({ users: users });
  };

  setGear = gear => {
    this.setState({ gear: gear });
  };

  setLists = lists => {
    this.setState({ lists: lists });
  };

  addGear = gear => {
    const newGear = [...this.state.gear, gear];
    this.setGear(newGear);
  };

  handleGearAddRequest = (e, gear) => {
    e.preventDefault();
    this.props.history.push("/home");
    if (this.state.allowApiContact) {
      this.contactApi(
        "POST",
        `${config.API_ENDPOINT}/api/gear`,
        this.addGear,
        gear
      );
    }
  };

  handleListAddRequest = (e, list) => {
    e.preventDefault();
    this.props.history.push("/home");
    if (this.state.allowApiContact) {
      this.contactApi(
        "POST",
        `${config.API_ENDPOINT}/api/lists`,
        this.addList,
        list
      );
    }
  };

  addList = list => {
    const newLists = [...this.state.lists, list];
    this.setLists(newLists);
  };

  handleGearDeleteRequest = gearId => {
    this.props.history.push("/home");
    if (this.state.allowApiContact) {
      this.contactApi("DELETE", `${config.API_ENDPOINT}/api/gear/${gearId}`);
    }
    this.deleteGear(gearId);
  };

  deleteGear = idToDelete => {
    this.setGear(this.state.gear.filter(gear => gear.id !== idToDelete));
  };

  handleListDeleteRequest = listId => {
    this.props.history.push("/home");
    if (this.state.allowApiContact) {
      this.contactApi("DELETE", `${config.API_ENDPOINT}/api/lists/${listId}`);
    }
    this.deleteList(listId);
  };

  deleteList = idToDelete => {
    this.setLists(this.state.lists.filter(list => list.id !== idToDelete));
  };

  handleListUpdateRequest = (e, list) => {
    e.preventDefault();
    this.props.history.push("/home");
    if (this.state.allowApiContact) {
      this.contactApi(
        "PATCH",
        `${config.API_ENDPOINT}/api/lists/${list.id}`,
        null,
        list
      );
    }
    this.updateList(list);
  };

  updateList = list => {
    const listToUpdate = this.state.lists.find(l => l.id === list.id);
    const updatedList = { ...listToUpdate, ...list };
    const newLists = this.state.lists.filter(l => l.id !== list.id);
    this.setLists([...newLists, updatedList]);
  };

  handleGearUpdateRequest = (e, gear) => {
    e.preventDefault();
    this.props.history.push("/home");
    if (this.state.allowApiContact) {
      this.contactApi(
        "PATCH",
        `${config.API_ENDPOINT}/api/gear/${gear.id}`,
        null,
        gear
      );
    }
    this.updateGear(gear);
  };

  updateGear = gear => {
    const gearToUpdate = this.state.gear.find(g => g.id === gear.id);
    const updatedGear = { ...gearToUpdate, ...gear };
    const newGear = this.state.gear.filter(g => g.id !== gear.id);
    this.setGear([...newGear, updatedGear]);
  };

  showExamplePage = () => {
    this.getUserInfo({ id: 1 });
    this.setState({ allowApiContact: false });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const contextValue = {
      loggedIn: this.state.loggedIn,
      users: this.state.users,
      gear: this.state.gear,
      lists: this.state.lists,
      deleteGear: this.handleGearDeleteRequest,
      deleteList: this.handleListDeleteRequest,
      addGear: this.handleGearAddRequest,
      addList: this.handleListAddRequest,
      updateList: this.handleListUpdateRequest,
      updateGear: this.handleGearUpdateRequest,
      goBack: this.goBack,
      userId: this.state.userId,
      login: this.handleLoginRequest,
      signUp: this.handleSignUpRequest,
      showExamplePage: this.showExamplePage
    };

    return (
      <AppContext.Provider value={contextValue}>
        <main className="App">
          <Switch>
            <Route path="#/sign-in" component={SignInForm} />

            <Route path="#/add-gear" component={AddGear} />

            <Route path="#/add-list" component={AddList} />

            <Route path="#/update-list/:listId" component={UpdateList} />

            <Route path="#/update-gear/:gearId" component={UpdateGear} />

            <Route path="#/home" component={UserHome} />

            <Route path="#/list/:listId" component={List} />

            <Route path="/" component={LandingPage} />
          </Switch>
        </main>
      </AppContext.Provider>
    );
  }
}
export default withRouter(App);
