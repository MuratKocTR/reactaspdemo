function Deneme(){
    return(
<div class="form-group">
            <label>Toplantı Başlangıcı</label>

            <input aria-label="Date and time" type="datetime-local" class="form-control"
              id="baslangic"
              value={baslangic}
              onChange={(event) => {
                setBas(event.target.value);
              }}/>
            
          </div>
    );
}
export default Deneme;