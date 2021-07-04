import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {AXIOS_INSTANCE} from '../Api/ApiEndPoints'

const Display = () => {
  const [data, setData] = useState([]);


  const userData = async () => {
    const result = await AXIOS_INSTANCE.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(result.data.reverse());
  };

  useEffect(() => {
    userData();
  }, []);



  const deleteUser = async (id) => {
    await AXIOS_INSTANCE.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log("front end  delete");
    userData();
  };
  return (
    <>
      
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Body</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>

                <td className="d-flex">
                <Link
                    className="btn btn-info  mr-2"
                    to={`/view/${user.id}`}
                  >
                    View
                  </Link>
                 
                  <Link
                    className="btn btn-success  mr-2"
                    to={`/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button className="btn btn-danger ml-2"  onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Display;
