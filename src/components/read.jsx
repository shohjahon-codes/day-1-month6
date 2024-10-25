import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ReadData = () => {
  const [data, setData ] = useState([])
  const {id} = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3600/todos/"+id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return(
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                 <h3>Detail of User</h3>
               <div className='mb-2'>
                     <strong>Name: {data.title}</strong>
               </div>
               <div className='mb-2'>
                    <strong>Email: {data.description}</strong>
               </div>
               <div className='mb-3'>
                     <strong>Phone: {data.id}</strong>
               </div>
                <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
                 <Link to="/" className='btn btn-primary ms-3'>Back</Link>
           </div>
         </div>
    </div>
  )
}

