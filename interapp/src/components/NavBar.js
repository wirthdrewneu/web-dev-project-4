import React from "react";
import "../css/designs.css";

function NavBar({user}) {
	return (
		<header>
		<div className="container" id = "maincontent"> 
			<div className="mb-6 testb d-flex flex-column flex-md-row p-3 px-md-4 mb-3 border-bottom nav-header">
				<a href="#maincontent" class="skip-link">
					{" "}
					Skip to main content{" "}
				</a>
				<h1 className="my-0 mr-md-auto font-weight-normal">JohnsList</h1>
				<nav className="my-2 my-md-0 mr-md-3">
				{user ? ( <div>	<a className="p-2 text-dark" href="/">
						Apartments
					</a>
					<a className="text-dark" href="/perslist">
						{user}'s List
					</a>
					
              <form action = "/logout" method = "post">
              <button type ="submit" className="
              btn btn-lg btn-block btn-outline-primary">Log Out</button></form>
              </div>
              
          ) : (
            <a className="p-2 text-dark" href="/login">
						Login
					</a>
          )}
					

					
				</nav>
			</div>
			</div>
		</header>
	);
}
export default NavBar;
