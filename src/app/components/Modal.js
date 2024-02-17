import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, rowArr, defaultValue }) => {
  const [formState, setFormState] = useState(defaultValue || {
    no: "",
    name: "",
    class: "",
    result: "",
    score: "",
    grade: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newNo;
    if (name === "score") {
      const result = Number(value) > 39 ? "Pass" : "Failed";
      const grade =
        Number(value) >= 76
          ? "Excellent"
          : Number(value) > 31 && Number(value) <= 75
          ? "Average"
          : "Poor";
      newNo = rowArr.length + 1;
      setFormState({ ...formState, result, grade, [name]: value, no: newNo });
    } else {
      newNo = rowArr.length + 1;
      setFormState({ ...formState, [name]: value, no: newNo });
    }
  };
  const validateForm = () => {
    if (formState.score && formState.name && formState.class) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value && (key == "name" || key == "class" || key == "score")) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      console.log(errors);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    if (!validateForm()) return;
    onSubmit(formState);
    closeModal();
  };

  const [errors, setErrors] = useState("");
  // let condition = formState.score > 39 ? "text-green" : "text-red";

  return (
    <div className="relative w-full">
      <div className="flex w-full justify-center items-center font-montserrat text-[0.75remrem] font-normal gap-[0.75rem]">
        <div className="modal-bg-cotainer w-full text-[#7F878A] bg-black bg-opacity-50 fixed top-0 right-0 left-0 bottom-0">
          <div className="modal-container absolute top-0 right-0 rounded-[1.25rem] font-normal bg-white w-full h-full max-w-[30rem] max-h-[40rem] p-[1.5rem]">
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
                      name="name"
                      type="text"
                      placeholder="..."
                      className="w-full font-montserrat py-[0.625rem] px-[0.875rem]
                  border border-[#D2D8E2] rounded-[10px] z-[99]"
                      onChange={handleChange}
                      value={formState.name}
                    />
                    <span className="italic">
                      {errors && errors.includes("name") && (
                        <div className="text-red-500">{`Error: Name field cannot be left blank`}</div>
                      )}
                      {!errors && (
                        <div className="italic">{` Please input values between 1 & 12`}</div>
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-[8px]">
                  <div className="text-[0.75rem] leading-none">CLASS *</div>
                  <div className="w-full">
                    <input
                      name="class"
                      type="text"
                      placeholder="..."
                      className="w-full font-montserrat py-[0.625rem] px-[0.875rem]
                  border border-[#D2D8E2] rounded-[10px] z-[99]"
                      onChange={handleChange}
                      value={formState.class}
                    />
                    <span className="italic">
                      {errors && errors.includes("class") && (
                        <div className="text-red-500">{`Error: Name field cannot be left blank`}</div>
                      )}
                      {!errors && (
                        <div className="italic">{` Please input values between 1 & 12`}</div>
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-[8px]">
                  <div className="text-[0.75rem] leading-none">SCORE *</div>
                  <div className="w-full">
                    <input
                      name="score"
                      type="text"
                      placeholder="..."
                      className="w-full font-montserrat py-[0.625rem] px-[0.875rem]
                  border border-[#D2D8E2] rounded-[10px] z-[99]"
                      onChange={handleChange}
                      value={formState.score}
                    />
                    <span className="italic">
                      {errors && errors.includes("score") && (
                        <div className="text-red-500">{`Error: Name field cannot be left blank`}</div>
                      )}
                      {!errors && (
                        <div className="italic">{` Please input values between 1 & 12`}</div>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="calc-result mb-[1rem]">
                <div className="result-container  flex flex-col font-montserrat text-[0.75rem] font-normal gap-[8px]">
                  <div className="result-box">RESULT</div>
                  <div
                     className={`text-white w-[3.85rem] p-[0.5rem] rounded-[1rem] ${
                      (formState.score == '') ? '' : (formState.score > 39 ) ? "bg-green-500" : "bg-red-500"
                      }`}
                  >
                    {formState.result}
                  </div>

                  <div className="grade-box">GRADE</div>
                  <div className={`w-[3rem] font-bold p-[0.5rem] rounded-[1rem] ${
                        (formState.score == '') ? 'text-white' : (formState.score > 39 ) ? "text-green-500" : "text-red-500"
                      }`}
                  >
                    {formState.grade}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-btn-container flex items-center justify-end gap-[1.25rem] border-t border-[#D2D8E2] py-[1rem]">
              <button
                onClick={closeModal}
                class="bg-white hover:bg-slate-300 text-[#2CA4D8] border border-[#2CA4D8] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                CANCEL
              </button>
              <button
                class="bg-[#2CA4D8] hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSubmit}
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