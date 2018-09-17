import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../fakeAuth'

//<Route render={(props) => <MyComponent {...props} customProp={1} />}

// <ProtectedRoute exact path="/..." component={Something} />
const ProtectedRoute = ({ component: Component, ...rest }) => ( 
  <Route {...rest} render={ (props) => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
        }} />
    )
  )}/>
)

export default ProtectedRoute

