"use client"; // This is a client component
// App.js

import { useState } from "react";
import "./page.css";
import Image from "next/image";
import { Table } from "./components/Table"; 
import { Modal } from "./components/Modal";
import { DeleteModal } from "./components/DeleteModal"; 
import rows from './data/rowsData.js';
import { SidebarMenu } from "./components/SidebarMenu";
// import { addRow } from "./data/rowsData.js";



function App() {
  const id = 1;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setDeleteModalOpen] = useState(false);
  const [rowsData, setRowsData] = useState(rows); // Using the imported rows data
  const [rowToEdit, setRowToEdit] = useState(null);
  const [rowToDelete, setRowToDelete] = useState(null);

  // const handleDeleteRow = (targetIndex) => {
  //   setDeleteModalOpen(true);    
  //   if (true) {
  //     setRowsData(rowsData.filter((_, index) => index !== targetIndex));
  //   }
  // };
  const handleDeleteRow = (targetIndex) => {
    setDeleteModalOpen(true);
    setRowToDelete(targetIndex);
    setRowsData(rows.filter((_, idx) => idx !== targetIndex));
    
  };
  

  const handleEditRow = (index) => {
    setRowToEdit(index);

    setModalOpen(true);
  };

  const handleSubmit = (newRow, action) => {
    if (action === 'edit') {
      // Editing an existing row
      setRowsData(
        rowsData.map((currRow, index) => {
          if (index !== rowToEdit) return currRow;
          return { ...newRow, no: currRow.no };
        })
      );
      setRowToEdit(null); // Reset rowToEdit after editing
      setModalOpen(false); // Close the modal after submission
    } else if (action === 'delete') {
      
      () => handleDeleteRow();
      // Perform the deletion action
    } else {
      // Adding a new row
      setRowsData([...rowsData, newRow]);
      setModalOpen(false); // Close the modal after submission
    }
  };
  
  
  

  return (
    <div className="total-container w-full flex">
      <div className="base-layout-1 flex items-start justify-center w-full max-w-[18rem] h-screen px-[1rem] py-[2.5rem]">
        <SidebarMenu />
      </div>
      <div className="base-layout-2 flex flex-col w-full">
        <div className="flex justify-between w-full px-[1.5rem] py-[2.5rem]">
          <div className="caption text-[1.125rem] font-montserrat font-bold">
            Student
          </div>
          <button
            className="add-button  w-24 h-10 p-2 md:p-1.5 lg:p-2 xl:p-3 2xl:p-4"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src="/plusicon.svg" // Path to your image
              alt="Description of the image"
              width={20} // Desired height of the image
              height={20}
              className="invert"
            />
            <span className="font-normal">Add</span>
          </button>
        </div>
        <div className="table-container w-full overflow-hidden rounded-md  flex items-center justify-center px-[1.5rem]">
          <div className="table-cont rouned-[10px] border border-[#00000] rounded-[10px] w-full h-[53rem]">
            <Table rows={rowsData} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            
          </div>
        </div>
        {modalOpen && <Modal rowArr={rowsData} closeModal={() => { setModalOpen(false); setRowToEdit(null) }} onSubmit={(newRow) => handleSubmit(newRow, 'add')} defaultValue={rowToEdit !== null && rows[rowToEdit]} />}

        { modalDeleteOpen && <DeleteModal closeModal={() => setDeleteModalOpen(false)} onSubmit={() => handleSubmit(null, 'delete')} rows={rows} rowToDelete={rowToDelete}  />}
      </div>
    </div>
  );
}

export default App;
