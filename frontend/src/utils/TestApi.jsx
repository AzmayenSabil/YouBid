import { useEffect, useState } from "react";
import axios from "axios";

function TestApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make a GET request to the backend
    axios
      .get("http://localhost:3000/api/test") // Replace with your actual endpoint
      .then((response) => {
        // Handle success
        setData(response.data);
      })
      .catch((error) => {
        // Handle error
        setError(error.message);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Data from backend:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TestApi;
