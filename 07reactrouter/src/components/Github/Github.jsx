import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then((response) => response.json())
  //     .then(data => {
  //         console.log(data)
  //         setData(data)
  //     })
  // }, [])

  return (
    <div className="text-center m-4 bg-black text-white p-4 text-3xl flex flex-col justify-center items-center py-9 ">
      <h1>Github followers: {data.followers}</h1>
      <img src={data.avatar_url} width={300} alt="" className="rounded-full" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sarthak-gupta229");
  return response.json();
};

// ('https://api.github.com/users/sarthak-gupta229')
