import React from 'react';
import Stats from '../Stats/Stats';
import NewCustomers from '../NewCustomers/NewCustomers';
import TopCategories from '../TopCategories/TopCategories';
import './Dashboard.scss';

function AppHome(props) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard__grid">
        <Stats />
        <div className="chart dashboard__chart">
          <img src="img/chart.svg" alt="chart" />
        </div>
        <NewCustomers />
        <TopCategories />
      </div>
    </div>
  );
}

export default AppHome;