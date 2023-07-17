import logo from './logo.svg';
import './App.css';
import Base from './Base/Base';
import Students from './Component/Students';
import { data } from './Data/data';
import { useState } from 'react';

function App() {
  const [students, setStudents] = useState(data);
 
// useEffect(()=>{
//   console.log(students)
// }, [])

  return (
    <div className="App">
      {<Students
    students = {students}
    setStudents = {setStudents}
    /> }
    </div>
  );
}

export default App;





