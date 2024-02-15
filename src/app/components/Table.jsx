import React from "react";
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs"


export const Table = () => {
  return (
    <div className="flex items-center justify-center">

      <table class="w-full max-w-[69rem] h-full max-h-[54rem] rounded-[10px] overflow-hidden font-montserrat">
        <thead class="w-full">
          <tr className="w-full bg-orange-400 border-solid border-b-[1rem] border-[#E4E8EE]">
            <th>No.</th>
            <th>Name</th>
            <th>Class</th>
            <th>Result</th> 
            <th>Score</th>
            <th>Grade</th>
            <th></th>
            <th></th>
          </tr>
          <tr className="w-full text-center border-black border-9 border-collapse">
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
          <tr className="w-full text-center">
            <td>1</td>  
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
          <tr className="w-full text-center">
            <td>1</td>  
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
          <tr className="w-full text-center">
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
        </thead>
      </table>
    </div>
  );
};
