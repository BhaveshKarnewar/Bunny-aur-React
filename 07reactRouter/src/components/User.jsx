import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="bg-red-500 text-center text-[100px]">User: {userid}</div>
    </>
  );
}

export default User;
