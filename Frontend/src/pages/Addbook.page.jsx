import Addbook_component from "../components/page/Addbook.page_component";
import axios from "axios";
import { addbook } from "../ApiManeger/Endpoint.js";
import { useNavigate } from "react-router-dom";
function Addbook_page() {
    const navigate=useNavigate()
    const handleaction = (data) => {
        console.log('trigger addbook')
        const {status,title,author,publishedYear}=data
        const request=axios.post(addbook,{
            title,
            status,
            publishedYear,
            author
        },{withCredentials:true}).then((res)=>{
            alert("book updated succesfully!!")
            
            navigate("/")
            
            
        }).catch((error)=>{
            console.log('error while add book',error)
        })
    }

    return (
        <>
            <div className="container w-screen h-screen bg-blue-700 flex justify-center items-center">

                <Addbook_component
                    handleaction={handleaction}
                />
            </div>
        </>
    )
}
export default Addbook_page