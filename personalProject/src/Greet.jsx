import React from "react";

export default function Greet({
  name = "add name",
  roll = "add roll no",
  id = "add id",
}) {
  return (
    <>
      <ul>
        <li>Name:{name}</li>
        <li>Roll no:{roll}</li>
        <li>PRN:{id}</li>
      </ul>
    </>
  );
}
