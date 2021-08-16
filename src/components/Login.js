import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from './Context_provider'
export default function Login() {
    //we grabbed the signup and currentuser from custom hook which internally uses useContext of to use Authprovider
    const { login } = useAuth()
    let history=useHistory()
    const email = useRef("")
    const password = useRef("")
    const [error, seterror] = useState("")
    const [firebaseerror, setfirebaseerror] = useState(false)
    const [condition, setcondition] = useState(false)
    //console.log(signup)
    async function handlesubmit(e) {
        e.preventDefault()
        try {
            //signup is async function that's why we used async and await
            await login(email.current.value,password.current.value)
            history.push('/')
        } catch (errormsg) {
            seterror("Failed to signIn")
            setfirebaseerror(true)
        }

    }
    return (
        <div className="container">
            <h2 className="text-center">Sign in</h2>
            {condition ? <Alert message={error}></Alert> : null}
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={password} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
            <p>Don't have an account ?<Link to='/signup'>Sign Up</Link></p>
            <p>Forgot password ?<Link to='/forgot-password'>Reset password</Link></p>
            { firebaseerror ? <Alert message={error}></Alert> : null}
        </div>
    )
}
function Alert({ message }) {
    return (
        <>
            <div className="alert alert-danger" role="alert">
                {message}
            </div>
        </>
    )
}