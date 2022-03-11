import React from 'react';
import './Stats.scss';

function Stats() {
  const stats = [
    {
      "title": "visits",
      "num": "1 478 286",
      "percent": "4.07%",
      "trend": "increase",
      "month": "Last month"
    },
    {
      "title": "articles",
      "num": "478 520",
      "percent": "0.24%",
      "trend": "increase",
      "month": "Last month"
    },
    {
      "title": "subscribtions",
      "num": "154 872",
      "percent": "1.64%",
      "trend": "decrease",
      "month": "Last month"
    },
    {
      "title": "authors",
      "num": "167",
      "percent": "0.00%",
      "trend": "zero",
      "month": "Last month"
    }
  ];

  function genegateColor(param) {
    switch (param) {
      case 'increase':
        return '#4BDE97';
      case 'decrease':
        return '#F26464';
      case 'zero':
        return '#FFB648';
      default:
        return null;
    }
  }

  return (
    <div className="stats dashboard__stats">
      {stats.map(stat => (
        <div className="stat-card block">
          <img className="stat-card__img" src={`img/icons/${stat.title}.svg`} alt={stat.title} />
          <div className="stat-card__content">
            <div className="stat-card__num">{stat.num}</div>
            <div className="stat-card__title">Total {stat.title}</div>
            <div className="stat-card__wrap">
              <div className="stat-card__trend" style={{ color: genegateColor(stat.trend), backgroundImage: `url(img/icons/${stat.trend}.svg)` }}>{stat.percent}</div>
              <div className="stat-card__month">{stat.month}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stats;