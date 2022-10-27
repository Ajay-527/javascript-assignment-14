let employees = [
  {
    id: 1,
    name: "Abhinav",
    department: "IT",
    Salary: 75000,
  },
  {
    id: 2,
    name: "Gaurav",
    department: "Sales",
    Salary: 52000,
  },
  {
    id: 3,
    name: "Raj",
    department: "IT",
    Salary: 64000,
  },
];

console.log("Filter employees according to department = IT");
employees.filter((data) => {
  if (data.department === "IT") {
    console.log(data);
  }
});
console.log("Filter employees who earn a salary < 65000");
employees.filter((data) => {
  if (65000 > data.Salary) {
    console.log(data);
  }
});
