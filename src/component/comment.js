
import React,{Component} from 'react';
import PostService from '../service/post.service';

const initialState = {
    titre: "",
    name: "",
    photo:"",
    content: "",
    User_Id: "",
    nameError: ""
  };

  let testNumber = /^[a-zA-Z-\s]*$/;

export default class upload extends Component {
    state = initialState;
    
    handleChange = event => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
      });
    };
    handleChangeFile = event => {
      this.setState({ photo: event.target.files[0] });
    };
  
  
    validate = () => {
      let nameError = "";
  
      
      //============= Name ================
      if (!testNumber.test(this.state.name)|| this.state.name ==="") {
        nameError = "Nom ne peut etre vide";
      }

      //============= Mise ne place state error ================
      if ( nameError ) {
        this.setState({  nameError });
        return false;
      }
  
      return true;
    };
  
    handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
      
         
        let baseURL = (window.location).href;
        let id = baseURL.substring(baseURL.lastIndexOf('=')+1)
          PostService.createComment({ fk_postId:id, content:this.state.content, title:this.state.titre, image_url:this.state.photo, UsersCom:localStorage.getItem("userId")})
          .then((res)=> console.log(res))
          window.location.pathname = `post/:id/id=${id}`
        
    };
    
    render() {
      return (
        <form className='Signup' style={{minHeight:"700px"}} onSubmit={this.handleSubmit}>
            <h1>Commenter !</h1>
            <div className='inputDiv'>
            
            <label >tiitre</label>
            <input  name="title" placeholder="Un titre" onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>

            <label >message</label>
            <input  name="content" placeholder="Une photo de vous" onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.photoError}
            </div>

          <label >Photo</label>
            <input type="file" name="image" placeholder="photo" onChange={this.handleChangeFile}/>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          <button type="submit">submit</button>
            </div>
        </form>
      );
    }
  }