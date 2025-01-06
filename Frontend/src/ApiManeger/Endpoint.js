const base_url=import.meta.env.VITE_API_BASE_URL;


//user endpoints

const signup=base_url+'/user/signup'
const login=base_url+'/user/login'
const logout=base_url+'/user/logout'

//book endpoints
const getbooks=base_url+'/book/getbooks'
const addbook=base_url+"/book/addbook"
const updatebook=base_url+"/book/updatebook"
const deletebook=base_url+"/book/deletebook" //need params
const updatestatus=base_url+"/book/updatestatus" //need params


export {
    signup,
    login,
    getbooks,
    addbook,
    updatebook,
    deletebook,
    updatestatus,
    logout

}


