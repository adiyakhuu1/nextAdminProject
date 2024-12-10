"use client";
import { useState } from "react";
import { useParams, useEffect } from "react-router-dom";

export default function App({ params }) {
  const param = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    try {
      fetch("/api/users")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } catch (err) {
      console.error("error", err);
    }
  }, []);

  return (
    <div>
      {console.log(params.id)}

      <p>{params.id}</p>
    </div>
  );
}
