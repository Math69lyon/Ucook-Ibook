import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'

import store from './store'

import Main from './components/Layout/Main'

import Home from './components/Home'
import Registration from './components/Auth/Registration'
import RegistrationCooker from './components/Auth/RegistrationCooker'
import Connection from './components/Auth/Connection'
import ConnectionCooker from './components/Auth/ConnectionCooker'
import Profile from './components/Profile/Profile'
import Cooker from './components/Profile/Cooker'
import NotFound from './components/NotFound'
import About from './components/Layout/About'
import Api from './components/Layout/Api'

import setAuthHeader from './utils/setAuthHeader'
import { logoutUser, getCurrentUser } from './actions/authActions'
import { logoutCooker, getCurrentCooker } from './actions/authcookerActions'

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
        return (
            <Provider store={ store }>
                <div >
                    <BrowserRouter >
                        <Main >
                            <Switch >
                                <Route exact path="/" component={ Home }/>
                                <Route path="/connection" component={ Connection }/>
                                <Route path="/registration" component={ Registration }/>
                                <Route path="/cookerregistration" component={ RegistrationCooker }/>
                                <Route path="/cookerconnection" component={ ConnectionCooker }/>
                                <Route path="/profile/:userId" component={Profile} />
                                <Route path="/profile/:cookerId" component={Cooker} />
                                <Route path="/about" component={About} />
                                <Route path="/Api" component={Api} />
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