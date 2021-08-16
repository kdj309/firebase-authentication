import React from 'react'
import { Route } from 'react-router'
import { useAuth } from './Context_provider'
import { Redirect } from 'react-router'
export default function Customizedroute({component:Component,...rest}) {
    const { CurrentUser } = useAuth()
    return (
        <Route {...rest}
        render={props=>{
                return CurrentUser?<Component {...props}></Component>:<Redirect to='/signin'></Redirect>
        }}>
            
        </Route>
    )
}
