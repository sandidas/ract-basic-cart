import React from "react";
import { useLoaderData } from "react-router-dom";

const Friends = () => {
  const friends = useLoaderData();
  return <div>
    Total Friends {friends.length}
  </div>;
};

export default Friends;
