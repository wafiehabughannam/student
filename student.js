import { useParams } from "react-router-dom";
import { getStrudent } from "./data";

export default function Student() {
  let params = useParams();
  let student = getStrudent(parseInt(params.studentid, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Name: {student.name}</h2>
      <p>
        {student.name}: {student.numberID}
      </p>
      <p>course name: {student.coursename}</p>
      <p>regestiration state: {student.reg}</p>
    </main>
  );
}