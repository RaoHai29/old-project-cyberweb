
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
       <Navbar />
        <Main />
        <Courses />
    </div>
  );
}

export default App;
