// rowsData.js

let rows = [
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
    score: "2",
    grade: "A",
  },
  {
    no: "4",
    name: "jkl",
    class: "5",
    result: "Fail",
    score: "6",
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



// rowsData.js

const addRow = (newRow) => {
  // console.log(newRow)
  rows = [...rows, newRow];
};
console.log(rows)
export { rows, addRow };
