import React from 'react'
import {Router, Route, Redirect} from 'react-router-dom'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import {store, history} from './redux/store'
import User from './Containers/User/index.jsx'
import Login from './Containers/Login/index.jsx'
import Provider from 'react-redux/es/components/Provider'
// import {Provider} from 'react-redux'

// import {routeChange, verifyPermissions} from './app/route'

function newRouter() {
  // routeChange(history)
  console.log('newRouter')
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div style={{height: '100%'}}>
          <Route exact path="/" component={User}/>
          <Route exact path="/login" component={Login}/>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default newRouter

