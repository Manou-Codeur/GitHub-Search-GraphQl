import React from "react";
import { useQuery } from "@apollo/client";

const Fetch = ({ query, variables, children }) => {
  const { loading, error, data } = useQuery(query, { variables });

  if (loading) return <h1>loading...</h1>;
  if (error) return <h1>Error!!!</h1>;

  return children(data);
};

export default Fetch;
