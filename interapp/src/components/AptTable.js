import React, { useEffect ,useState, Component } from "react";
import "../css/designs.css"
import AptCloud from './AptCloud.js';


function AptTable(props) {

 const [aptdata, setapt] = useState([]);
  const [refresher, setref] = useState([]);
const [search, setsearch] = useState("");
  console.log("Get apartment props", props.apartments);
  const test = props.apartments;



const fetchapt = async () => {  
    setapt(props.apartments)
    console.log("Got apt Data",aptdata);
  };
 

 useEffect(() =>{

fetchapt();
}, [refresher]
  )
const options = {
  rotations: 0,
  rotationAngles: [0, 0],
  padding : 0,
  fontWeight : "bold",
  fontSizes : [24,85],
  transitionDuration : 1000

};

var wordcloudobj = [{
 text: "Loading",
 value: 1
}];


 const [page, setpage] = useState(0);
 const in1 = page * 6 ;
 const in2 = (page * 6) + 6;
console.log( "ins ", in1, in2, page);

const test2 = props.apartments.filter(prices =>{
return (prices.price !== null && prices.price.replace(",","").includes(search)) || (prices.titletextonly!== null && prices.titletextonly.toLowerCase().includes(search.toLowerCase())) ||
(prices.housing !== null && prices.housing.toLowerCase().includes(search.toLowerCase())) ;}
 )

const size = [900, 300];


  return (
    <main className="container-fluid full-height main-background">
    



      <div className="container" id = "maincontent"> 
        <div className="card-deck mb-3 text-center">
          <div className="card mb-6 shadow-sm">
            <div className="card-header">
              <h2 className="my-0 font-weight-normal">Apartments</h2>
              </div>
 
 <table id="dataTable" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%" height = "400px">
  <thead>
    <tr>
      <th class="th-sm">Title

      </th>
      <th class="th-sm">Rooms

      </th>
      <th class="th-sm">Price

      </th>
      <th class="th-sm">
            Track Apartment
         

      </th>
    </tr>
  </thead>

  <tbody>
    { test2.slice(in1,in2).map (post => 
                    <tr>
                    <td>{post.titletextonly}</td>
                    <td>{post.housing}</td>
                    <td>{post.price}</td>
                    <td>

                    <form>
              <div class="padding-std">
                <button
                  type="submit"
                  onClick = {async (evt) => {
                        const response = await fetch("/followpost", {
                                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        redirect: 'follow', // manual, *follow, error
                        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        body: JSON.stringify({title: post.titletextonly.slice(0,35),
                         rooms : post.housing.slice(0,20),
                        address :  post.mapaddress.slice(0,20),
                         price : post.price,
                         notes : "" 


                       }) // body data type must match "Content-Type" header
                      });





                    }
                  }
                  className="btn btn-lg btn-block btn-outline-primary">
                  Add
                </button>
              </div>
            </form></td>
                    </tr>  
                )}
  
  </tbody>

</table>
<div><div style={{float: "left"}}>
<button onClick={() => setpage(page - 1 < 0 ? 0 : page - 1)}> Prev </button>
<button onClick={() => setpage(page + 1)}>Next</button>
</div>
<div style={{float: "right"}}>
<label>Search:</label> 
<input type="text" id="myInput" onChange= {s => setsearch(s.target.value)} placeholder="Search Here"/>
         </div> </div>
          </div>
     
      </div>
      </div>

    </main>
  );
}
/*AppCalendar.propTypes = {
  posts: AppCalendar.func.isRequired,
};*/

export default AptTable;

/* */
