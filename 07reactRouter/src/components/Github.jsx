import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Github() {
  let [data, setData] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="bg-green-300 text-center text-[50px]">
          Github Followers : {data.followers}
        </h1>

        <div className="h-[200px] w-[200px] rounded-full overflow-hidden my-[50px] border-[5px] border-black">
          <img src={data.avatar_url} alt="" />
        </div>
      </div>
    </>
  );
}
