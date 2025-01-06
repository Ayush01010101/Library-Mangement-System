import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Addbook_component = ({
  handleaction,
  classname = "",
  loading = false,
  editbook=false,
  title,
  author,
  publishedYear,
  id='',
  status,
  ...props

}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  return (
    <div
      className={`bg-white card rounded-2xl ${classname} w-full max-w-md mx-auto my-auto overflow-auto`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="headings   flex   w-full items-center h-16 translate-y-4">
          <FaArrowLeft className="text-gray-600 translate-x-7 hover:cursor-pointer" onClick={() => navigate("/")} />
          <h1 className="opacity-75 text-2xl flex  justify-center items-center mx-auto">
            {editbook?"Update Book" :"Add New Book"}
          </h1>

        </div>
      </div>
      <form
        className={`p-[10vh] flex flex-col gap-5 ${classname}`}
        {...props}
        onSubmit={handleSubmit(handleaction)}
      >
        {/* Title Field */}
        <input
          type="text"
          placeholder="Enter Book Title"
          className="p-2 border-2 hover:border-blue-500 w-full"
          defaultValue={editbook ? title : ""}
          {...register("title", {
            required: true,
            pattern: /^[a-zA-Z0-9 ]*$/,
          })}
        />
        {errors.title && errors.title.type === "required" && (
          <p className="text-red-500">This field is required</p>
        )}
        {errors.title && errors.title.type === "pattern" && (
          <p className="text-red-500">Special characters are not allowed</p>
        )}

        {/* Author Field */}
        <input
          type="text"
          placeholder="Enter Author Name"
          className="p-2 border-2 hover:border-blue-500 w-full"
          defaultValue={editbook ? author : ""}
          {...register("author", {
            required: true,
            pattern: /^[a-zA-Z ]*$/,
          })}
        />
        {errors.author && errors.author.type === "required" && (
          <p className="text-red-500">This field is required</p>
        )}
        {errors.author && errors.author.type === "pattern" && (
          <p className="text-red-500">Special characters are not allowed</p>
        )}

        {/* Status Field */}
        <select
          className="p-2 border-2 hover:border-blue-500 w-full"
          defaultValue={editbook ? status : ""}
          {...register("status", { required: true })}
        >
          <option value="">Select Status</option>
          <option value="available">Available</option>
          <option value="borrowed">Borrowed</option>
        </select>
        {errors.status && (
          <p className="text-red-500">Status is required</p>
        )}

        {/* Published Year Field */}
        <input
          type="number"
          placeholder="Published Year"
          className="p-2 border-2 hover:border-blue-500 w-full"
          min="1900"
          max={new Date().getFullYear()}
          defaultValue={editbook ? publishedYear : ""}
          {...register("publishedYear", { required: true })}
        />
        {errors.publishedYear && (
          <p className="text-red-500">Published year is required</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md transition-all hover:shadow-lg hover:shadow-gray-500 w-full"
        >
          {loading ? "Please Wait" :  editbook? "Update Book":"Add Book"}
        </button>
      </form>
    </div>
  );
};

export default Addbook_component;
