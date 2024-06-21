import React, { useState } from 'react'

const SignInForm = () => {

    // Keep track of user's email and password
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // SignIn Authentiacation
    const signInAuth = (e) => {
        e.preventDefault();
        alert(`Username: ${user.email} \n Password: ${user.password}`)

    }

    return (
        <form method='post' className='sign-in-form mt-10 grid bg-gray-200 items-center justify-center' onSubmit={signInAuth}>
            <h1 className='text-2xl m-3 text-center font-semibold'>Sign In</h1>
            <div className="form-container grid">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name='email'
                    placeholder='example@gmail.com'
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
            </div>
            <div className="form-container grid">
                <label htmlFor="pass">Password</label>
                <input
                    type="password"
                    name='password'
                    placeholder='*******'
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
            </div>
            <div className="form-btn mx-auto">
                <button className='text-center font-semibold' type="submit">Login</button>
            </div>
        </form>
    )
}

export default SignInForm
