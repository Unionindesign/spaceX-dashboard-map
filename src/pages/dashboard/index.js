import React, { useState, useEffect } from "react";
import "./dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [launchData, setLaunchData] = useState([]);

  useEffect(() => {
    const getAllLaunchData = async () => {
      const result = await axios("https://api.spacexdata.com/v3/launches");
      console.log("Launch Data: ", result.data);
      setLaunchData(result.data);
    };
    getAllLaunchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
