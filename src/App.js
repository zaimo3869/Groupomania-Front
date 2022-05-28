
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Signup from "./component/signup";
import Login from "./component/login"
import Nav from "../src/component/nav";
import Post from "../src/component/post";
import Profile from "../src/component/profile";
import {Routes, Route} from 'react-router-dom';
import Comment from "../src/component/comment"
import Upload from "../src/component/upload"
import PostId from "../src/component/postid"
import ModifyPost from './component/modifyPost';

function App() {

  return (
    <BrowserRouter>
        <Nav />
       <Routes>
       <Route path="/" exact element={<Signup/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/post" element={<Post/>}></Route>
       <Route path="/post/:id/*" element={<PostId/>}></Route>
       <Route path="/post/:id/modify/*" element={<ModifyPost/>}></Route>
       <Route path="/comment/*" element={<Comment/>}></Route>
       <Route path="/profile/*" element={<Profile/>}></Route>
       <Route path="/upload/*" element={<Upload/>}></Route>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
