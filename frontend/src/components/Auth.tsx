import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignUpInput } from "@shivanandh33/medium-clone";
import axios from "axios";
import { BACKEND_URL } from '../../config'

const Auth = ({type}:{type :"signup" | "signin"}) => {
    const navigate = useNavigate()
    const [postInputs,setPostInput] = useState<SignUpInput>({
        name:"",
        email:"",
        password :""
    })

    async function sendRequest(){
        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postInputs)
            const jwt = res.data.jwt;
            localStorage.setItem("token",jwt);
            navigate('/blogs')
        }catch(e){
            alert(`error while ${type === "signup" ? "signing up" : "signing in"}`)
        }
    }
    return (
    <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
                <div>
                    <div className="px-12">
                        <div className="text-center text-3xl font-bold">
                            {type === "signup" ? "Create an account" : "Sign in now"}
                        </div>
                        <div className="text-center text-slate-600">
                            {type === "signup" ? "Already have an account?" : "Don't have an account?"} 
                            <Link className="pl-2 underline" to={type === "signup" ?'/signin':'/signup'}>{type === "signup" ? "Signin" : "Signup"}</Link>
                        </div>
                    </div>
                    <div className="mt-4">
                        
                        {type ==="signup" ? <InputLabel label="Name" placeholder="Enter your name" onChange={(e)=>{
                            setPostInput({
                                ...postInputs,
                                name:e.target.value,
                            })
                        }} /> : null}
                        <InputLabel label="Email" placeholder="Enter your email" onChange={(e)=>{
                            setPostInput({
                                ...postInputs,
                                email:e.target.value,
                            })
                        }} />
                        <InputLabel label="Password" type="password" placeholder="Enter password" onChange={(e)=>{
                            setPostInput({
                                ...postInputs,
                                password:e.target.value,
                            })
                        }} />
                    </div>
                    <div className="pt-3">
                        <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            {type === "signup" ? "Sign up" : "Sign in"}
                        </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

interface InputLabelType {
    label : string,
    placeholder : string,
    type?:string,
    onChange :  (e: ChangeEvent<HTMLInputElement>)=>void;
}

function InputLabel({label,placeholder,onChange,type}:InputLabelType){
    return <div>
        <div>
            <label className="block mb-1 text-sm font-semibold text-gray-900 ">{label}</label>
            <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
             placeholder={placeholder} onChange={onChange} required />
        </div>
    </div>
}

export default Auth