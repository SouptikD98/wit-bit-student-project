import React from "react";

export const DeleteModal = ({
  closeModal,
  onSubmit,
  deleteRow,
  rows,
  rowToDelete,
}) => {
  const handleSubmit = (e) => {
    console.log("hello wro");
    e.preventDefault();
    // Perform the deletion action using onSubmit prop
    onSubmit(rowToDelete);
    // Close the modal
    // setRowsData(rows.filter((_, idx) => idx !== targetIndex));
    closeModal();
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-center items-center font-montserrat text-[0.75remrem] font-normal gap-[0.75rem]">
        <div className="modal-bg-cotainer w-full text-[#7F878A] bg-black bg-opacity-50 fixed top-0 right-0 left-0 bottom-0">
          <div className="modal-container absolute top-0 right-0 md:translate-x-[-50%] xl:translate-x-[-100%] translate-y-40 md:translate-y-20  rounded-[1.25rem] font-normal bg-white w-full h-full max-w-[30rem] max-h-[24.125rem] p-[1.5rem]">
            <div className="font-bold text-[1.125rem] text-black pb-[1.5rem] border-b border-slate-400">
            Remove student
            </div>
            <div className="font-bold text-[1rem] text-black pt-[1.5rem]">
              Are you sure you want to remove the current student from the list?
            </div>
            <div className="text-[12px] text-[#7F878A] pt-[1rem]">STUDENT NAME</div>
            <div>{rows[rowToDelete].name}</div>
            <div className="text-[12px] text-[#7F878A] pt-[1rem]">CLASS</div>
            <div>{rows[rowToDelete].class}</div>
            <div className="modal-btn-container flex items-center justify-end gap-[1.25rem] py-[1rem]">
              <button
                onClick={closeModal}
                className="bg-white hover:bg-slate-300 text-[#2CA4D8] border border-[#2CA4D8] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                CANCEL
              </button>
              <button
                className="bg-[#F24643] hover:bg-red-800 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                REMOVE
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
