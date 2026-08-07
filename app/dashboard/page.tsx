"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Side, Nav, Right } from "@/app/dashboard/dash_page";

const Dash = function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/me", {
      credentials: "include",
    }).then((res) => {
      if (!res.ok) {
        router.push("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="main min-h-184 min-w-100 bg-slate-50 overflow-y-hidden flex">
        <Side />

        <div className="flex-1 w-full overflow-x-hidden">
          <Nav />
          <Right />
        </div>
      </div>
    </>
  );
};

export default Dash;