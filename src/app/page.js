"use client"; // This is a client component

import { useState } from "react";

import "./page.css";
import Image from "next/image";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const rows = [
    {
      no: "1",
      name: "asd",
      class: "2",
      result: "Pass",
      score: "89",
      grade: "A",
    },
    {
      no: "2",
      name: "def",
      class: "3",
      result: "Fail",
      score: "75",
      grade: "B",
    },
    {
      no: "3",
      name: "ghi",
      class: "4",
      result: "Pass",
      score: "92",
      grade: "A",
    },
    {
      no: "4",
      name: "jkl",
      class: "5",
      result: "Fail",
      score: "68",
      grade: "C",
    },
    {
      no: "5",
      name: "mno",
      class: "6",
      result: "Pass",
      score: "85",
      grade: "B",
    },
  ];

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
            Add
          </button>
        </div>
        <div className="table-container w-full overflow-hidden rounded-md  flex items-center justify-center">
          <div className="table-cont rouned-[10px] border border-[#00000] rounded-[10px] w-fit h-[53rem]">
            <Table rows={rows} />
          </div>
        </div>
        {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
      </div>
    </div>
  );
}

export default App;
