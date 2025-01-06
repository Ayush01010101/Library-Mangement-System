import User_authentication_component from "../components/page/User_authentication.component.jsx";
import { useState } from "react";
import { login } from "../ApiManeger/Endpoint.js";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { storedata } from "../store/store.js";

function Loginpage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleaction = async (data) => {
    setloading(true)
    const { username, password } = data
    try {
      const res = await axios.post(login, {
        username,
        password,
        
      },
      {withCredentials:true}
    )
      
      if (res.status == 200) {
        dispatch(storedata(res.data.data))
        localStorage.setItem("userdata",JSON.stringify(res.data.data))
        navigate('/')
      }


    } catch (error) {
      console.log(error)
      setloading(false)
      if (error.status == 500) {
        alert('username or password is incorrect')
      }
      else {
        alert("something went wrong try after some time ")
      }
    }

  }
  const [loading, setloading] = useState(false)

  return (
    <>
      <div className=" container w-screen h-screen flex justify-center items-center bg-blue-700">
        <User_authentication_component

          Issignup={false}
          handleaction={handleaction}
          loading={loading}

        />



      </div>

    </>

  )
}

export default Loginpage;
