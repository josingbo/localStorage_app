import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        const user = JSON.parse(localStorage.getItem('user'))
        return (
            user ? <Component {...props} {...user}/>
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )
    }}>
    </Route>
)