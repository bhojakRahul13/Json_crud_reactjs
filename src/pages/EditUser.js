import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
   let history = useHistory();

  const [userData, setUserData] = useState([]);

  const [newData, setNewData] = useState({
    postData: [],
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res =    await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          {
            id: newData.postData.id,
            title: newData.postData.title,
            body: newData.postData.body,
          }
        );
        console.log("res0--------",res);
        // history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUsers();    
  }, []); //[] is for runiing only 1 time

  const loadUsers = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    setUserData(result.data);
  };

  useEffect(() => {
    if (userData) {
      let data = {
        id: userData.id,
        title: userData.title,
        body: userData.body,
      };
      setNewData({ ...newData, postData: data });
    }
  }, [userData]);


  const handleChange=(e)=>{
    // const name = e.target.name;
    const value = e.target.value;
    // setNewData({...newData.postData,[name]:value})
    // setNewData({...newData,[name]:value})
      setNewData({...newData,newData})
   }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update New User's</h2>
        <form>
        <div className="form-group">
            <input
              type="text"
              name="id"
              className="form-control form-control-lg"
              placeholder="id  field"
              value={newData.postData.id}
              readOnly
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              id="title"
              className="form-control form-control-lg"
              placeholder="Enter the Title field"
              value={newData.postData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              name="body"
              id="body"
              placeholder="Enter the Body filed"
              value={newData.postData.body}
              onChange={handleChange}

              //   onChange={(e) => setNewData({ body: e.target.value })}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >
            Update 
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
