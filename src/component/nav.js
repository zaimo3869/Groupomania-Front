
import React from 'react';
import {Link} from 'react-router-dom';
// import {link} from 'react-router-dom';

function Nav() {
    return (
        <nav> <div className="logo"> 
        <img style={{height:"100%"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAh1BMVEXDAAD//
        //AAADnrKy+AAD99PT//Pz88fHpt7f56enwzc3NRUXtw8Pmqqr++fnrvr7239/VdHTIKirLPT3joaHWb2/UZmbIKCjtwsLZfHzy2dnPTk7agYHSXV3IJSXLPj7di4vgmJjQVlbTYWDciYnFFRTJMDHfk5PvzMzGHx/bgYHSWlrOT09j7yAGAAAFg0lEQVR4nO2c63biOgyFiTAkAUIpTKEDpZSWXua07/98J2AptnMBDqdTWGh//UMcpyvZS7Ys+dJqAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJBD+R84HsppzRbT29vpYmavwH5yjcYPyagTFXRGycMY0u2DaJnEUQ1xsoRwDdAsG9ZpZhlmjxCuCvU/mjWzDCYQLoTGg0Oi7YQbQzgH0a9jRNvyC7oJNEmr+rRflsuX22p5uoJwO8ymxqrSnec0dVa4Med+40uAbjxJem3+sbA2RTweGc29Sjewt1bLE2QwMWmoDN3xrdaq5+rNtetGLdetjfqGpDMrdKER62jMwlVNz/nOl4CT4imXivjS+Uv65Nuv+e8n6LZDbCk3td2I7MVeDL1GaOZOSXorVB4pbqdU9Fe2L5Prd1+TQEq6lyd6av2pG+SurQbjcs+2RbzEHYXPaB34Ft1W9G5Vo8xeZoEgtAnMy7zLU59KdeuKavz9Zlj0/j7E1fjSrPm6+6MveymQBO9tNqMxt7+PkhVRYss3oi5fRwOF3Rst+ePnu4+nP4V7qDS+Z26lUi7ONVrqa6YyROvYq35UcFM2IuoErTSHC1J1stFvFull9+lvkUe7oZXeSTnxoCR60KabxOjWtNywt66Z0tQWJ0Wx4fA/ViabBJ/sDT8D1fLujkK4TXrF7HRvdelmQvM6GWUxVv+wIsfRP/eX/CTUPizIcZTdx1VDtZPIp6DKKXxbG81bqR7daP19sq0VycaBVFvIwhm/XtYOycoPbMu4riLZbO4jduOwoNXGVIHDgkeviPNwXT3x/MyK4E3cSSCwpfNafWJib915ReKNZ3//fS8E1mjjtS/X3X3UPfFo7/kxqES107/9tpcCcYL22S+zttPNGjyjbdbBJMMiqpZdM9K8/O/lufm4oafi3FGYLo9qyq4YWb4QyGZXtzXFmDw+TvzbJqqWXTM8/ggsi8uahhMsW7D6w8S6RiBkk9pBbpYzboMGDUyNbJwfVrMghCUa+dbGo7D7/2Bt8m/UyMbWViNbk7WxSwgbqTZrq+vbrOmUJ/uK250alxDvfeTqkCmVQLb5/v59WB1ssCdVs0hQFi0EZb19HRXxcHetetzGUcLCL7Nz9LVZR7dlIZjg41lnNVGCxKS//QjTNtxhTW1v3bPvaOnBlqmJSSUD4nfwEsr/qVQO5h08T6svA2Iq+TYynM94a0q1MU/FMzxn2FXTRovsrpfEzXiZ5H0lsRsmfruZ4uzuOvo2FM0lYObqNDBPehKYlT8NrAE5CVnQ1o07BaeoNtIz3bfFrW8rL2Lrlda2mXmgU4eLWWRl69sKp+BWe3MOJCrXnASy8aYOzqGocghbJKKMpsWC3LUvjFfT38Js0x3EUXwQ1epAVoq74IjNqpI/M/8Uqkm2Q+1KcW9fQmFucUlHKecMSJzwuQxGtjAsf/SNLwMju2AS7t4ke1nu5o1sS5BdMFyvceLhypE9V7y/TwZzpS2PsqpmLurKXjWde668HX6sm2yBDHNuki7hzK47x0HrDr/y3lCxozBgkg0y9sqo30/q71623dRroBDX4S7QpoLd6ReK8mwV3KahdHvsk0jk59DE2CYt7JV3uNztex4y8ZI1byJG/G1uXISTGQT/HJD0mfxjGCySKvnKNR1BtQLyQvXe14p/vZbu9sybd1LZ/KxvfBkEZxzNeWjLEVYRjz55R/XoWb6wl9oTtb62HoJadacu4kQtC62q57el069+f3VTFS3FSYsCTgs8kWPPppxBtRCaHBTuQ9Oc6NHQ4/5zd2dwBfUQfeKU51NoOFPcQLOD4AT7/4GdDj33WwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICL4F/xODZhD31UZgAAAABJRU5ErkJggg==' alt='logo'></img> 
        </div>
        <Link className="btnNav" to="/login"> Login</Link>
        <Link className="btnNav" to="/"> Signup</Link>
        <Link className="btnNav" to="/post"> Acceuil</Link>
        </nav>
      
    );
  }
  
  export default Nav;