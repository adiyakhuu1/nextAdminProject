"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function App() {
  const param = useParams();
  const [data, setData] = useState([]);

  // console.log("param data ", param);
  // const fetchData = async () => {
  //   const res = await fetch(`/api/users/` + param.id, { method: "GET" });
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // };
  useEffect(() => {
    // fetchData();
    fetch(`/api/users/` + param.id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("Data: ", data);
      })
      .catch((e) => {
        console.error("the error", e);
      });
  }, [param.id]);

  console.log("checking first name", data?.data?.firstname);
  console.log("checking lastname", data?.data?.lastname);
  console.log("checking email", data?.data?.email);

  return (
    <div>
      {/* {console.log(param)} */}
      {/* {console.log("param id", param.id)} */}
      <div>Firstname: {data?.data?.firstname}</div>
      <div>Lastname: {data?.data?.lastname}</div>
      <div>Email: {data?.data?.email}</div>

      {/* <p>{console.log("last console", data)}</p> */}
    </div>
  );
}
