import React, { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!loading ? (
        <>
          <h1 className="text-3xl font-semibold mb-4">Order successfull!</h1>
          <p>Your Order has been placed successfully!!</p>
        </>
      ) : (
        <>
          <ClockLoader size={200} color="#36d7b7" />
        </>
      )}
    </div>
  );
};

export default Success;
