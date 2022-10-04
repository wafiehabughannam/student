import { Link, Outlet } from "react-router-dom";
import {  getStudents } from "./data";

export default function Courses() {
  let students = getStudents();
  const uniqueIds = [];

  const uniqueCourses= students.filter(student => {
    const isDuplicate = uniqueIds.includes(student.couresid);

    if (!isDuplicate) {
      uniqueIds.push(student.couresid);

      return true;
    }

    return false;
  });
    return (
      <main style={{ padding: "1rem 0" }}>
   

    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {uniqueCourses.map((student) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/courses_wuth_param/${student.couresid}`}
            key={student.couresid}
          >
            {student.coursename}
          </Link>
        ))}
      </nav>
      <Outlet/>
    </div>
      </main>
    );
  }



