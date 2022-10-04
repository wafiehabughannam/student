import { Link } from "react-router-dom";
import {  getStudents } from "./data";

export default function ListStudents() {
  let students = getStudents();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {students.map((student) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/students/${student.numberID}`}
            key={student.numberID}
          >
            {student.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
