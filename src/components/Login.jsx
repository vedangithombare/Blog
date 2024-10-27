import React from 'react';
import "../statics/styles.css";

function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/path-to-image.jpg)' }}>
            {/*<div className="absolute inset-0 bg-black opacity-60"></div>*/}
            <div className="relative z-10 mx-auto my-10 w-[30rem] max-w-[90%] flex flex-col bg-white/90 rounded-[12px] shadow-lg overflow-hidden">
                <div className="p-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 animate-fade-in">Welcome Back!</h2>
                        <p className="text-gray-500 mt-2">"Your thoughts deserve the spotlight."</p>
                    </div>
                    <form className="flex flex-col mt-6 gap-4">
                        <input
                            className="bg-gray-100 py-2 px-4 rounded-[10px] outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            className="bg-gray-100 py-2 px-4 rounded-[10px] outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <button
                            className="bg-blue-600 text-white py-2 rounded-[12px] hover:bg-blue-700 transition-all"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>

                    <div className="text-center my-4">
                        <span className="text-gray-500">OR</span>
                        <button
                            className="flex items-center justify-center gap-2 bg-gray-100 p-3 mt-3 rounded-[10px] text-gray-700 hover:bg-gray-200 transition-all"
                        >
                            <img src="/path-to-google-icon.png" alt="Google Icon" className="w-5 h-5" />
                            Login with Google
                        </button>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-500">
                            Don't have an account? <a href="/Signup" className="text-blue-500 hover:underline">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
