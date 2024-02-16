import React from "react";
import "./Table.css"
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const Table = () => {
  return (
    <div className="flex items-center justify-center">
      <table className="w-full max-w-[69rem] h-full max-h-[54rem] rounded-[10px] font-montserrat border border-slate-400">
        <thead className="bg-[#F1F4F8]">
          <tr className="border border-black border-9">
            <th>No.</th>
            <th>Name</th>
            <th>Class</th>
            <th>Result</th>
            <th>Score</th>
            <th>Grade</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-black border-9 text-center hover:bg-[#F1F4F8]">
            <td>1</td>
            <td>Lorem Ipsum</td>
            <td>5th</td>
            <td>Passed</td>
            <td>1</td>
            <td>1</td>
            <td>
              <span>
                <BsFillTrashFill />
              </span>
            </td>
            <td>
              <span>
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr className="border border-black text-center hover:bg-[#F1F4F8]">
            <td>2</td>
            <td>Lorem Ipsum</td>
            <td>5th</td>
            <td>Failed</td>
            <td>1</td>
            <td>1</td>
            <td>
              <span>
                <BsFillTrashFill />
              </span>
            </td>
            <td>
              <span>
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
