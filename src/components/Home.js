import React,{useState} from 'react'
import { useAuth } from './Context_provider'
export default function Home() {
    const { CurrentUser,logout } = useAuth()
    const [error, seterror] = useState("")
    const [firebaseerror, setfirebaseerror] = useState(false)
    async function btnhandler() {
        try {
            //signup is async function that's why we used async and await
            await logout()
        } catch (errormsg) {
            console.log(errormsg)
            seterror("Failed to signIn")
            setfirebaseerror(true)
        }
    }
    return (
        <div className="container">
        {firebaseerror ? <Alert message={error}></Alert> : null}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    <p className="card-text">CurrentUser :{CurrentUser.email} </p>
                    <button onClick={btnhandler} className="btn btn-primary">Logout</button>
                </div>
            </div>
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
