import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const Table = ({
  array,
  isclick,
  setIsEdit,
  setTitle,
  setUpvotes,
  setSelectedDate,
  setEditIndex,
  setArray,
}) => {
  const [modalContent, setModalContent] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const onView = (curElem) => {
    setModalContent({
      title: "Details",
      value1: "Title: " + curElem.title,
      value2: "Upvotes: " + curElem.upvotes,
      value3: "Date: " + curElem.date.toLocaleDateString(),
    });
    setShowModal(true); // Show the modal
  };

  const onEdit = (curElem, index) => {
    setIsEdit(true);
    setTitle(curElem.title);
    setUpvotes(curElem.upvotes);
    setSelectedDate(curElem.date);
    setEditIndex(index);
  };

  const Delete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );

    if (confirmDelete) {
      const updatedArray = array.filter((_, ind) => ind !== index);
      setArray(updatedArray);
    }
  };

  return (
    <>
      {/* Render modal component */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalContent?.value1}</p>
          <p>{modalContent?.value2}</p>
          <p>{modalContent?.value3}</p>
        </Modal.Body>
      </Modal>

      {isclick &&
        array.map((curElem, index) => (
          <div
            key={index}
            className="container-fluid d-flex col-lg-12 col-md-12 col-sm-12 bg-white ps-3 pe-5 shadow mb-1"
          >
            <div className="col-lg-5 col-md-3 col-sm-2 mt-2 ">
              <p className="text-truncate">{curElem.title}</p>
            </div>
            <div className=" col-lg-2 col-md-4 col-sm-3 mt-2 ps-3">
              <p>{curElem.upvotes}</p>
            </div>
            <div className="d-flex justify-content-end col-lg-5 col-md-5 ms-4">
              <p className="mt-2">{curElem.date.toLocaleDateString()}</p>
              <button
                className="btn btn-success me-2 ms-4 mb-1 mt-1 ps-1 pe-1 "
                onClick={() => onView(curElem)}
              >
                View
              </button>
              <button
                className="btn btn-primary me-2 mb-1 mt-1 ps-1 pe-1 "
                onClick={() => onEdit(curElem, index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger mb-1 mt-1 ps-1 pe-1 "
                onClick={() => Delete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Table;
