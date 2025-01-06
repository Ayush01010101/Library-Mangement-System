import { useSelector } from "react-redux";
import Addbook_component from "../components/page/Addbook.page_component.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { updatebook } from "../ApiManeger/Endpoint.js";
function Updatebook(){
    const bookdata=useSelector((state)=>state.Reducer.bookdata)
    const {status,author,title,publishedYear,id}=bookdata
    const navigate=useNavigate()
    const handleupdate=(data)=>{
        
        const {status,author,title,publishedYear}=data
        // console.log(data)
        axios.put(`${updatebook}/${id}`,{
            status,
            author,
            title,
            publishedYear,
            
        },{withCredentials:true})
        .then(()=>{
            // do some operation
            navigate("/")
            
        })
        .catch((error)=>{
            alert("Error, Try After Some Time")
            console.log(error)
        })
    }

    return(
        <>  
            <div className="container w-screen h-screen bg-blue-700 flex justify-center items-center">

            <Addbook_component
                editbook={true} 
                status={status}
                author={author}
                title={title}
                publishedYear={publishedYear}
                handleaction={handleupdate}
                />
                </div>
        </>
    )
}

export default Updatebook