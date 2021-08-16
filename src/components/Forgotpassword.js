import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './Context_provider'
export default function Forgotpassword() {
    //we grabbed the signup and currentuser from custom hook which internally uses useContext of to use Authprovider
    const { Reset } = useAuth()
    const email = useRef("")
    // const password = useRef("")
    const [Message, setMessage] = useState("")
    const [firebaseerror, setfirebaseerror] = useState(false)
    const [Alertcondition, setAlertcondition] = useState(false)
    //console.log(signup)
    async function handlesubmit(e) {
        e.preventDefault()
        try {
            //signup is async function that's why we used async and await
            await Reset(email.current.value)
            setAlertcondition(true)
            setMessage("Check your Inbox for further Instructions")
        } catch (errormsg) {
            setfirebaseerror(true)
            setMessage("Failed to Reset the password")
        }

    }
    return (
        <div className="container">
            {firebaseerror ? <Alert message={Message} class_name="alert-danzer"></Alert> : null}
            {Alertcondition ? <Alert message={Message} class_name="alert-success"></Alert> : null}
            <h2 className="text-center">Reset Password</h2>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
            <p>Don't have an account ?<Link to='/signup'>Sign Up</Link></p>
        </div>
    )
}
function Alert({ message, class_name }) {
    return (
        <>
            <div className={`alert ${class_name}`} role="alert">
                {message}
            </div>
        </>
    )
}
//Forgotpassword