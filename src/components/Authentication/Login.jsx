import React, {useState} from 'react';
import {auth} from './firebase';
import {useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import "../../statics/styles.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const onLogin = async (e) => {
        e.preventDefault();
        console.log(email, password);
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.displayName);
                setTimeout(() => navigate('/tempauth',{state:{email}}), 2000);
            });
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center relative">
            {/*<div className="absolute inset-0 bg-black opacity-60"></div>*/}
            <div
                className="relative z-10 mx-auto my-10 w-[30rem] max-w-[90%] flex flex-col bg-white/90 rounded-[12px] shadow-lg overflow-hidden">
                <div className="p-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 animate-fade-in">Welcome Back!</h2>
                        <p className="text-gray-500 mt-2">"Your thoughts deserve the spotlight."</p>
                    </div>
                    {/*form*/}
                    <form className="flex flex-col mt-6 gap-4">
                        {/*email*/}
                        <input
                            className="bg-gray-100 py-2 px-4 rounded-[10px] outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {/*password*/}
                        <input
                            className="bg-gray-100 py-2 px-4 rounded-[10px] outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="flex flex-col text-xs text-gray-500 px-4 ">
                            <span className="font-bold">Password should contain:</span>
                            <ul className="list-disc ">
                                <li>A lowercase character</li>
                                <li>An uppercase character</li>
                                <li>A number</li>
                                <li>Minimum 8 characters</li>

                            </ul>
                        </div>
                        <button
                            className="bg-blue-600 text-white py-2 rounded-[12px] hover:bg-blue-700 transition-all"
                            type="submit"
                            onClick={onLogin}
                        >
                            Login
                        </button>
                    </form>

                    <div className="text-center my-4">
                        <div className="flex items-center gap-3">
                            <hr className="flex flex-1"/>
                            <span className="text-gray-500">OR</span>
                            <hr className="flex flex-1"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="flex items-center justify-center gap-2 bg-gray-100 p-3 mt-3 rounded-[10px] text-gray-700 hover:bg-gray-200 transition-all"
                            >
                                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                                     alt="Google Icon" className="w-5 h-5"/>
                                Login with Google
                            </button>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-500">
                            Don't have an account? <a href="/Signup" className="text-blue-500 hover:underline">Sign
                            up</a>
                        </p>
                    </div>
                </div>
            </div>
            {/*<Tempauthpage email = {email}/>*/}

        </div>
    );


}

export default Login;
