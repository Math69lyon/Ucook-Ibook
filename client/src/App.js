import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'

import store from './store'

import Main from './components/Layout/Main'

import Home from './components/Home'
import Registration from './components/Auth/Registration'
<<<<<<< HEAD
import Registration from './components/Auth/CookerRegistration'
=======
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf
import Connection from './components/Auth/Connection'
import Profile from './components/Profile/Profile'
import NotFound from './components/NotFound'

import setAuthHeader from './utils/setAuthHeader'
import { logoutUser, getCurrentUser } from './actions/authActions'
<<<<<<< HEAD
import { logoutCooker, getCurrentCooker } from './actions/authActions'

if (localStorage.getItem('jwtToken')) {
    const currentTime = Date.now() / 1000
    const decode = jwt_decode(localStorage.getItem('jwtToken'))

    if (currentTime > decode.exp) {
        store.dispatch(logoutUser(), logoutCooker())
        window.location.href = '/'
    } else {
        setAuthHeader(localStorage.getItem('jwtToken'))
        store.dispatch(getCurrentUser(), getCurrentCooker())

    }
}

class App extends Component {
    render() {
        return ( <
            Provider store = { store } >
            <
            div >
            <
            BrowserRouter >
            <
            Main >
            <
            Switch >
            <
            Route exact path = "/"
            component = { Home }
            /> <
            Route path = "/connection"
            component = { Connection }
            /> <
            Route path = "/registration"
            component = { Registration }
            /> <
            Route path = "/cookerregistration"
            component = { Registration }
            /> < /
            Switch > <
            /Main> < /
            BrowserRouter > <
            /div> < /
            Provider >
        );
    }
}

export default App;
=======

import "./App.css";


import "./App.css";
import Api from './components/Layout/Api'



if (localStorage.getItem('jwtToken')) {
  const currentTime = Date.now() / 1000
  const decode = jwt_decode(localStorage.getItem('jwtToken'))

  if (currentTime > decode.exp) {
    store.dispatch(logoutUser())
    window.location.href = '/'
  } else {
    setAuthHeader(localStorage.getItem('jwtToken'))
    store.dispatch(getCurrentUser())
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/connection" component={Connection} />
                <Route path="/registration" component={Registration} />
                <Route path="/api" component={Api} />
                <Route path="/profile/:userId" component={Profile} />
                <Route component={NotFound }/>

              </Switch>
            </Main>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf
