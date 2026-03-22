import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Components/Context/AuthContext';


const Login = () => {
    const { signIn,googleSignIN } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('')
    // console.log(location)
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(() => {
                // console.log(res)
                navigate(location?.state || '/')
            }).catch(err => {
                // console.log(err)
                const errorMessage = err.message;
                setError(errorMessage)
            })
    }
    const handleGoogleSignIN =()=>{
        googleSignIN().then(()=>{
             navigate(location?.state || '/')
        }).catch(err=>{
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
                <p className='text-red-600'>{error}</p>
                {/* Google */}
                <button onClick={handleGoogleSignIN} className="btn bg-white text-primary border-primary rounded-md hover:bg-primary hover:text-white text-lg">
                    <svg className='w-6 rounded-full' aria-label="Google logo"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
                <p className='text-lg'>If you are new, please <Link to={'/register'} className='underline text-primary'>Register</Link></p>

            </div>
        </div>
    );
};

export default Login;