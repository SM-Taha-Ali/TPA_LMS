import React, { useState } from 'react';
import LoginContext from './loginContext';

const GlobalState = (props) => {

    const host = "http://localhost:5000"

    const [user, setUser] = useState({})

    // Get Cart Items

    const loginUser = async (username, password) => {
        // TODO API CALL
        const response = await fetch(`/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        }).catch(err => {
            console.log(err.message)
        });
        const json = await response.json()
        return json
    }

    const getUser = async (token) => {
        // TODO API CALL
        const response = await fetch(`/api/auth/get-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            headers: {
                'auth-token': token
            }
        }).catch(err => {
            console.log(err.message)
        });
        const json = await response.json()
        return json
    }


    return (
        <LoginContext.Provider value={{ user, loginUser, getUser }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default GlobalState