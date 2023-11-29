import React, { useState } from "react";

export default function Main() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  // another hooks for error messages
  const [eusername, seteusername] = useState("");
  const [eemail, seteemail] = useState("");
  const [epassword, setepassword] = useState("");
  const [ecpassword, setecpassword] = useState("");
  //another hoos for the border colors
  const [ucolor, setucolor] = useState("");
  const [ecolor, setecolor] = useState("");
  const [pcolor, setpcolor] = useState("");
  const [cpcolor, setcpcolor] = useState("");

  function validate() {
    // console.log(username + email + password + cpassword);
    if (username.length > 5) {
      seteusername("");
      setucolor("green");
    } else {
      seteusername("Username must be more than 5 digits");
      setucolor("red");
    }
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h1>Form Validation</h1>
          <input
            type="text"
            placeholder="username"
            className="form-control"
            style={{ borderColor: ucolor }}
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <p>{eusername}</p>
          <input
            type="text"
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <p>{eemail}</p>
          <input
            type="text"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <p>{epassword}</p>
          <input
            type="text"
            placeholder="confirm password"
            className="form-control"
            value={cpassword}
            onChange={(e) => setcpassword(e.target.value)}
          />
          <p>{ecpassword}</p>
          <button className="btn btn-success" onClick={validate}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
