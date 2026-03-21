import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Components/Context/AuthContext';


const Login = () => {
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('')
    // console.log(location)
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(()=> {
                // console.log(res)
                navigate(location?.state || '/')
            }).catch(err => {
                console.log(err)
                const errorMessage = err.message;
                setError(errorMessage)
            })
    }
    return (
        <div className="card shrink-0 max-w-md shadow-2xl  mx-auto mt-22 pt-4 bg-slate-50">
            <h1 className="text-center text-4xl font-bold text-secondary">LogIn now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label text-lg text-secondary">Email</label>
                    <input type="email" className="input input-bordered w-full outline-primary border-0 text-primary text-md font-semibold text-lg" placeholder="Email" name='email' required />
                    <label className="label text-lg text-secondary">Password</label>
                    <input type="password" className="input font-bold input-bordered w-full outline-primary border-0 text-primary text-md text-lg" placeholder="Password" name='password' required />
                    <div><a className="link link-hover text-md">Forgot password?</a></div>
                    <button className="btn mt-4 text-primary bg-white border-2 border-primary text-lg hover:bg-primary hover:text-white rounded-lg">Login</button>
                </form>
                <p className='text-red-400'>{error}</p>
                <p className='text-lg'>If you are new, please <Link to={'/register'} className='underline text-primary'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;