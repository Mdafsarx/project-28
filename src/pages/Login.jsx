import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import {  sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase";
import { useState } from "react";

const Login = () => {
    const [account,setAccount]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        const email=e.target.email.value ;
        const password=e.target.password.value ;
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            sendEmailVerification(auth.currentUser)
           .then(()=> setAccount('account created successFully verify your email for login') )
            
            
        })
        .catch(error=>{
            setAccount(error.message)
        })
        

    }

  
    return (
        <div className=" bg-base-200 mt-16 ">
            {
                account&&<p className="text-center text-xl font-bold p-5">{account}</p>
            }
            <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
