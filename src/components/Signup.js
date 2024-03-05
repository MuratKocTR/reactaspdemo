import axios from "axios";
import { useEffect, useState } from "react";
import './style.css'
import { Link ,useNavigate } from "react-router-dom";

function Signup() {
  
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phonenumber, setPhone] = useState("");
 
  const navigation=useNavigate()
    async function register(event) {
     
        event.preventDefault();
        
          await axios.post("https://localhost:7030/api/UserAuth/register", {
            
          email: email,
          password: password,
          name: name,
          surname: surname,
          phonenumber:phonenumber

           
          }).then((result)=>{
            if (result.data == 'Failed') {
                // 
                alert("Kayıt başarısız Tekrar deneyin");
                
              setEmail("");
              setPass("");
              setName("");
              setSurname("");
              setPhone("");
             
                
            }
            else if(result.data=="Email"){
                alert("Bu email kullanılmakta başka bir mail giriniz");
            }
            else{
                
                alert("Kayıt Başarılı");
                navigation('/')

            }
          });
        }
    return(
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white">
            <form>
                <h3 className="text-center">Kaydol</h3>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="E-mail Giriniz" className="form-control"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Şifreyi Giriniz" className="form-control" 
                    value={password}
                    onChange={(event) => {
                      setPass(event.target.value);
                    }}></input>
                </div>
                <div>
                    <label htmlFor="name">İsim</label>
                    <input type="name" placeholder="İsim Giriniz" className="form-control"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}></input>
                </div>
                <div>
                    <label htmlFor="surname">Soyisim</label>
                    <input type="surname" placeholder="Soyisim Giriniz" className="form-control"
                    value={surname}
                    onChange={(event) => {
                        setSurname(event.target.value);
                    }}></input>
                </div>
                <div>
                    <label htmlFor="phonenumber">Telefon Numarası</label>
                    <input type="phonenumber" placeholder="Telefon No Giriniz" className="form-control"
                    value={phonenumber}
                    onChange={(event) => {
                        setPhone(event.target.value);
                    }}></input>
                </div>
                

                <div className="d-grid">
                    <button className="btn btn-primary"onClick={register}>Kaydol</button>
                </div>
                <p className="text-end mt-2">
                    <Link to="/" className="ms-2">Giriş Yap</Link>
                </p>
            </form>
            </div>
        </div>
    )
}
export default Signup