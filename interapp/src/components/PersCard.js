
import "../css/designs.css";
import React, { useEffect ,useState, Component } from "react";

function PersCard(){
const [apart, setapart] = useState([]);
console.log("What ahppend");
  const getApt2 = async () => {
    try {
      const _apartments = await fetch("/plist").then((res) => res.json());
      console.log("got posts 2", _apartments);
      setapart(_apartments);
    } catch (err) {
      console.log("error ", err);
    }}

  useEffect(() => {
    getApt2();
    }, [])  

console.log("apart", apart);



    return(   
   
     <div className = "container">
    
  // Code review: I love your consideration of accessibility in your design, including the voice over and easy navigation for screen readers
  // When I use axe to run on your homepage, there were a lot of color constrast issues, maybe this is something that could be improve on for the future?
  // It would also be nice if you can add some preview images to the list of posts, or after the user log in
      
     { apart.map (post =>         

          <div className="card mb-3 shadow-sm w-50" >
            <div className="card-header">
              <h2 className="my-0 font-weight-normal">{post.title}</h2>
            </div>

            <div className="card-body">
            <form action="/updateNotes" method="Post">
              <div className="form-group row">
              <h3> Address : {post.address}  </h3>
              </div>
            
              <div className="form-group row">
              <h3> Rooms : {post.rooms}  </h3>
              </div>
              <div className="form-group row">
              <h3> Price : {post.price}  </h3>
              </div>
              <div className="form-group row">
              <h3> Notes : {post.notes}  </h3>
              </div>


             
              
              <div className="form-group row">
                <label for="appliedDate4" className="col-4 control-label" style={{"textAlign": "left"}}>Notes</label>
                <div className="col-12">
                  <input className="form-control" id="idtitle" name="title" type = "hidden" value = {post.title}/>
                  <textarea className="form-control"  id="appliedDate4" name="notes"  />
                </div>
              </div>
              <div class="padding-std">
                <button type="submit" className="btn btn-lg btn-block btn-outline-primary">Add Note</button>
              </div>
            </form>
        
            <form>
              <div class="padding-std">
                <button
                  type="submit"
                  onClick = {async (evt) => {
                        const response = await fetch("/delfollow", {
                                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        redirect: 'follow', // manual, *follow, error
                        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        body: JSON.stringify({title : post.title.slice(0,35)}) // body data type must match "Content-Type" header
                      });
                    }
                  }
                  className="btn btn-lg btn-block btn-outline-primary">
                  Remove
                </button>
              </div>
            </form>
          </div>

        </div>)}


        </div>
      

  );
}

export default PersCard;
