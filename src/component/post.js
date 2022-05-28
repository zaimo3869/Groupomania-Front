
import React,{Component} from 'react';
import PostService from "../service/post.service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUser } from '@fortawesome/free-solid-svg-icons'



export default class Post extends Component{
  redirectToken = () =>{

    const token = document.cookie
    .split(";")
    .map(cookie => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    );

    if(!token){
      window.location.path= '/login'
    }
  }
  constructor (props) {
    super(props)
    this.getPosts = this.getPosts.bind(this)
    this.redirect= this.redirect.bind(this)
    this.state = { 
        posts : [],
        id:[],
        visible: false
    }
    
}
montre = ()  => {
  this.setState({visible: true})
}
  componentDidMount () {
    this.getPosts()
    this.montre()
}

  getPosts () {
   
    PostService.getAllPost().then((res) => {
       this.setState({posts:res.data})
   }).catch(error => {
       console.log(error);
   })
}


  redirect = (postid) => {
  window.location.pathname = `post/:id/id=${postid}`
 
}

redirectUser = (user) => {
  window.location.pathname = `profile/*id=${user}`
}

upload = () =>{
  window.location.pathname = "/upload"
}
comment = () =>{
   
    PostService.getOnePost().then((res) => { console.log(res);
   }).catch(error => {
       console.log(error);
   })

  // window.location.pathname = "/post/:id"
}

  render(){
    const posts = this.state.posts;
    return(
    
      <div className='postDislay'>
          
        {/* <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> */}
 <div className='Signup'>
 <h1>Les posts !</h1>
 <FontAwesomeIcon icon={faMessage} style={{
   height:"8vh",
   position:"fixed",
   color: "rgb(205, 29, 29)",
   marginLeft:"40%",
   marginTop: "10px"
 }} 
 onClick={this.upload}> Create post</FontAwesomeIcon> 
       { posts.map((post)=>
       
            
              
                <div className='Postdiv' key={post.id} >
                  <article>
              <div value={post.id} onClick={() => this.redirect(post.id)}> 
           <h2 className='Titre' > {post.title}</h2>
           <p className='name' > postId:{ post.id}</p>
           <p className='content' > {post.message}</p>
           <img  style={{ height: "100%", width: "97%"}} alt='img' src={post.image_url}></img>
           <p className='Titre' > {post.post_date}</p>
           {/* <button onClick={this.delete}>Commenter</button> */}
          
         </div>
           <p>user { post.Users_id} <FontAwesomeIcon onClick={()=>this.redirectUser(post.Users_id)} icon={faUser}></FontAwesomeIcon></p>
           </article>
           </div> 
              
            )
         } 
             </div>
      </div>
     
   )
}
}

