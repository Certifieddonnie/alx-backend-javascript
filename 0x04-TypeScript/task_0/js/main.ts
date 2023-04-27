// Creating an interface for a student with vanilla js in it

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "McDonald",
  lastName: "Amure",
  age: 30,
  location: "Nigeria"
}

const student2: Student = {
  firstName: "Adenipekun",
  lastName: "Amure",
  age: 25,
  location: "South Korea"
}

const studentsList = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "green";
table.appendChild(tbody);

// new row for each student
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const fname = document.createElement('td');
  const location = document.createElement('td');

  fname.textContent = student.firstName;
  location.textContent = student.location;

  fname.style.border = "1px solid black";
  location.style.border = "1px solid black";
  fname.style.padding = "5px";
  location.style.padding = "5px";

  row.appendChild(fname);
  row.appendChild(location);
  tbody.appendChild(row);
});

document.body.appendChild(table);
