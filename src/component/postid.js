import React,{Component} from "react"
import PostService from "../service/post.service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment,faFilePen,faTrashCan} from '@fortawesome/free-solid-svg-icons'


export  default class PostId extends Component{
          
    constructor (props) {
        super(props)
        this.getPost = this.getPost.bind(this)
        this.state = { 
          post:[],
            comment : [],
            id:[],
            admin:[]
        }
    }
    
    componentDidMount () {
      this.getPost()
    }
    getPost() {
      let baseURL = (window.location).href;
      let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
      this.setState({id:id})
      PostService.getOnePost({id:id}).then((res) => {
         this.setState({post:res.data})
         console.log(this.state);
     })
     PostService.getAOneComment({id:id}).then((res) => {
      this.setState({comment:res.data})
  })
  
  }
    modify (user){
      
        const storage = parseInt(localStorage.getItem("userId"));
       
         if ( user===storage || localStorage.getItem("isAdmin")==="1") { 
      
      window.location.pathname = `post/:id/modify/${this.state.id}`
          
         }
         else {
           alert("Vous n'etes pas l'auteur de ce post et ne pouvez pas le modifier !!!")
         }
    }
    getIdParams  (){
     let baseURL = (window.location).href;
     let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
     alert(id.lastIndexOf('='))
     return{
    }}
  
    delete = (user) => {
      
     const storage = parseInt(localStorage.getItem("userId"));
    
      if ( user===storage || localStorage.getItem("isAdmin")==="1") {
        
        if (window.confirm("Voulez vous supprimer ce post")===true) {
          let baseURL = (window.location).href;
          let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
               PostService.deletePost({id:id}).then((res)=> {console.log(res)})
                  window.location.pathname= 'post'
        }
   
      }
      else {
        alert("Vous n'etes pas l'auteur de ce post et n'avez pas les droits   !!!")
      }
      
          
   }
   deleteCom = (id,UsersCom) => {
    const storage = parseInt(localStorage.getItem("userId"));
    let baseURL = (window.location).href;
    let postId = baseURL.substring(baseURL.lastIndexOf('=')+1)
      if (UsersCom===storage || localStorage.getItem("isAdmin")==="1" ) {
        if (window.confirm("Voulez vous supprimer ce commentaire")===true) {
          PostService.deleteCom({id:id}).then((res)=> {console.log(res)}) 
          window.location.pathname = `post/:id=${postId}`
        }

      }else{
        alert("Vous n'etes pas l'auteur de ce post et n'avez pas les droits   !!!")
      }
                //  window.location.pathname= 'post'
       
     
         
  }
    redirect = () => {
      let baseURL = (window.location).href;
     let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
      window.location.pathname = `comment/id=${id}`
    }
    render() {
      const comments= this.state.comment;
      const post = this.state.post
      console.log(comments);
      return (
       <div className='Signup' style={{minHeight:"700px"}}> 

          {post.map((post)=> (<div className='Postdiv' key={post.id} >
            <div style={{display:"flex",justifyContent:"space-between",margin:"12px"}}>
          <FontAwesomeIcon onClick={()=>this.delete(post.Users_id) } icon={faTrashCan}  style={{height:"4vh",color:"red",}}></FontAwesomeIcon>
          <FontAwesomeIcon onClick={() => this.modify(post.Users_id)} icon={faFilePen} style={{height:"4vh",color:"rgb(97, 118, 251)",}}></FontAwesomeIcon></div>
                   <h2 className='Titre' >{post.title} </h2>
                   <p className='content' >{post.message}  content</p>
                   <img alt="phot" src={post.image_url} ></img>
                   <p className='content' >{post.Users_id} : userId</p>
                   <p className='date' > {post.post_date}</p>
                   
                   </div>))}
               
               
           <FontAwesomeIcon onClick={this.redirect} icon={faComment} style={{height:"5vh",color:"rgb(0,255,127)"}}></FontAwesomeIcon>
           {comments && comments.map((comment ) =>
               ( <div className='PostComm' key={comment.id}>
                 <div><FontAwesomeIcon onClick={()=>this.deleteCom(comment.id,comment.UsersCom)} icon={faTrashCan}  style={{height:"5vh",color:"red",margin:"3px"}}></FontAwesomeIcon></div>
                   <h2 className='Titre' >Titre : {comment.title}</h2>
                   <p > {comment.id}</p>
                   <p > {comment.content}</p>
                   <img alt="photoCom" src={comment.image_url}></img>
                   <p > {comment.UsersCom}</p>
                   </div>)
                
           )}
        </div>
      );
    }
  }
   
   