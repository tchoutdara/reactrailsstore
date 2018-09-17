import React from 'react'
import { Redirect } from 'react-router-dom'
import { isAuthenticated } from '../fakeAuth'

const Dashboard = () => {
    if (isAuthenticated()) {
        return <h3>You are logged in!</h3>
    } else {
        return <Redirect to="/login" />
    }
}

export default Dashboard