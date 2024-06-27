import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../lib/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../../context/UserContext.jsx';

const SignInForm = () => {
    const navigate = useNavigate();
    const { setUserState } = useContext(UserContext);

    const [formState, setFormState] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: ""
    });

    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (!formState.email) {
            errors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            errors.email = "Email is not valid";
            valid = false;
        }

        if (!formState.password) {
            errors.password = "Password is required";
            valid = false;
        } else if (formState.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
            valid = false;
        }

        setErrors(errors);
        return valid;
    }

    const signInAuth = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setLoading(true);
            try {
                const userCredential = await signInWithEmailAndPassword(auth, formState.email, formState.password);
                setUserState(userCredential.user);
                navigate("/home");
            } catch (error) {
                console.log("Error logging in: ", error);
                let errorMessage = "Failed to log in. Please try again.";
                if (error.code === 'auth/wrong-password') {
                    errorMessage = "Incorrect password. Please try again.";
                } else if (error.code === 'auth/user-not-found') {
                    errorMessage = "No account found with this email.";
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = "Invalid email address.";
                }
                setErrors({ ...errors, general: errorMessage });
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <form method='post' className='sign-in-form mt-10 grid bg-white items-center justify-center' onSubmit={signInAuth}>
            <h1 className='text-2xl m-3 text-center font-semibold'>Sign In</h1>
            <div className="form-container grid">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name='email'
                    placeholder='example@gmail.com'
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    disabled={loading}
                />
                {errors.email && <span className='text-xs text-red-500'>{errors.email}</span>}
            </div>
            <div className="form-container grid">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name='password'
                    placeholder='*******'
                    value={formState.password}
                    className={`${errors.password && 'border-red-500'}`}
                    onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                    disabled={loading}
                />
                {errors.password && <span className='text-xs text-red-500'>{errors.password}</span>}
            </div>
            {errors.general && <span className="text-xs text-red-500">{errors.general}</span>}
            <div className="form-btn mx-auto">
                <button className={`text-center font-semibold ${loading && 'disabled'}`} type="submit">
                    {loading ? "Signing In..." : "Login"}
                </button>
            </div>
        </form>
    )
}

export default SignInForm;
