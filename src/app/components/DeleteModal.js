import React from "react";

export const DeleteModal = ({ closeModal, onSubmit, rows, rowToDelete }) => {

  const handleSubmit = () => {
    // Perform the deletion action using onSubmit prop
    onSubmit(rowToDelete);
    // Close the modal
    closeModal();
  };

  return (
    <div className="relative w-full">
      <div className="flex w-full justify-center items-center font-montserrat text-[0.75remrem] font-normal gap-[0.75rem]">
        <div className="modal-bg-cotainer w-full text-[#7F878A] bg-black bg-opacity-50 fixed top-0 right-0 left-0 bottom-0">
          <div className="modal-container absolute top-0 right-0 rounded-[1.25rem] font-normal bg-white w-full h-full max-w-[30rem] max-h-[40rem] p-[1.5rem]">
            <div className="modal-btn-container flex items-center justify-end gap-[1.25rem] border-t border-[#D2D8E2] py-[1rem]">
              <button
                onClick={handleSubmit}
                className="bg-white hover:bg-slate-300 text-[#2CA4D8] border border-[#2CA4D8] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                CANCEL
              </button>
              <button
                className="bg-[#2CA4D8] hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={closeModal}
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
