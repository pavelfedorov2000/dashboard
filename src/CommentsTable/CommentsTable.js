import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import './CommentsTable.scss';

const commentsTableData = [
    {
        id: 0,
        author: "Kathryn Murphy",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Pending",
        date: "18.05.2020"
    },
    {
        id: 1,
        author: "Marvin McKinney",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Pending",
        date: "17.04.2021"
    },
    {
        id: 2,
        author: "Wade Warren",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Active",
        date: "04.11.2019"
    },
    {
        id: 3,
        author: "Theresa Webb",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Active",
        date: "08.07.2020"
    },
    {
        id: 4,
        author: "Darrell Steward",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Active",
        date: "10.04.2020"
    },
    {
        id: 5,
        author: "Kathryn Murphy",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Trashed",
        date: "18.05.2020"
    },
    {
        id: 6,
        author: "Marvin McKinney",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Pending",
        date: "17.04.2021"
    },
    {
        id: 7,
        author: "Wade Warren",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Active",
        date: "04.11.2019"
    },
    {
        id: 8,
        author: "Theresa Webb",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Active",
        date: "08.07.2020"
    },
    {
        id: 9,
        author: "Darrell Steward",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Trashed",
        date: "10.04.2020"
    },
    {
        id: 10,
        author: "Kathryn Murphy",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Pending",
        date: "18.05.2020"
    },
    {
        id: 11,
        author: "Marvin McKinney",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Pending",
        date: "17.04.2021"
    },
    {
        id: 12,
        author: "Wade Warren",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Active",
        date: "04.11.2019"
    },
    {
        id: 13,
        author: "Theresa Webb",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Trashed",
        date: "08.07.2020"
    },
    {
        id: 14,
        author: "Darrell Steward",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Active",
        date: "10.04.2020"
    },
    {
        id: 15,
        author: "Kathryn Murphy",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Pending",
        date: "18.05.2020"
    },
    {
        id: 16,
        author: "Marvin McKinney",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Trashed",
        date: "17.04.2021"
    },
    {
        id: 17,
        author: "Wade Warren",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Active",
        date: "04.11.2019"
    },
    {
        id: 18,
        author: "Theresa Webb",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Active",
        date: "08.07.2020"
    },
    {
        id: 19,
        author: "Darrell Steward",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
        status: "Trashed",
        date: "10.04.2020"
    },
    {
        id: 20,
        author: "Darrell Steward",
        comment: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.",
        commentedIn: "Tips and Tricks",
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
    "Trashed": {
        backgroundColor: "rgba(245, 91, 93, 0.1)",
        color: "#F26464",
    },
};


const selectRow = {
    mode: 'checkbox',
    //clickToSelect: true,
    bgColor: '#F2F6FF'
};

function authorFormatter(cell, row, rowIndex, colIndex) {
    return (
        <div className="author">
            <img className="author__avatar" src={rowIndex < 9 ? `img/avatars/0${rowIndex + 1}.png` : `img/avatars/0${Math.floor(Math.random() * 9) + 1}.png`} alt="avatar" />
            <div className="author__name">{cell}</div>
        </div>
    );
}

function dateFormatter(cell, row, rowIndex, colIndex) {
    return (
        <time dateTime={cell.split('.').reverse().join('-')}>{cell}</time>
    );
}

const { SearchBar } = Search;

const statusSelectOptions = Object.keys(statusStyle).reduce((acc, status) => {
    acc[status] = status;
    return acc;
}, {});

const dateSelectOptions = commentsTableData.reduce((acc, comment) => {
    acc[comment.date] = comment.date;
    return acc;
}, {});

//console.log(dateSelectOptions);

//console.log(statusSelectOptions);

const columns = [{
    dataField: 'author',
    text: 'Author',
    formatter: authorFormatter,
}, {
    dataField: 'comment',
    text: 'Comment',
}, {
    dataField: 'commentedIn',
    text: 'Commented In',
}, {
    dataField: 'date',
    text: 'Date',
    formatter: dateFormatter,
    filter: selectFilter({
        options: dateSelectOptions,
        style: {
            backgroundColor: '#fff'
        },
        className: 'table-select table-select--date',
    })
}, {
    dataField: 'status',
    text: 'Status',
    formatter: cell => <span className="status-label" style={{ backgroundColor: statusStyle[cell].backgroundColor, color: statusStyle[cell].color }}>{cell}</span>,
    filter: selectFilter({
        options: statusSelectOptions,
        style: {
            backgroundColor: '#fff'
        },
        className: 'table-select table-select--status',
    })
}, /* {
  dataField: 'action',
  text: 'Action',
  formatter: (cell, row, rowIndex, colIndex) => {
    return (
      <button
        className="btn-trash" style={{ backgroundImage: 'url(img/icons/trash.svg)' }}
        onClick={() => handleDelete(rowIndex)}
      ></button>
    );
  },
} */];

/* const handleDelete = (rowIndex) => {
  console.log(rowIndex);
}; */

const afterSearch = (newResult) => {
    console.log(newResult);
};

function CommentsTable() {

    return (
        <section className="table comments__table">

            <ToolkitProvider keyField='id' data={commentsTableData} columns={columns} selectRow={selectRow} search={{ afterSearch }}>
                {
                    props => (
                        <div className="comments__table-inner">
                            <div className="comments__table-filters block">
                                <SearchBar {...props.searchProps} style={{ backgroundImage: 'url(img/icons/search.svg)' }} />
                            </div>

                            <BootstrapTable {...props.baseProps} keyField='id' data={commentsTableData} columns={columns} selectRow={selectRow} headerClasses="table-head" pagination={paginationFactory({ alwaysShowAllBtns: true })} filter={filterFactory()} />
                        </div>
                    )
                }
            </ToolkitProvider>
        </section>
    );
}

export default CommentsTable;