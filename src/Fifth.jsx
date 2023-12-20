//Create a component GitHubUser that fetches and displays a user's data from the GitHub API based on their username



import React, { useEffect, useState } from "react";

const Fifth = () => {

  const [userName, setUserName] = useState(`yamini`);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setIsError] = useState(false);

  useEffect(() => {
    const fetchingSingleUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`
        );
        const data = await response.json();
        // console.log(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchingSingleUser();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h2>Something Error happended</h2>;
  }
  return (
    <div>
     
      <button>Submit</button>
      <h2>Fifth Question</h2>
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: "100px", height: "100px" }}
      />

      <h3>Name : {data.login}</h3>
      <h3>URL : {data.html_url}</h3>
      <h3>Followers : {data.followers}</h3>
    </div>
  );
};

export default Fifth;
