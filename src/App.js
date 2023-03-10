import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import LandingPage from './Components/landing-page';
import HomePage from './Components/homePage';
import Posts from './Components/posts';
import Gallery from './Components/gallery';
import Todo from './Components/todo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='home' element={<HomePage/>} />
        <Route path="posts" element={<Posts/>} />
        <Route path="gallery" element={<Gallery/>} />
        <Route path="todo" element={<Todo/>} />
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
