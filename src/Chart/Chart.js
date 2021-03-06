import React from 'react';
import './Chart.scss';

function Chart() {
  return (
    <section className="dashboard__chart chart block">
      <div className="chart__info">
        <div className="chart__descr">
          <h2 className="chart__title">Visitor statistics</h2>
          <div className="chart__monthes">Nov - July</div>
        </div>
        <div className="chart-legend">
          <div className="chart-legend__item chart-legend__item--purple">
            <div className="chart-legend__item-title">Last 6 months</div>
            <div className="chart-legend__item-num">475 273</div>
          </div>
          <div className="chart-legend__item chart-legend__item--green">
            <div className="chart-legend__item-title">Previous</div>
            <div className="chart-legend__item-num">782 396</div>
          </div>
        </div>
      </div>
      <div className="chart__graph">
        <img src="img/chart.svg" alt="chart" />
      </div>
    </section>
  );
}

export default Chart;