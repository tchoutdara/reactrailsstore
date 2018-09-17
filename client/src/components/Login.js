import React, { Fragment } from 'react'
import { login } from '.../fakeAuth'

const Login = () => (
    <Fragment>
        <h3>Login</h3>
        <button
        onClick={ () => {
            login()
            history.push('/dashboard')
        }}>
        Login
        </button>
        </Fragment>
)

export default Login