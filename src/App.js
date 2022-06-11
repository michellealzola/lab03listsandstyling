import './App.css';
import TeacherList from './components/TeacherList';
import StyleSheet from './components/StyleSheet';


function App() {
  return (
    <div className="container">
      <h1>List of Instructors:</h1>      
      <TeacherList />
      <StyleSheet primary={true}/>
    </div>
  );
}

export default App;
