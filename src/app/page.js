"use client"; // This is a client component
// App.js

import { useState } from "react";
import "./page.css";
import Image from "next/image";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import { rows } from './data/rowsData.js';
import { addRow } from "./data/rowsData.js";


function App() {
  const id = 1;
  const [modalOpen, setModalOpen] = useState(false);
  const [rowsData, setRowsData] = useState(rows); // Using the imported rows data

  const handleDeleteRow = (targetIndex) => {
    setRowsData(rowsData.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    // rowToEdit === null
    //   ? setRows([...rows, newRow])
    //   : setRows(
    //       rows.map((currRow, idx) => {
    //         if (idx !== rowToEdit) return currRow;

    //         return newRow;
    //       })
    //     );
    setRowsData([...rows, newRow]);
    addRow(newRow);
  };

  return (
    <div className="total-container w-full flex">
      <div className="base-layout-1 flex w-full max-w-[18rem] h-screen"></div>
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
            <Table rows={rowsData} deleteRow={handleDeleteRow} />
          </div>
        </div>
        {modalOpen && <Modal closeModal={() => setModalOpen(false)} onSubmit ={handleSubmit} />}
      </div>
    </div>
  );
}

export default App;
