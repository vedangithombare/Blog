import React from 'react';
import "../statics/styles.css";

function SignUp() {
    return (
        <div>
            <div className="flex flex-center items-center w-[75rem] h-[40rem] absolute left-0 ">
                <div className="object-cover w-full h-full ">
                    <div className=""></div>
                </div>
            </div>
            {/*<div className="absolute inset-0 bg-black opacity-50"></div>*/}
            <div
                className="relative z-10 mx-auto my-10 w-[30rem] max-w-[90%] flex flex-col bg-white/90 rounded-[12px] shadow-xl overflow-hidden">
                <div className="p-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Glad to have you here!</h2>
                        <p className="text-gray-500 mt-2">Join the community of writers and thinkers!</p>
                    </div>
                    <div className="text-center mt-4 font-bold">Sign Up</div>
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
                            Sign Up
                        </button>
                    </form>

                    <div className="text-center my-4">
                        <span className="text-gray-500">OR</span>
                        <button
                            className="flex items-center justify-center gap-2 bg-gray-100 p-3 mt-3 rounded-[10px] text-gray-700 hover:bg-gray-200 transition-all"
                        >
                            <img src="/path-to-google-icon.png" alt="Google Icon" className="w-5 h-5"/>
                            Sign Up with Google
                        </button>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-500">
                            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log
                            in</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
