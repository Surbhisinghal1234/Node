import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Show() {
  const [data, setdata] = useState([]);

  // const [newName, setNewName] = useState("");
  // const [newEmail, setNewEmail] = useState("");
  // const [newMessage, setNewMessage] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get("http://localhost:8000/show");
    setdata(response.data);
  }
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/show/${id}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (id,index) => {
    const dataToEdit = data[index]
    try {
      await axios.put(`http://localhost:8000/update/${id}`,dataToEdit
      , {
        headers:{
          "Content-Type": "application/json"
        },
      })
    }
    catch(error){
      console.log(error)
    }
  }

  let count = 1;
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>SNo.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Message</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((dt, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{count++}</td>
                  <td>{dt.name}</td>
                  <td>{dt.email}</td>
                  <td>{dt.message}</td>
                  <td>
                   <Link to={`/update/${dt._id}`}><EditIcon onClick={()=> handleEdit(dt._id,index)} /></Link> 
                    <DeleteIcon onClick={() => handleDelete(dt._id)} />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Show;
