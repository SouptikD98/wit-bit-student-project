import React from "react";

import Image from "next/image";

import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full">
        <table className="rounded-[10px] w-full font-montserrat  overflow-hidden">
          <thead className="bg-[#F1F4F8] w-full">
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
            {rows?.map((row, index) => {
              // console.log(row)
              return (
                <tr
                  key={index}
                  className="text-center border-b  border-[#E4E8EE] hover:bg-slate-200"
                >
                  <td className="py-[1rem] px-[1.5rem]">{row.no}</td>
                  <td className="py-[1rem] px-[1.5rem]">{row.name}</td>
                  <td className="py-[1rem] px-[1.5rem]">{row.class}</td>
                  <td className="">
                    <span
                      className={`text-white py-[0.5rem] rounded-[1rem] px-[1.5rem] ${
                        row.score > 50 ? "bg-green-500" : "bg-red-500"
                      } w-[3.87rem]`}
                    >
                      {row.result}
                    </span>
                  </td>

                  <td className="py-[1rem] px-[1.5rem]">
                    <span
                      className={
                        row.score > 50 ? "text-green-500" : "text-red-500"
                      }
                    >
                      {row.score}
                    </span>
                  </td>

                  <td className="py-[1rem] px-[1.5rem]">
                    <span
                      className={`${
                        row.score > 50 ? "text-green-500" : "text-red-500"
                      } font-bold`}
                    >
                      {row.grade}
                    </span>
                  </td>
                  <td
                    className="lg:py-[1rem] lg:px-[1.5rem] hover:bg-red-300"
                    onClick={() => deleteRow(index)}
                  >
                    <Image
                      src="/delete.svg"
                      alt="Description of the image"
                      width={20}
                      height={20}
                      className=" group-hover:block"
                    />
                  </td>

                  <td className="py-[1rem] px-[1.5rem] hover:bg-blue-200"
                    onClick={() => editRow(index)}
                  >
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
    </div>
  );
};
