import React from 'react';
import './DashboardTable.scss';
import BootstrapTable from 'react-bootstrap-table-next';

const dashboardTableData = [
  {
    id: 0,
    title: "Any mechanical keyboard enthusiasts in design?",
    author: "Eleanor Pena",
    status: "Pending",
    date: "18.05.2020"
  },
  {
    id: 1,
    title: "17 Iconic Movies That Got Surprisingly Low Ratings",
    author: "Courtney Henry",
    status: "Pending",
    date: "27.11.2019"
  },
  {
    id: 2,
    title: "The Fun Side of Hitting Reset",
    author: "Jacob Jones",
    status: "Active",
    date: "04.11.2019"
  },
  {
    id: 3,
    title: "U.S. Chemical Production Improves In July",
    author: "Brooklyn Simmons",
    status: "Active",
    date: "08.07.2020"
  },
  {
    id: 4,
    title: "Chemical Activity Barometer Shows Gain In August",
    author: "Darrell Steward",
    status: "Active",
    date: "10.04.2020"
  }
];

const statusStyle = {
  "Pending": {
    backgroundColor: "rgba(255, 172, 50, 0.1)",
    color: "#FFB648",
  },
  "Active": {
    backgroundColor: "rgba(88, 135, 255, 0.1)",
    color: "#5887FF",
  },
};


const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  bgColor: '#F2F6FF'
};

function thumbnailFormatter(cell, row, rowIndex, colIndex) {
  return (
    <img src={`img/thumbnails/0${rowIndex + 1}.png`} alt="image" />
  );
}

function authorFormatter(cell, row, rowIndex, colIndex) {
  return (
    <div className="author">
      <img className="author__avatar" src={`img/avatars/0${rowIndex + 1}.png`} alt="avatar" />
      <div className="author__name">{cell}</div>
    </div>
  );
}

function statusFormatter(cell, row, rowIndex, colIndex) {
  return (
    <span className="status-label" style={{ backgroundColor: statusStyle[cell].backgroundColor, color: statusStyle[cell].color }}>{cell}</span>
  );
}

function dateFormatter(cell, row, rowIndex, colIndex) {
  return (
    <time dateTime={cell.split('.').reverse().join('-')}>{cell}</time>
  );
}

const columns = [{
  dataField: 'thumbnail',
  text: 'Thumbnail',
  formatter: thumbnailFormatter,
}, {
  dataField: 'title',
  text: 'Title',
  style: {
    color: '#171717',
    fontWeight: '600',
  }
}, {
  dataField: 'author',
  text: 'Author',
  formatter: authorFormatter
}, {
  dataField: 'status',
  text: 'Status',
  formatter: statusFormatter,
}, {
  dataField: 'date',
  text: 'Date',
  formatter: dateFormatter,
}];

const rowStyle = { backgroundColor: '#fff' };

function DashboardTable() {

  return (
    <section className="table dashboard__table">
      <BootstrapTable keyField='id' data={dashboardTableData} columns={columns} selectRow={selectRow} headerClasses="dashboard-table__head" rowStyle={rowStyle} />
    </section>
  );
}

export default DashboardTable;