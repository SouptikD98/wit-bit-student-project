import React from "react";
import "./Modal.css";

export const Modal = () => {
  return (
    <div className="relative w-full">
      <div className="flex w-full justify-center items-center font-montserrat text-[0.75remrem] font-normal gap-[0.75rem]">
        <div className="modal-bg-cotainer w-full bg-black bg-opacity-50 fixed top-0 right-0 left-0 bottom-0">
          <div className="modal-container absolute top-0 right-0 rounded-[1.25rem] font-normal bg-white w-full h-full max-w-[30rem] max-h-[37.75rem] p-[1.5rem]">
            <div className="modal-heading-container font-montserrat font-bold text-[1.25rem] py-[1.25rem]">Add Student</div>
            <div className="input-container py-[1.25rem]">
              <div className="flex flex-col items-start justify-center gap-[8px]">
                <div className="text-[0.75rem] leading-none">STUDENT NAME *</div>
                <div className="">
                  <input type="text" placeholder="..." className="font-montserrat py-[0.625rem] px-[0.875rem]
                  border border-black rounded-[10px] z-[99]" />
                </div>
                <div className="result-container  flex flex-col font-montserrat text-[0.75rem] font-normal gap-[8px]">
                  <div className="result-box">RESULT</div>
                  <div>{"hello world"}</div>
                  <div className="grade-box">GRADE</div>
                  <div>{"hello world"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
