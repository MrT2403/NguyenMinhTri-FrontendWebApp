import React from "react";
import Link from "next/link";

const Dashboard = () => {
  const metrics = {
    totalUsers: 10,
    activeUsers: 2,
    pendingRequests: 5,
  };

  const recentActivities = [
    { id: 1, user: "Minh Trí", action: "Signed up", date: "2024-08-30" },
    { id: 2, user: "Sỹ Hưng", action: "Logged in", date: "2024-08-29" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8 max-w-screen-xl">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold text-gray-700">Key Metrics</h2>
          <ul className="mt-2">
            <li>Total Users: {metrics.totalUsers}</li>
            <li>Active Users: {metrics.activeUsers}</li>
            <li>Pending Requests: {metrics.pendingRequests}</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold text-gray-700">Recent Activities</h2>
          <ul className="mt-2">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="border-b py-2">
                <strong>{activity.user}</strong> - {activity.action} on{" "}
                {activity.date}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold text-gray-700">System Status</h2>
          <p>All systems are operational.</p>
        </div>
      </div>
      <Link href="/" passHref>
        <button className="px-4 py-2 mt-5 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
