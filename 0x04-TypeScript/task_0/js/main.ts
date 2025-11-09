// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Ama",
    lastName: "Mensah",
    age: 20,
    location: "Accra",
  };
  
  const student2: Student = {
    firstName: "Kofi",
    lastName: "Boateng",
    age: 22,
    location: "Kumasi",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement("table");
  table.border = "1";
  
  const headerRow = document.createElement("tr");
  const nameHeader = document.createElement("th");
  nameHeader.textContent = "First Name";
  const locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";
  
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(locationHeader);
   table.appendChild(headerRow);
  
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
  
    table.appendChild(row);
  });
  
  document.body.appendChild(table);
  