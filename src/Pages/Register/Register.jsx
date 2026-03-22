import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { AuthContext } from '../../Components/Context/AuthContext';

const Register = () => {
    const { signUp, updateUser, googleSignIN } = use(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    // const [show, setShow]= useState(false)


    const handleSignUp = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const obj = { displayName, photoURL }
        // console.log(name, email, password)
        const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (regExp.test(password) === false) {
            setError("Password must be at lest 8 characters which composed of at lest one capital letter, one small letter, one number")
            return
        }

        signUp(email, password)
            .then(() => {
                // console.log(res)
                updateUser(obj).then(() => {
                    // console.log("Profile Updated")
                    navigate('/')
                }).catch(err => {
                    const errorMessage = err.message;
                    setError(errorMessage)
                })
            }).catch(err => {
                const errorMessage = err.message;
                setError(errorMessage)

            })
    }
    const handleGoogleSignIN = () => {
        googleSignIN().then(() => {
            navigate(location?.state || '/')
        }).catch(err => {
            const errorMessage = err.message;
            setError(errorMessage)
        })
    }
    return (
        <div className='flex items-center justify-center mt-18'>
            <div className="bg-slate-50 w-full max-w-lg shadow-lg  mx-auto mt-4 pt-4">
                <h1 className='text-center text-4xl font-semibold text-secondary'>Register Your Account</h1>
                <div className="card-body bg-slate-50 ">
                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label text-lg text-secondary">Name</label>
                        <input type="text" className="input input-bordered w-full outline-primary border-0 text-primary text-md font-semibold text-lg " name='name' placeholder="Name" required />
                        {/* {
                            nameError && <p className='text-red-400'>{nameError}</p>
                        } */}
                        <label className="label text-lg text-secondary">Photo URL</label>
                        <input type="text" className="input input-bordered w-full outline-primary border-0 text-primary text-md font-semibold text-lg" placeholder="Photo URL" name='photo' required />
                        <label className="label text-lg text-secondary">Email</label>
                        <input type="email" className="input input-bordered w-full outline-primary border-0 text-primary text-md font-semibold text-lg" placeholder="Email" name='email' required />
                        <label className="label text-lg text-secondary">Password</label>
                        <input type="password" name='password' className="input input-bordered w-full outline-primary border-0 text-primary text-md font-semibold text-lg" placeholder="Password" required />
                        <button className="btn mt-4 text-primary bg-white border-2 border-primary text-lg hover:bg-primary hover:text-white rounded-lg">Register</button>
                    </form>
                    <p className='text-red-600'>{error}</p>
                    {/* Google */}
                    <button onClick={handleGoogleSignIN} className="btn bg-white text-primary border-primary rounded-md hover:bg-primary hover:text-white text-lg">
                        <svg className='w-6 rounded-full' aria-label="Google logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='text-lg'>Don't have an account? <Link className=' font-semibold underline text-primary' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;