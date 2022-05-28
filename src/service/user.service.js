
import appelAxios from '../requette';

class userService  {
  
    signup (dataSignup ) {
        
        return appelAxios.post("/auth/signup", dataSignup )
    }
    login (dataLogin ) {
        return appelAxios.post("/auth/login/", dataLogin)
    }
    

}
export default new userService () ;