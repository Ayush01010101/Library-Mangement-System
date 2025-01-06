import { useState } from "react";
import User_authentication_component from "../components/page/User_authentication.component.jsx";
import { signup } from "../ApiManeger/Endpoint.js";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Signuppage(){
    const navigate=useNavigate()
    const [loading,setloading]=useState(false)
    const handleaction=async (data)=>{
        //todos's 
        // destrcture the value from data obj
        //hit request in backend 
        //if operation succesfully navigate user to login page

        setloading(true)
        const {username,password,role}=data
        try {
            const res=await axios.post(signup,{
                username,
                password,
                role
            })

            if(res.status == 200){
                navigate('/login')
            }
            
            
        } catch (error) {

            setloading(false)
            if(error.status==500){
                alert('username is already exists')
            }
            else{
               alert("something went wrong try after some time ")
            }
        }

     
        setloading(false)
        
      

        console.log('submit button is clicked')
        
    }
    return (
        <>
        
            <div className="container w-screen h-screen flex items-center justify-center bg-blue-700">
                    <User_authentication_component
                    handleaction={handleaction}
                    Issignup={true}
                    loading={loading}

                    />
            </div>

        </>
    )


}

export default Signuppage