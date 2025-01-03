import { AsyncHandler } from "../utlities/Asynchandler.js";
import { ApiError } from "../utlities/Apierror.js";
import { ApiResponce } from "../utlities/Apiresponce.js";
import Book from "../models/Book.model.js";

//define controller
const Getbooks=AsyncHandler(async function (req,res){
    //todo's 
    //give the all books in responce using query model.find()
    //check user authenitcation using jwt verify middleware 


    //if user cookies not found on jwt will give the error
    //user should be logged in 

    const books=await Book.find().limit(req.params.limit || 10)

    res.status(200)
    .json(
        new ApiResponce(200,'Bookes fetched Succesfully!!',books)
    )


})


const Addbook=AsyncHandler(async function (req,res){
    //todo's
    // check user is authecated or not using jwt middleware
    // if user is authecated and have admin role allow him to add a book 
    // get the book and other fields from req.body


    //get the user role information from req.user object

    const role=req.user.role

    if(role!=='admin'){
        throw new ApiError(403, "Unauthorized to add book. Only Admins can add books.")
    }
    //title,author,publishedYear,status
    
    const {title,author,status,publishedYear}=req.body

    if (!title || !author || !status || !publishedYear) {
        throw new ApiError(400, "all fields are required");
    }


    //check book is already exist or not in database with all same fields
    const book_exists=await Book.findOne({
        title,
        author,
        status,
        publishedYear
    })

    if(book_exists){
        throw new ApiError(409, "Book already exists with the same details.");
    }

    const book=await Book.create(
        {
            title,
            author,
            status,
            publishedYear
        }
    )


    if(!book){
        throw ApiError(504,'Failed to add book , Server issue')
    }


    res.status(200)
    .json(
        new ApiResponce(200,'Book added sucessfully!!',book)
    )

})

const Updatebook=AsyncHandler(async function (req,res){
    //todo's to update the book
    //check the user role using req.user 
    //find book by its id
    //get update fields using req.body
    //check all fields are valid or not
    //if yes give res.... 200


    const userrole=req.user.role

    if(userrole!=='admin'){
        throw new ApiError(403, "Unauthorized to update book. Only Admins can update books.")
    }

    const {id}=req.params

    if(!id){
        throw new ApiError(400, 'id not found in the params')
    }

    const book=await Book.findOne({id})

    if(!book){
        throw new ApiError(404, 'Book not found with the provided id')
    }

    const {title,author,status,publishedYear}=req.body

    if (!title || !author || !status || !publishedYear) {
        throw new ApiError(400, "all fields are required");
    }

    book.title = title;
    book.author = author;
    book.status = status;
    book.publishedYear = publishedYear;

    const updatedBook = await book.save();

    res.status(200)
    .json(
        new ApiResponce(200,'Book updated successfully!!',updatedBook)
    )

})

const Deletebook=AsyncHandler(async function (req,res){
    //todo's get id from params
    //user authetication handle by jwt verify 
    //check user role based on that give the access to delte
    //check id it's valid or not
    //if yes drop the id object from database using delete one 

    const userrole=req.user.role

    if(userrole!=='admin'){
        throw new ApiError(403, "Unauthorized to delete book. Only Admins can delete books.")
    }


    const {id}=req.params
    

    if(!id){
        throw new ApiError("id not found in the params")
        
    }

    const book=await Book.deleteOne({id})

    if(!book){
        throw new ApiError(500,'Book not found with the provided id')
    }


    res.status(200)
    .json(
        new ApiResponce(200,'Book updated successfully!!', book)
    )

})

const Updatestatus=AsyncHandler(async function (req,res){
    // Check the role of the user using jwt verify middleware
    const userrole=req.user.role;
    if(userrole!=='admin'){
        throw new ApiError(403, "Unauthorized to update status of book. Only Admins can change status of books.")
    }

    // Get the id from params
    const {id}=req.params;
    if(!id){
        throw new ApiError("id not found in the params")
    }

    // Get the update status from req.body
    const {status}=req.body;

    // Update the status of the book
    const updatedBook = await Book.findOneAndUpdate({id},{status},{new:true})

    if(!updatedBook){
        throw new ApiError(404, "Book not found with the provided id")
    }

    // Send the response with code 200
    res.status(200)
    .json(
        new ApiResponce(200,'Book status updated successfully!!', updatedBook)
    )
})



export {
    Addbook,
    Getbooks,
    Updatebook,
    Deletebook,
    Updatestatus
}