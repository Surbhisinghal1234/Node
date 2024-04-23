import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
   
    fetch("http://localhost:8000/submit", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({ name: name, email: email, message: message }),
      
    }).then(response => response.json())
    .then(response  => console.log(response ))

    // axios.post('http://localhost:8000/submit',  {
    // name:name,
    // email:email,
    // mesage:message,},
    // {  headers: {
    //     'Content-Type': 'application/json'
    //   },
    // }).then((response)=> console.log(response))

  }

  return (
    <>
      <div className="form">
        <form method="post" onSubmit={handleSubmit}>
          <label>
            name:
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              placeholder="Write your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Message:
            {/* <input type="textarea"  */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
              Write something...
            </textarea>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
