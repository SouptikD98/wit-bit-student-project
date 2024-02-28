"use client"; // This is a client component
// App.js

import { useState } from "react";
import "./page.css";
import Image from "next/image";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import { DeleteModal } from "./components/DeleteModal";
import rows from "./data/rowsData.js";
import { SidebarMenu } from "./components/SidebarMenu";
// import { addRow } from "./data/rowsData.js";

function App() {
  const id = 1;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setDeleteModalOpen] = useState(false);
  const [rowsData, setRowsData] = useState(rows); // Using the imported rows data
  const [rowToEdit, setRowToEdit] = useState(null);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDeleteRow = (targetIndex, e) => {
    setRowToDelete(targetIndex);    
    setDeleteModalOpen(!modalDeleteOpen);    
  };

  const handleEditRow = (index) => {
    setRowToEdit(index);

    setModalOpen(true);
  };


  const handleSubmit = (newRow, flag, e) => {  
    // e.preventDefault();
    console.log(flag)
    console.log(rowToEdit)

    if (flag === "delete") {
        setRowsData(rowsData.filter((_, idx) => idx !== rowToDelete));
    }
    else if (flag === "edit") {
      console.log(rowToEdit)
      rowToEdit === null
        ?setRowsData((rowsData) => [...rowsData, newRow])
      : setRowsData(
        rowsData.map((currRow, idx) => {
          console.log(currRow)
            if (idx !== rowToEdit) return currRow;

            return {...newRow, no: currRow.no};
          })
        );
    } 
  };
  
  
  
  

  return (
    <div className="total-container w-full h-full flex">
      <div
        className="w-full h-full bg-black fixed bg-opacity-45"
        id="close-side-bar"
        style={{ display: isMenuOpen ? "block" : "none" }}
        onClick={(e) => {
          if (e.target.id === "close-side-bar") {
            toggleMenu();
          }
        }}
      >
        <div className="base-layout-floating-bar bg-white absolute top-0 left-0 items-start justify-center w-full h-full max-w-[18rem] px-[1rem] py-[2.5rem]">
          <SidebarMenu />
        </div>
      </div>

      <div className="base-layout-1 hidden lg:flex  items-start justify-center w-full max-w-[18rem] h-[100%] px-[1rem] py-[2.5rem]">
        <SidebarMenu />
      </div>
      <div className="base-layout-2 flex flex-col w-full">
        <div className="flex justify-between w-full px-[1.5rem] py-[2.5rem]">
          <div
            className=" lg:hidden flex items-center justify-center w-[50px] h-[50px] p-[0.5rem] lg:p-[1rem]"
            onClick={toggleMenu}
          >
            <Image
              src="/hamburger.svg" 
              alt="Description of the image"
              width={100} 
              height={100}
              className=""
            />
          </div>
          <div className="caption text-[1.125rem] font-montserrat font-bold">
            Student
          </div>
          <button
            className="add-button  w-24 h-10 p-2 md:p-1.5 lg:p-2 xl:p-3 2xl:p-4 hover:bg-blue-500"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src="/plusicon.svg"  
              alt="Description"
              width={20} 
              height={20}
              className="invert"
            />
            <span className="font-normal">Add</span>
          </button>
        </div>
        <div className="table-container w-full rounded-md  flex items-center justify-center px-[1.5rem]">
          <div className="table-cont rouned-[10px] border border-[#00000] overflow-auto rounded-[10px] w-full h-full lg:h-[53rem]">
            <Table
              rows={rowsData}
              deleteRow={handleDeleteRow}
              editRow={handleEditRow}
            />
          </div>
        </div>
        {modalOpen && (
          <Modal
            rowArr={rowsData}
            closeModal={() => {
              setModalOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={(newRow) => handleSubmit(newRow, "edit")}
            defaultValue={rowToEdit !== null && rowsData[rowToEdit]}
          />
        )}

        {modalDeleteOpen && (
          <DeleteModal
            closeModal={() => setDeleteModalOpen(false)}
            deleteRow = {handleDeleteRow}
            onSubmit={() => handleSubmit(null, "delete")}
            rows={rowsData}
            rowToDelete={rowToDelete}
          />
        )}
      </div>
    </div>
  );
}

export default App;
