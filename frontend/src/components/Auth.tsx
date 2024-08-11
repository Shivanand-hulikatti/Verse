import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpInput } from "@shivanandh33/medium-clone";
import axios from "axios";
import { BACKEND_URL } from '../../config';

const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [postInputs, setPostInput] = useState<SignUpInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        setLoading(true);
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = res.data.jwt;
            const name = res.data.name;
            localStorage.setItem("token", jwt);
            localStorage.setItem("name", name);
            navigate('/blogs');
        } catch (e) {
            alert(`Error while ${type === "signup" ? "signing up" : "signing in"}`);
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {type === "signup" ? "Create an account" : "Sign in to your account"}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                        <Link className="font-medium text-indigo-600 hover:text-indigo-500 ml-1" 
                              to={type === "signup" ? '/signin' : '/signup'}>
                            {type === "signup" ? "Sign in" : "Sign up"}
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {type === "signup" && (
                        <InputLabel
                            label="Name"
                            placeholder="Enter your name"
                            onChange={(e) => setPostInput({ ...postInputs, name: e.target.value })}
                        />
                    )}
                    <InputLabel
                        label="Email"
                        placeholder="Enter your email"
                        onChange={(e) => setPostInput({ ...postInputs, email: e.target.value })}
                    />
                    <InputLabel
                        label="Password"
                        type="password"
                        placeholder="Enter password (min 8 charcters)"
                        onChange={(e) => setPostInput({ ...postInputs, password: e.target.value })}
                    />
                    <div>
                        <button
                            onClick={sendRequest}
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                        >
                            {loading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Loading...
                                </span>
                            ) : (
                                type === "signup" ? "Sign up" : "Sign in"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

interface InputLabelType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputLabel({ label, placeholder, onChange, type }: InputLabelType) {
    return (
        <div>
            <label htmlFor={label} className="sr-only">{label}</label>
            <input
                id={label}
                name={label}
                type={type || "text"}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

export default Auth;