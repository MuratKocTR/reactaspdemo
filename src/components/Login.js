import axios from "axios";
import { useEffect, useState } from "react";
import './style.css'
import { Link ,useNavigate } from "react-router-dom";

function Login() {

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    // const [users, setUsers] = useState([]); 
    const navigation=useNavigate()
    async function login(event) {
     
        event.preventDefault();
        
          await axios.post("https://localhost:7030/api/UserAuth/login", {
            
          email: email,
          password: password,
           
          }).then((result)=>{
            if (result.data == 'Invalid') {
                // 
                alert("Login Failed Email or password false");
                setId("");
              setEmail("");
              setPass("");
                
            }
            else{
                localStorage.setItem('token',result.data)
                alert("Giriş Başarılı");
                navigation('/home')

            }
          });
          
          
          
              
           
         
          
        
      }
    return(
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white">
            <form>
                <h3 className="text-center">Giriş Yap</h3>
                <div>
                <input
                type="text"
                class="form-control"
                id="id"
                hidden
                value={id}
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="E-mail Giriniz" className="form-control"
                    id="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Şifreyi Giriniz" className="form-control"
                    id="password"
                value={password}
                onChange={(event) => {
                  setPass(event.target.value);
                }}></input>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary"onClick={login}>Giriş Yap</button>
                </div>
                <p className="text-end mt-2">
                    <Link to="/signup" className="ms-2">Kaydol</Link>
                </p>
            </form>
            </div>
        </div>
    )
}
export default Login;