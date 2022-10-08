import React from "react";
import { useRouteError } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ErrorPage = () => {
  // To check error
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Header></Header>
      <h1> This is Error page</h1>
      <h3>Error </h3>

      {error && (
        <div className="text-center">
          <div className="">Status Text : {error.statusText}</div> <br />
          <div className="">Status : {error.status || error.message}</div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
