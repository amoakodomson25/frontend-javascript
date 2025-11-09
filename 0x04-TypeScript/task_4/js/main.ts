/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

namespace Subjects {
    // Create one Teacher object
    export const cTeacher: Teacher = {
      firstName: 'Guillaume',
      lastName: 'Salva',
      experienceTeachingC: 10
    };
  
    // Create constants for each subject
    export const cpp = new Cpp();
    export const java = new Java();
    export const react = new React();
  }
  
  // ---- Cpp ----
  console.log('C++');
  Subjects.cpp.setTeacher(Subjects.cTeacher);
  console.log(Subjects.cpp.getRequirements());
  console.log(Subjects.cpp.getAvailableTeacher());
  
  // ---- Java ----
  console.log('Java');
  Subjects.java.setTeacher(Subjects.cTeacher);
  console.log(Subjects.java.getRequirements());
  console.log(Subjects.java.getAvailableTeacher());
  
  // ---- React ----
  console.log('React');
  Subjects.react.setTeacher(Subjects.cTeacher);
  console.log(Subjects.react.getRequirements());
  console.log(Subjects.react.getAvailableTeacher());
  