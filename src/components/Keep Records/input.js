import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Search from "./search";
import Table from "./Table";

// getting localstorage data
const getLocalData = () => {
  const lists = localStorage.getItem("recordList");
  if (lists) {
    const parsedLists = JSON.parse(lists);
    // Convert date strings back to Date objects
    const recordsWithDates = parsedLists.map((record) => ({
      ...record,
      date: new Date(record.date),
    }));
    return recordsWithDates;
  } else {
    return [];
  }
};

const Input = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState("");
  const [upvotes, setUpvotes] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isclick, setisclick] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [array, setArray] = useState(getLocalData());
  const [editIndex, setEditIndex] = useState("");
  const [filteredArray, setFilteredArray] = useState(array);
  const [issearching, setIsSearching] = useState("");

  useEffect(() => {
    setIsFormValid(title !== "" && upvotes !== "" && selectedDate !== null);
  }, [title, upvotes, selectedDate]);

  useEffect(() => {
    localStorage.setItem("recordList", JSON.stringify(array));
    setisclick(true);
  }, [array]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleUpvotesChange = (event) => {
    setUpvotes(event.target.value);
  };
  const handleClick = () => {
    setisclick(true);
    if (!isEdit) {
      const newrecord = {
        title: title,
        upvotes: upvotes,
        date: selectedDate,
      };
      setArray((prevArray) => [...prevArray, newrecord]);
      setSelectedDate(selectedDate);
      setTitle(title);
      setUpvotes(upvotes);
    } else {
      const editRecord = array.map((curElem, index) => {
        if (index === editIndex) {
          // Modify the properties of the current element for editing
          const editedElement = {
            ...curElem,
            title: title,
            upvotes: upvotes,
            date: selectedDate,
          };

          return editedElement;
        } else {
          return curElem;
        }
      });

      setArray(editRecord);
      resetFormFields();
    }
  };
  const handleSubmit = () => {
    // event.preventDefault();
    handleClick(); // Call the function to handle the form data
    resetFormFields();
  };

  const resetFormFields = () => {
    setSelectedDate(null);
    setTitle("");
    setUpvotes("");
    setIsFormValid(false);
    setIsEdit(false);
    setEditIndex("");
  };

  const sortMostUpvoted = () => {
    const sortedArray = [...array];
    sortedArray.sort((a, b) => b.upvotes - a.upvotes);
    setArray(sortedArray);
  };

  const sortMostRecent = () => {
    const sortedArray = [...array];
    sortedArray.sort((a, b) => b.date - a.date);
    setArray(sortedArray);
  };

  const handleSearchChange = (input) => {
    clearTimeout(typingTimeout); // Clear previous timeout if exists

    if (input.length >= 3) {
      typingTimeout = setTimeout(() => {
        setIsSearching(input);

        const filtered = array.filter((item) =>
          item.title.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredArray(filtered.length > 0 ? filtered : []);
      }, 1000); // Wait for 1 second before performing search
    } else {
      setFilteredArray([]);
      setIsSearching("");
    }
  };
  let typingTimeout;
  return (
    <>
      <div className="main-div container-fluid pt-md-5 bg-light ps-md-5 pb-5 ">
        <Search
          onSearchChange={handleSearchChange}
          array={array}
          onSortMostUpvoted={sortMostUpvoted}
          sortMostRecent={sortMostRecent}
        />
        <div className="row_2_horizontal d-lg-flex flex-lg-row flex-column ">
          <div className=" col-md-12 col-sm-12 col-lg-4 bg-white p-4 shadow-sm me-5 ">
            <form className="form-group " onSubmit={handleSubmit}>
              {!isEdit ? (
                <h6 className="mb-4 ">Add Record</h6>
              ) : (
                <h6 className="mb-4 ">Edit Record</h6>
              )}
              <input
                type="text"
                className="form-control mb-3 p-3"
                placeholder="Enter title.."
                onChange={handleTitleChange}
                value={title}
              />
              <input
                type="number"
                className="upvotes form-control mb-3 p-3"
                placeholder="Enter upvotes number between 0 to 100.."
                onChange={handleUpvotesChange}
                value={upvotes}
              />
              <div className="datepicker col-12 ">
                <DatePicker
                  className=" date_div form-control mb-3 p-3  "
                  placeholderText="Select a date"
                  selected={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              {!isEdit ? (
                <button
                  type="submit"
                  className="form-control btn btn-success p-3 "
                  disabled={!isFormValid}
                  onClick={() => handleSubmit()}
                >
                  Add Data
                </button>
              ) : (
                <button
                  type="submit"
                  className="form-control btn btn-success p-3 "
                  disabled={!isFormValid}
                  onClick={() => handleSubmit()}
                >
                  Save Edits
                </button>
              )}
            </form>
          </div>

          {/* ------------------------------------------------------------------------------------------------- */}

          <div className=" container me-1 mt-3 ">
            <div className="table d-flex bg-white ps-3 shadow mb-1 col-sm-12  ">
              <div className="col-lg-5 col-md-2 col-sm-2  mt-2">
                <p>Title</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-3 mt-2">
                <p>Upvotes</p>
              </div>
              <div className="col-lg-5 col-md-2 col-sm-2 mt-2 ps-5">
                <p>Date</p>
              </div>
            </div>

            <Table
              array={issearching.length >= 3 ? filteredArray : array}
              isclick={isclick}
              setIsEdit={setIsEdit}
              setTitle={setTitle}
              setUpvotes={setUpvotes}
              setSelectedDate={setSelectedDate}
              setEditIndex={setEditIndex}
              setArray={setArray}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
