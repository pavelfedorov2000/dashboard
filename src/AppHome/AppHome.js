import React from 'react';
import Stats from '../Stats/Stats';
import Chart from '../Chart/Chart';
import NewCustomers from '../NewCustomers/NewCustomers';
import DashboardTable from '../DashboardTable/DashboardTable';
import TopCategories from '../TopCategories/TopCategories';
import './Dashboard.scss';

function AppHome(props) {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <div className="dashboard__grid">
        <Stats />
        <Chart />
        <NewCustomers />
        <DashboardTable />
        <TopCategories />
      </div>
    </div>
  );
}

export default AppHome;