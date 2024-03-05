  import axios from "axios";
  import { useEffect, useState } from "react";
  
  function UserCrud() {
  
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [users, setUsers] = useState([]);
   
    useEffect(() => {
      (async () => await Load())();
    }, []);
   
    async function Load() {
      
        const result= await axios.get("https://localhost:7030/api/User/GetUser");
      setUsers(result.data);
      console.log(result.data);
    }
   
    async function save(event) {
     
      event.preventDefault();
      try {
        await axios.post("https://localhost:7030/api/User/AddUser", {
          
        email: email,
        password: password,
         
        });
        alert("Student Registation Successfully");
            setId("");
            setEmail("");
            setPass("");
         
       
        Load();
      } catch (err) {
        alert(err);
      }
    }
  
    async function EditUser(users) {
      setEmail(users.email);
      setPass(users.password);
     
   
      setId(users.id);
    }
   
  
    async function DeleteUser(id) {
    await axios.delete("https://localhost:7030/api/User/DeleteUser/" + id);
     alert("Employee deleted Successfully");
     setId("");
     setEmail("");
     setPass("");
     Load();
    }
   
  
    async function update(event) {
      event.preventDefault();
      try {
  
    await axios.patch("https://localhost:7030/api/User/UpdateUser/"+ users.find((u) => u.id === id).id || id,
          {
          id: id,
          email: email,
          password: password,
  
          }
        );
        alert("Registation Updateddddd");
        setId("");
        setEmail("");
        setPass("");
       
        Load();
      } catch (err) {
        alert(err);
      }
    }
  
    
      return (
        
        <div>
         
          <h1>Student Details</h1>
        <div class="container mt-4">
          <form>
            <div class="form-group">
             
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
  
              <label>Student Name</label>
              <input
                type="text"
                class="form-control"
                id="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Course</label>
              <input
                type="text"
                class="form-control"
                id="password"
                value={password}
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
            </div>
            <div>
              <button class="btn btn-primary mt-4" onClick={save}>
                Üye Ol
              </button>
              <button class="btn btn-warning mt-4" onClick={update}>
                Güncelle
              </button>
            </div>
          </form>
        </div>
        <br></br>
  
        <table class="table table-dark" align="center">
          <thead>
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">User Name</th>
              <th scope="col">User Password</th>
           
   
              <th scope="col">Option</th>
            </tr>
          </thead>
          {users.map(function fn(user) {
            return (
              <tbody>
                <tr>
                  <th scope="row">{user.id} </th>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  
                  <td>
                    <button
                      type="button"
                      class="btn btn-warning"
                      onClick={() => EditUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => DeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
          
        </div>
      );
    }
    
    export default UserCrud;