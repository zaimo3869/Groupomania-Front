
import React,{Component} from 'react';
import postService from '../service/post.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'

export default class Profile extends Component {
    
    constructor (props) {
        super(props)
        this.getAllUser = this.getAllUser.bind(this)
        this.state = { 
            users : []
        }
    }
    
    componentDidMount () {
      this.getAllUser()
  }
    getAllUser () {
      let baseURL = (window.location).href;
      let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
        postService.getOneUser({id:id}).then((res) => {
           this.setState({users:res.data})
       }).catch(error => {
           console.log(error);
       })
    }
  
   delete = () => {
    const storage = localStorage.getItem("userId");
    let baseURL = (window.location).href;
    let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
    console.log(Object.values({storage}));
    console.log(Object.values(id));
    
    if ( id === storage || localStorage.getItem("isAdmin")==="1") { 
      
      let baseURL = (window.location).href;
      let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
      console.log(id);
  postService.deleteUser({id:id}).then((res=> {
    console.log(res);
  }))
     window.location.pathname = '/Post'
    }
    else {
      alert("Vous n'etes pas l'auteur de ce post et ne pouvez pas le modifier !!!")
    }
  
   }
   
    
    render() {
        const posts= this.state.users
      return (
      <div className="Profile">  <h1 >palala</h1>
      {
                posts && posts.map((post ) => 
                   (    <div className='profile_info' key={post.id}>
                   <div className='profile_info_div' >
                   <div className='profile_info_p'>Photo :----------------- </div>
                   <div className='profile_info_p'>Nom : {post.name}
                     </div>
                   <div className='profile_info_p'>Prenom :{post.prenom}
                     </div>
                   <div className='profile_info_p'>Email :{post.email}
                     </div>
                   <div className='profile_info_p'>Admin :{post.isAdmin} </div>
                   </div>
                   <FontAwesomeIcon onClick={()=>this.delete() } icon={faTrashCan}  style={{height:"5vh",color:"red",}}></FontAwesomeIcon>
                   </div> )
                )
            } 
      
   
      </div>
      );
    }
  }