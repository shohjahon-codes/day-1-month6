import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3600/todos")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-[40px]">List Users</h1>
      <div className="shadow-md p-4 bg-white rounded-lg">
        <div className="text-end">
          <button className=" mb-[20px] w-[125px] p-[2px] rounded-[6px] text-white  bg-[#f334b0]">
            <Link to="/create"> Add user</Link>
          </button>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full flex justify-between h-[60px] border-[aqua] border-2 p-[4px]"
          >
            <div>
              <p>Ism:{item.title}</p>
              <b>Familiya:{item.description}</b>
            </div>
            <div className="flex gap-[20px] w-auto mr-[30px] items-center">
              <button className="w-[45px] p-[2px] rounded-[6px] text-white  bg-[#34f34a]">
              <Link to={`/read/${item.id}`} >Read</Link>
              </button>
              <button className="w-[45px] p-[2px] rounded-[6px] text-white  bg-[#4134f3]">
                edit
              </button>
              <button className="w-[65px] p-[2px] rounded-[6px] text-white  bg-[#f83c2e]">
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
