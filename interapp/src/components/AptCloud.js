import React, { useEffect ,useState, Component } from "react";
import "../css/designs.css"
import ReactWordcloud from 'react-wordcloud';



function AptCloud(props) {

 const [aptdata, setapt] = useState([]);
 const [refresher, setref] = useState([]);


  const test = props.apartments;
console.log("In here",test);


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





for (var key of Object.keys(test)) {
  if (test[key].titletextonly){ 
  let words = test[key].titletextonly.split(" ");
  var i;

    for (i = 0; i < words.length; i++) {
    words[i]  = words[i].replace(/[^A-Za-z]+/g, '')
 if(words[i]){
/*console.log(wordcloudobj.find(texto => texto.text === words[i].toLowerCase()));*/

if(wordcloudobj.find(texto => texto.text === words[i].toLowerCase()) === undefined ){
if  (words[i].length >2){
let texts = {
 text: words[i].toLowerCase(),
 value: 100
}

wordcloudobj.push(texts);
/*console.log(words[i].toLowerCase());*/ 
}
}

else{

/*   console.log("in else"); */
for (var j = 0; j < wordcloudobj.length; j++) {
   if(wordcloudobj[j].text === words[i]){
    wordcloudobj[j].value =  wordcloudobj[j].value +10;   
/*   console.log(wordcloudobj[j].text, wordcloudobj[j].value); */
}
  }
}
}
}


  }
  /*  console.log(key + " -> " + test[key].titletextonly)*/
}

;


const size = [1100, 300];


  return (
    
       <div className="container" id = "maincontent4"> 
        <div className="card-deck mb-3 text-center">
          <div className="card mb-6 shadow-sm">
      <ReactWordcloud 
      words={wordcloudobj} 
      size = {size}
      options = {options}
      />
</div>
</div>
</div>      

  );
}
/*AppCalendar.propTypes = {
  posts: AppCalendar.func.isRequired,
};*/

export default AptCloud;

/* */
