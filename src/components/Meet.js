import axios from "axios";
import { useEffect, useState } from "react";
import './meetstyle.css'
function Meet(){
    const [id, setId] = useState("");
    const [toplantiadi, setToplanti] = useState("");
    const [aciklama, setAcik] = useState("");
    const [baslangic, setBas] = useState(new Date());
    const [son, setSon] = useState("");
    const [deneme, setDeneme] = useState(new Date());
    const [meets, setMeets] = useState([]);
   
    useEffect(() => {
        (async () => await Load())();
      }, []);
     
      async function Load() {
        
          const result= await axios.get("https://localhost:7030/api/Meet/GetMeets");
          setMeets(result.data);
        console.log(result.data);
      }
     
      async function save(event) {
       
        event.preventDefault();
        try {
          await axios.post("https://localhost:7030/api/Meet/AddMeet", {
            
          toplantiadi: toplantiadi,
          aciklama: aciklama,
          baslangic:baslangic,
          son:son
    
           
          });
          alert("Toplantı Başarıyla Eklenmiştir");
              setId("");
              setToplanti("");
              setAcik("");
              setBas("");
              setSon("");
           
         
          Load();
        } catch (err) {
          alert(err);
        }
      }
    
      
     
    
      async function DeleteMeet(id) {
      await axios.delete("https://localhost:7030/api/Meet/DeleteMeet/" + id);
       alert("Toplantı Başarıyla Silindi");
       setId("");
       setToplanti("");
       setAcik("");
       setBas("");
       setSon("");
       Load();
      }
    return(
       
        <div class="container  p-5 my-5 border justify-content-center align-items-center vh-100 bg-primary">
 <h1>Toplantı Ekle</h1>
<div class="bg-primary">
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

            <label>Toplantı Adı</label>
            <input
              type="text"
              class="form-control"
              id="toplantiadi"
              value={toplantiadi}
              onChange={(event) => {
                setToplanti(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Toplantı Açıklaması</label>
            <input
              type="text"
              class="form-control"
              id="aciklama"
              value={aciklama}
              onChange={(event) => {
                setAcik(event.target.value);
              }}
            />
            
          </div>
          <div class="form-group">
            <label>Toplantı Başlangıcı</label>

            <input aria-label="Date and time" type="datetime-local" class="form-control"
              id="baslangic"
              value={baslangic}
              onChange={(event) => {
                setBas(event.target.value);
              }}/>
            
              
            
          </div>
          {/* <DatePicker value={baslangic} selected={baslangic} onChange={(date) => setBas(date)}
         
          dateFormat="d/MM/yyyy hh:mm"
          showTimeSelect
          timeIntervals={15}
          timeFormat="hh:mm" /> */}
          <div class="form-group">
            <label>Toplantı Bitişi</label>
              
            <input aria-label="Date and time" type="datetime-local" class="form-control"
              id="son"
              value={son}
              onChange={(event) => {
                setSon(event.target.value);
              }}/>
            
          </div>
          
         
                    <div>
            <button class="btn btn-warning mt-4" onClick={save}>
              Ekle
            </button>
            
            
          </div>
          
          
        </form>
        
      </div>
        <br></br>
        <br></br>
        <br></br>
<table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Toplantı Id</th>
            <th scope="col">Toplantı Adı</th>
            <th scope="col">Açıklama</th>
            <th scope="col">Toplantı Bas</th>
            <th scope="col">Toplantı Son</th>
              
 
            <th scope="col">Seçenekler</th>
          </tr>
        </thead>
        
        {meets.map(function fn(meet) {
          return (
            <tbody>
              <tr>
                <th scope="row">{meet.id} </th>
                
                <td>{meet.toplantiadi}</td>
                <td>{meet.aciklama}</td>
                <td>{meet.baslangic}</td>
                
                <td>{meet.son}</td>
                
                <td>
                  
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteMeet(meet.id)}
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
export default Meet;