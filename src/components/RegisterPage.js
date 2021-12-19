import React, { useState } from 'react';
import Navlinks from './Navlinks';
import serverEndpoint from "../serverEndpoints";

const RegisterPage = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const onSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await fetch(serverEndpoint.registerUser, {
                method: "POST",
                headers: { "content-type": "application/json; charset=utf-8"},
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <React.Fragment>
            <Navlinks highlight={"registerpage"} />
            <form className="mx-sm-5 p-2 w-auto" onSubmit={onSubmit}>
                <br />
                <h1 className="text-center">Register</h1>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="inputUsername" className="form-label mt-4">Username</label>
                        <input onChange={e => setUsername(e.target.value)} type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="Enter username" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your account with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </React.Fragment>
    )
}

export default RegisterPage;
