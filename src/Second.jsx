// Fetch and display data from an API using fetch or axios



import React, { useEffect, useState } from "react";

const url = "https://fakestoreapi.com/products/1";

const Second = () => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
        // console.log(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchingData();
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error Occured</h2>;
  }
  // the Below return from 40 th line will execute if the both if statemnets in tits above were false
  return (
    <>
      <h2>Data Coming Second Question </h2>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <div className="card" style={{ width: "350px" }} key={data.id}>
          <img
            src={data.image}
            alt={data.title}
            style={{ width: "250px", objectFit: "cover" }}
          />
          <p>$ {data.price}</p>
          <p>{data.description}</p>
        </div>
      </div>

      <hr style={{margin:"40px auto"}}/>

    </>
  );
};

export default Second;
