import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const User_authentication_component = function ({
  handleaction,
  Issignup = true,
  classname = "",
  loading=false,
  ...props
}) {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  
  

  // todo's
  // check all the fields are valid or not
  // check username contains more than 5 char or not
  // check password is contain any special character or not (passoword must contain at least one special character > and contain 8 characters)
  // check confirm password matches with password or not

  return (
    <>
      <div className={`card bg-white rounded-2xl ${classname} w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto my-auto overflow-auto`}>
        <h1 className="opacity-75 mt-9 text-2xl flex justify-center items-center ">
          Library Mangement System
        </h1>
        <form
          className={`p-[10vh] flex flex-col gap-5 ${classname}`}
          {...props}
          onSubmit={handleSubmit(handleaction)}
        >
          {/* username & username validation  */}
          <input
            type="text"
            placeholder="Enter Username"
            label="username"
            className="p-2 border-2 hover:border-blue-500 w-full"
            {...register("username", { required: true, minLength: 5 })}
          />
          {errors.username && errors.username.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <p className="text-red-500">Username must be at least 5 characters</p>
          )}

          {/* password input & password validation  */}
          <input
            type="password"
            placeholder="Enter Password"
            className="p-2 border-2 hover:border-blue-500 w-full"
            label="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p className="text-red-500">Password must contain at least one special character and be at least 8 characters</p>
          )}

          {/* confirm password input & confirm password validation  */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 border-2 hover:border-blue-500 w-full"
            label="confirmPassword"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === getValues("password"),
            })}
          />
          {errors.confirmPassword && errors.confirmPassword.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
            <p className="text-red-500">Passwords do not match</p>
          )}

          {/* Role selection field if Issignup is true */}
          {Issignup && (
            <select
              className="p-2 border-2 hover:border-blue-500 w-full"
              label="role"
              {...register("role", { required: true })}
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          )}
          {errors.role && errors.role.type === "required" && (
            <p className="text-red-500">Role is required</p>
          )}
          <button  type="submit" className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md transition-all hover:shadow-lg hover:shadow-gray-500 w-full">
            {loading ? 'Please Wait' : Issignup ? 'Signup' : 'Login'}
          </button>

          {Issignup ? (
          <p className="text-center mt-4">
            Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700">Login</a>
          </p>
        ) : (
          <p className="text-center mt-4">
            Don't have an account? <a href="/signup" className="text-blue-500 hover:text-blue-700">Create Account</a>
          </p>
        )}
        </form>
        
      </div>
    </>
  );
};

export default User_authentication_component;

