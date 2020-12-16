import React, { useEffect ,useState, Component } from "react";
import "../css/designs.css"
import { Link } from "react-router-dom";


// I could not find a register page, so I was not able to sign up and sign in
// I think it would also be nice for you to add a go back to home button here 
function Login() {
/*   
return "done"*/
  /*  const isauthenticated = await loginToken.checkIfUserPasswordMatches(
      signInInfo*/
    /*;}*/

return( 

	 <main className="container-fluid full-height main-background">
	 <div className="container" id = "maincontent"> 
    <div className="card mb-3 shadow-sm" >
    <div className="card-header">
              <h2 className="my-0 font-weight-normal">Enter Credentials</h2>
            </div>
<form action="/login" method = "post">
<div>
<label>
Username: <input type="text" name = "username"></input>
</label>
</div>
<div>
<label>
Password:   <input type="password" name = "password"></input>
</label>
</div>
<button type="submit">Login</button>
</form>
</div>
</div>
</main>
    );
}
export default Login;

