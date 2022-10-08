import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Countries.css";

const Countries = () => {
  const countries = useLoaderData();
  return (
    <div>
      <h1>Total Countries {countries.length}</h1>

      {countries.map((country) => (
        <li key={country?.cca3} className="countries">

            
     
          <Link to={`./country/${country?.name?.common}`}> {country?.name?.common} </Link>

        </li>

      ))}
    </div>
  );
};

export default Countries;
