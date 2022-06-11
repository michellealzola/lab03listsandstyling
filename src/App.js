import './App.css';
import TeacherList from './components/TeacherList';
import './appStyles.css'

function App() {
  return (
    <div className="container">
      <h1>List of Instructors:</h1>      
      <TeacherList />      
    </div>
  );
}

export default App;
