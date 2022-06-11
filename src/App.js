import './App.css';
import TeacherList from './components/TeacherList';
import Inline from './components/Inline';


function App() {
  return (
    <div className="container">
      <h1>List of Instructors:</h1>      
      <TeacherList />
      <Inline/>
    </div>
  );
}

export default App;
