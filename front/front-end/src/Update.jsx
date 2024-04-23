import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

function Update() {
    // const [updateName,setUpdateName] = useState()
    // const [updateEmail,setUpdateEmail] = useState()
    // const [updateMessage,setUpdateMessage] = useState()
    const {id} = useParams();

    axios.get("http://localhost:8000/getById/"+ id)

  return (
    <>
<div className="form">
        <form method="post" >
          <label>
            name:
            <input
              type="text"
              placeholder="Enter your name"
              
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              placeholder="Write your email"
             
            />
          </label>
          <br />
          <label>
            Message:
            {/* <input type="textarea"  */}
            <textarea
             
            >
              Write something...
            </textarea>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Update



