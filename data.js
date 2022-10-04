let students = [
    {
      name: "nawal",
      numberID: 181005,
      coursename: "Web",
      couresid:2,
      reg: "true",
    },
    {
      name: "sondos",
      numberID: 181006,
      coursename: "Flutter",
      couresid:1,
      reg: "true",
    },
    {
      name: "sireen",
      numberID: 181007,
      coursename: "nodeJS",
      couresid:3,
      reg: "false",
    },
    {
      name: "Duaa",
      numberID: 181008,
      coursename: "nodeJS",
      couresid:3,
      reg: "true",
    },
    {
      name: "wafia",
      numberID: 181009,
      coursename: "Web",
      couresid:2,
      reg: "false",
    },
  ];
  
  export function getStudents() {
    return students;
  }

  export function getStrudent(numberID) {
    return students.find(
      (student) => student.numberID === numberID
    );
  }
  export function getCourses(courseid) {
    return students.find(
      (course) => course.couresid === courseid
    );
  }

  export function getCoursesTrue(courseid) {
    return students.find(
      (course) => course.couresid === courseid  && course.reg ==="true" 
    );

  }