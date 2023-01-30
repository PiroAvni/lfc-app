import { useState, useEffect } from "react";
import "./card.style.css";

function Card() {
//   const [data, setData] = useState("");

//    useEffect(() => {
//     const fetchData =  async () =>{
//     const response =  await fetch("http://localhost:5500/hello") ; 
//     const json = await response.json()
//     //console.log(json)
//      json.map(({...item})=>{
//         const teams = item.teams;
//         console.log(teams.away.name,teams.home.name)
//         return teams;
//     })
//     //console.log("render2")
//    // return json.data
//     //return res.status(200).json(data);
//     //setData(json);
//     //console.log(setData(json))
//     }
//     // call the function
//   fetchData()
    
//   // make sure to catch any error
//     .catch(console.error);
    
//    setData(data)
//   },[]); 

  return (
    <>
      <div className=" card-container card w-96 bg-base-100 shadow-xl outline outline-offset-2 outline-cyan-500">
        <figure>
          <img
            src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1248/cached.offlinehbpl.hbpl.co.uk/news/OMC/LFC.jpeg"
            alt="lfc"
          />
        </figure>
        <div className="card-body">
        
          <h2 className="card-title">

            How Liverpool FC's successful year extended off the pitch
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">More Details</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
