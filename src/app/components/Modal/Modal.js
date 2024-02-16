import React from "react";
import "./Modal.css";

export const Modal = ( { closeModal } ) => {
  return (
    <div className="relative w-full">
      <div className="flex w-full justify-center items-center font-montserrat text-[0.75remrem] font-normal gap-[0.75rem]">
        <div className="modal-bg-cotainer w-full text-[#7F878A] bg-black bg-opacity-50 fixed top-0 right-0 left-0 bottom-0">
          <div className="modal-container absolute top-0 right-0 rounded-[1.25rem] font-normal bg-white w-full h-full max-w-[30rem] max-h-[37.75rem] p-[1.5rem]">
            <div className="modal-heading-container w-full font-montserrat font-bold text-[1.25rem] py-[1.25rem] text-black">
              Add Student
            </div>
            <div className="input-container w-full py-[1.25rem]">
              <div className="flex flex-col w-full gap-[1.5rem] mb-[1.5rem]">
                <div className="flex w-full flex-col items-start justify-center gap-[8px]">
                  <div className="text-[0.75rem] leading-none">
                    STUDENT NAME *
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="..."
                      className="w-full font-montserrat py-[0.625rem] px-[0.875rem]
                  border border-[#D2D8E2] rounded-[10px] z-[99]"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-[8px]">
                  <div className="text-[0.75rem] leading-none">
                    STUDENT NAME *
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="..."
                      className="w-full font-montserrat py-[0.625rem] px-[0.875rem]
                  border border-[#D2D8E2] rounded-[10px] z-[99]"
                    />
                    <span className="italic">
                      Please input values between 1 & 12
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-[8px]">
                  <div className="text-[0.75rem] leading-none">
                    STUDENT NAME *
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="..."
                      className="w-full font-montserrat py-[0.625rem] px-[0.875rem]
                  border border-[#D2D8E2] rounded-[10px] z-[99]"
                    />
                    <span className="italic">
                      Please input values between 0 & 100
                    </span>
                  </div>
                </div>
              </div>
              <div className="calc-result mb-[1.65rem]">
                <div className="result-container  flex flex-col font-montserrat text-[0.75rem] font-normal gap-[8px]">
                  <div className="result-box">RESULT</div>
                  <div>{"hello world"}</div>
                  <div className="grade-box">GRADE</div>
                  <div>{"hello world"}</div>
                </div>
              </div>
            </div>
            <div className="modal-btn-container flex items-center justify-end gap-[1.25rem] border-t border-[#D2D8E2] py-[1rem]">
              <button
                onClick={ closeModal }
                class="bg-white hover:bg-slate-300 text-[#2CA4D8] border border-[#2CA4D8] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                CANCEL
              </button>
              <button
                class="bg-[#2CA4D8] hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                CONFIRM
              </button>
            </div>
          </div>
          <div className="modal-foot-note absolute bottom-0 right-28 text-white">
            Result and Grade will be auto-generated.
          </div>
        </div>
      </div>
    </div>
  );
};
