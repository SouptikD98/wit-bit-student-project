import React from "react";
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const Table = ({ rows }) => {
  return (
    <div className="flex items-center justify-center w-full xl:w-[69rem]">
      <table className="rounded-[10px] w-full font-montserrat overflow-hidden">
        <thead className="bg-[#F1F4F8]">
          <tr>
            <th className="py-[8px] px-[16px]">No.</th>
            <th className="py-[8px] px-[16px]">Name</th>
            <th className="py-[8px] px-[16px]">Class</th>
            <th className="py-[8px] px-[16px]">Result</th>
            <th className="py-[8px] px-[16px]">Score</th>
            <th className="py-[8px] px-[16px]">Grade</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr key={index} className="text-center hover:bg-[#F1F4F8]">
                <td className="py-[1rem] px-[1.5rem]">{row.no}</td>
                <td className="py-[1rem] px-[1.5rem]">{row.name}</td>
                <td className="py-[1rem] px-[1.5rem]">{row.class}</td>
                <td className="py-[1rem] px-[1.5rem]">{row.result}</td>
                <td className="py-[1rem] px-[1.5rem]">{row.score}</td>
                <td className="py-[1rem] px-[1.5rem]">{row.grade}</td>
                <td className="py-[1rem] px-[1.5rem]">
                  <span>
                    <BsFillTrashFill />
                  </span>
                </td>
                <td className="py-[1rem] px-[1.5rem]">
                  <span>
                    <BsFillPencilFill />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
