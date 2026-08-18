"use client"

import { Children, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { Side, Nav, Right } from "@/app/dashboard/dash_page";

const Dash = function Dashboard() {

//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:3001/me", {
//       credentials: "include",
//     }).then((res) => {
//       if (!res.ok) {
//         router.push("/");
//       } else {
//         setLoading(false);
//       }
//     });
//   }, []);

//   if (loading) return <p>Loading...</p>;

  return (
    <>
      <Right  />

     
    </>
  );
};

export default Dash;