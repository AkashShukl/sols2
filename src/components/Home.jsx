import React from "react";
import { useParams } from "react-router";

export default function Home() {
  let params = useParams();

  const greet = () => {
    let date = new Date();
    let hour = date.getHours();

    if (hour > 4 && hour < 12) return " Good morning ";
    else if (hour >= 12 && hour < 16) return "Good afternoon";
    else return "Good night";
  };

  return (
    <div>
      <h3>
        {`Hello ${params.username ? params.username : "User"} ${greet()}`}{" "}
      </h3>
    </div>
  );
}
