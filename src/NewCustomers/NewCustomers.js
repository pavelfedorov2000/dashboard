import React from 'react';
import './NewCustomers.scss';

function NewCustomers(props) {
  return (
    <section className="new-customers dashboard__customers" style={{ backgroundImage: 'url(img/mask.svg)' }}>
      <h2 className="new-customers__title">New Customers</h2>
      <div className="new-customers__plus">+958</div>
      <div className="new-customers__daily">28 Daily Avg.</div>
    </section>
  );
}

export default NewCustomers;