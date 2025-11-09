/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Create one Teacher object
const cTeacher: Subjects.Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10
  };
  
  const cpp = new Subjects.Cpp();
  const java = new Subjects.Java();
  const react = new Subjects.React();
  
  // ---- C++ ----
  console.log('C++');
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());
  
  // ---- Java ----
  console.log('Java');
  java.setTeacher(cTeacher);              
  console.log(java.getRequirements());    
  console.log(java.getAvailableTeacher());
  
  // ---- React ----
  console.log('React');
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
  