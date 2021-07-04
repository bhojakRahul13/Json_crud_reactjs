import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const AddUser = () => {
  let history = useHistory();

  const [newData, setNewData] = useState({
    id: new Date().getTime().toString(),
    title: "",
    body: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          id: newData.id,
          title: newData.title,
          body:  newData.body,
        }
      );
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };



  const handleChange=(e)=>{
   const name = e.target.name;
   const value = e.target.value;
   setNewData({...newData,[name]:value})
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New User's</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="title"
              id="title"
              className="form-control form-control-lg"
              placeholder="Enter the Title field"
              onChange={handleChange}
              value={newData.title}
              // onChange={(e) => setNewData({ title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              name="body"
              placeholder="Enter the Body filed"
              onChange={handleChange}
            
              value={newData.body}
              // value={newData.body}
              // onChange={(e) => setNewData({ body: e.target.value })}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
