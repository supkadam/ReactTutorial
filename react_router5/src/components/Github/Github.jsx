import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const responsedata = useLoaderData();
//   const [responsedata, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/supkadam")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">
      Github followers: {responsedata.followers}
      <img src={responsedata.avatar_url} alt="Git Picture" width={200}/>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}
