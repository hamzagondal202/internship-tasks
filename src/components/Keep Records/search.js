import React from "react";

const Search = ({
  array,
  onSortMostUpvoted,
  sortMostRecent,
  onSearchChange,
}) => {
  return (
    <>
      <div className="row_1_horizontal container-fluid mt-md-4 mt-lg-4 mt-sm-12">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 mt-md-4 mt-sm-4">
            <p className=" col-lg-7 col-md-10 col-sm-7">
              For the state management use useReducer with useContext hooks.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="search col-lg-10 col-md-12 col-sm-12">
              <input
                type="text"
                className="form-control search-bar input-lg p-3 rounded-4 "
                placeholder="Search the record.."
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <div className="row d-flex col-md-12 col-sm-12 col-lg-12 mt-4 ms-4 ">
              <div className="col-md-9  col-sm-9 col-lg-12 ">
                Sort By
                <button
                  className="col-md-5 col-sm-4 col-lg-4 btn btn-success ms-md-1 ms-sm-4"
                  onClick={onSortMostUpvoted}
                >
                  Most Upvoted
                </button>
                <button
                  className="col-md-4 col-sm-4 col-lg-4 btn btn-success ms-md-2 ms-sm-4"
                  onClick={sortMostRecent}
                >
                  Most Recent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
