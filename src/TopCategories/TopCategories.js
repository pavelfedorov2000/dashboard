import React from 'react';
import './TopCategories.scss';

function TopCategories(props) {
  const topCategories = [
    {
      "title": "Lifestyle",
      "subtitle": "Dailiy lifestyle articles",
    },
    {
      "title": "Tutorials",
      "subtitle": "Coding tutorials",
    },
    {
      "title": "Technology",
      "subtitle": "Dailiy technology articles",
    },
    {
      "title": "UX design",
      "subtitle": "UX design tips",
    },
    {
      "title": "Interaction tips",
      "subtitle": "Interaction articles",
    },
    {
      "title": "App development",
      "subtitle": "Mobile development articles",
    },
    {
      "title": "Nature",
      "subtitle": "Wildlife animal articles",
    },
    {
      "title": "Geography",
      "subtitle": "Geography articles",
    }
  ];
  function genegatePlusBg(param) {
    if (param === 1) {
      return 'rgba(116, 51, 255, 0.1)';
    } else if (param === 2) {
      return 'rgba(88, 135, 255, 0.1)';
    } else if (param === 3) {
      return 'rgba(245, 91, 93, 0.1)';
    } else if (param === 4) {
      return 'rgba(75, 222, 151, 0.1)';
    } else if (param === 8) {
      return 'rgba(47, 73, 209, 0.1)';
    } else {
      return 'rgba(255, 172, 50, 0.1)';
    }
  }
  function genegatePlusColor(param) {
    if (param === 1) {
      return '#5F2EEA';
    } else if (param === 2) {
      return '#0061F7';
    } else if (param === 3) {
      return '#F26464';
    } else if (param === 4) {
      return '#4BDE97';
    } else if (param === 8) {
      return '#2F49D1';
    } else {
      return '#FFB648';
    }
  }

  return (
    <div className="top-categories dashboard__categories">
      <h2 className="top-categories__title">Top categories</h2>
      <div className="top-categories__nums">28 Categories, 1400 Posts</div>
      <ul className="top-categories__list">
        {topCategories.map((category, index) => (
          <li className="top-categories__list-item top-category">
            <div className="top-category__left">
              <h6 className="top-category__title">{category.title}</h6>
              <p className="top-category__subtitle">{category.subtitle}</p>
            </div>
            <div className="top-category__right">
              <div className="top-category__k">8.2k</div>
              <span className="top-category__plus" style={{ backgroundColor: genegatePlusBg(index + 1), color: genegatePlusColor(index + 1) }}>+472</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopCategories;