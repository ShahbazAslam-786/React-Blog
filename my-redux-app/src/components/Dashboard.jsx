import React from "react";
import Navbar from "./Navbar";
import ClientList from "./ClientList";

const Dashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar onLogout={onLogout} />
      <div className="flex-1 flex justify-center items-center p-6">
        <div className="max-w-6xl">
          <ClientList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
