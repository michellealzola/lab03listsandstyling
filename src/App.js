import './App.css';
import TeacherList from './components/TeacherList';
import './appStyles.css'
import styles from './appStyles.module.css'


function App() {
  return (
    <div className="container">
      <h1>List of Instructors:</h1>      
      <TeacherList />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
