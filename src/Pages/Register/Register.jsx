import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { AuthContext } from '../../Components/Context/AuthContext';

const Register = () => {
    const { signUp, updateUser } = use(AuthContext)
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
                    <p className='text-red-400'>{error}</p>
                    <p className='text-lg'>Don't have an account? <Link className=' font-semibold underline text-primary' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;