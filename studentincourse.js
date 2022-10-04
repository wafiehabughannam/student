import { useParams} from "react-router-dom";
import {getCoursesTrue } from "./data";

export default function StudentINCourse() {
  let params = useParams();
  let studentincourse = getCoursesTrue(parseInt(params.studentincourseid, 10));

  


//   function uniqueCourses (name){

//     if (studentincourse.reg === "ture") {
     
//       return name;
//     }

//     return "false";
// };

if(studentincourse === undefined)
{
return( <main style={{ padding: "1rem" }}>
<h2> no student registration in this course</h2>
</main>);
} else{

  return (
    <div>
      {/* 👇️ iterate object KEYS */}
      {Object.keys(studentincourse).map((key) => {
        return (
          <div key={key}>
            <h2>
              {key}: {studentincourse[key]}
            </h2>
              {studentincourse[key]}
            
            <hr />
          </div>
        );

      })}
    
      {/* {Object.keys(studentincourse).map((key) => {
         return (
           <div key={key}>
              <h1>{key}</h1>
              {studentincourse.name[key].map((dataItem) => {
                return (
                 <span key={dataItem}>{dataItem}</span>
                )
               })}
           </div>
         )
       })} */}

      </div>
  )
    }
  }