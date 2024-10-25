import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
export const CreateItems = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
   
  });
  const navigate = useNavigate();
  const handleSubmit = (event)=>{
    event.preventDefault();
    axios
      .post("http://localhost:3600/todos",values)
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Add a User</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={e=> setValues({...values, title: e.target.value})}/>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
            FAMILIA
            </label>
            <input
              type="text"
              
              placeholder="Familia"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              onChange={e=> setValues({...values, description: e.target.value})}/>
          </div>

       

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
             <Link  to="/">Back</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
