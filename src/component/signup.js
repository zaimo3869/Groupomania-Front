
import React,{Component} from 'react';
import UserService from '../service/user.service';



const initialState = {
    prenom: "",
    name: "",
    photo:"",
    email: "",
    password: "",
    prenomError:"",
    nameError: "",
    emailError: "",
    photoError:"",
    passwordError: ""
  };

  //=============REGEX===================
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let testNumber = /^[a-zA-Z-\s]*$/;

export default class signup extends Component {
 

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

    if(token){
      window.location.path= '/post'
    }
  }
    state = initialState;
  
    handleChange = event => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
      });
    };
  
    validate = () => {
      let prenomError = "";
      let nameError = "";
      let emailError = "";
      let passwordError = "";
      let photoError = "";
  
      //============= Prenom ================
      if (!testNumber.test(this.state.prenom)|| this.state.prenom ==="") {
        prenomError = "Prenom ne peut etre vide ";
      }
      //============= Name ================
      if (!testNumber.test(this.state.name)|| this.state.name ==="") {
        nameError = "Nom ne peut etre vide";
      }
      //============= Photo ================
      if (!testNumber.test(this.state.photo)) {
        photoError = "photo cannot be blank";
      }
      //============= Email ================
      if (!regexMail.test(this.state.email)|| this.state.email ==="") {
        emailError = "mauvais format d email";
      }
      //============= Password ================
      if (!passwordRegex.test(this.state.password)|| this.state.password ==="") {
        passwordError = "8 caractère minimum et le mots de passe doit contenir : des majuscule et minuscule, 1 chiffre ";
      }
      //============= Mise ne place state error ================
      if (emailError || nameError||prenomError|| passwordError ||photoError ) {
        this.setState({ emailError, nameError,prenomError, passwordError,photoError });
        return false;
      }
  
      return true;
    };
  
    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
          //envoie les donner a l'API {nom:this.state.name, prenom:this.state.prenom, 
          // photo_url:this.state.photo, email: this.state.email, passwords: this.state.password}
          UserService.signup({nom:this.state.name, prenom:this.state.prenom, 
            photo_url:this.state.photo, email: this.state.email, passwords: this.state.password})
            window.location.pathname= 'login'
      }
    };
   
    
    render() {
      return (
        <form className='Signup' style={{height:"700px"}} onSubmit={this.handleSubmit}>
            <h1>Inscrivez vous !</h1>
            <div className='inputDiv'>
            
            <label >Prenom</label>
            <input name="prenom" placeholder="prenom" value={this.state.prenom} onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.prenomError}
            </div>

            <label >nom</label>
            <input name="name" placeholder="nom" value={this.state.name} onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>

            <label >Photo</label>
            <input type="file" name="photo" placeholder="Une photo de vous" value={this.state.photo} onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.photoError}
            </div>

          <label >email</label>
            <input name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          <label >Mots de passe</label>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
          <button type="submit">submit</button>
            </div>
        </form>
      );
    }
  }