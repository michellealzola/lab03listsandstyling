import './App.css';
import SpringStatus from './components/SpringStatus';
import TeacherList from './components/TeacherList';

function App() {
  return (
    <div class="container">
      <h1>List of Instructors</h1>
      <SpringStatus />
      <TeacherList />
    </div>
  );
}

export default App;
