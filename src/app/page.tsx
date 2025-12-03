import React from 'react';
import { initialData } from '../lib/mockData';
import DashboardClient from '../components/DashboardClient';

// This is a Server Component by default
const Dashboard = async () => {
  // Simulate data fetching on the server
  // In a real app, this would be a DB call or API request
  const data = await new Promise<typeof initialData>((resolve) => {
    setTimeout(() => {
      resolve(initialData);
    }, 500);
  });

  return <DashboardClient initialProducts={data} />;
};

export default Dashboard;