import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const ViewUser = () => {
  const [ids, setIds] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
 
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setIds(result.data.id);
    setTitle(result.data.title);
    setBody(result.data.body);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {ids}</h1>
      <hr />
      <ul className="list-group w-auto">
      <li className="list-group-item">Title: {title}</li>
      <li className="list-group-item">Body: {body}</li>
      </ul>
    </div>
  );
};

export default ViewUser;