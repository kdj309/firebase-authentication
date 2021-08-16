import React, { useState, useRef } from 'react'
import { useAuth } from './Context_provider'
import { Link,useHistory } from 'react-router-dom'
export default function SignUp() {
    //we grabbed the signup and currentuser from custom hook which internally uses useContext of to use Authprovider
    const { signup} = useAuth()
    const email = useRef("")
    let history=useHistory()
    const password = useRef("")
    const confirmpassword = useRef("")
    const [error, seterror] = useState("")
    const [firebaseerror, setfirebaseerror] = useState(false)
    const [condition, setcondition] = useState(false)
    //console.log(signup)
    async function handlesubmit(e) {
        e.preventDefault()
        if (password.current.value !== confirmpassword.current.value) {
            setcondition(true)
            //if user passwords do not match then it should return not signup
           return seterror(" Password does not match")
        } else {
            setcondition(false)
        }
        e.preventDefault()
        try {
            //signup is async function that's why we used async and await
            await signup(email.current.value,password.current.value)
            history.push('/')
        } catch (errormsg) {
            seterror("Failed to signup")
            setfirebaseerror(true)
        }

    }
    return (
        <div className="container">
            <h2 className="text-center">SignUp</h2>
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
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input ref={confirmpassword} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
            <p>Already have an account ?<Link to='/signin'>Sign In</Link></p>
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