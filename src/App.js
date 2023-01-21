import './App.css';
import Home from './Pages/Home/Home';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Header from './component/Header';
import NewBlog from './Pages/NewBlog/NewBlog';
import BlogPost from './Pages/BlogPost/BlogPost';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Header eqaimBlog={"Eqaim Blog"} />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/newblog" element={<NewBlog/>}/>
      <Route path="/blogPost" element={<BlogPost/>}/>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
