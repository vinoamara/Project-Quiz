
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MyQuiz from './Components/MyQuiz';
import{Routes,Route} from 'react-router-dom';
const linksArray=["Home","MyQuiz"]
function App() { 
  return (
   <>

    <Navbar links={linksArray}/>
   
  
    <Routes>
     <Route exact path="/"elements ={<Home/>}/>
      <Route exact path="/Home"elements ={<Home/>}/>
      <Route exact path="/MyQuiz"elements ={<MyQuiz/>}/>
    </Routes>
 </>
  );
}

export default App;
