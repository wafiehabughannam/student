

import { Outlet,Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    <h1>Students App</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/students">Student List</Link> |{" "}
      <Link to="/courses_wuth_param">courses List</Link> |{" "}
      <Link to="/students_with_param">Students with param</Link>|{" "}
      <Link to="/students_search_param">Students Search Param</Link>

    </nav>
    
    
    <Outlet />
  </div>
  );
}

export default App;