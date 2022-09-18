<template>
  <div class="prijavljen">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <div class="w3-sidebar w3-light-grey w3-bar-block" style="width:25%">
  <h3 class="w3-bar-item">CAR RENTAL COMPANY</h3>
    <router-link to="/Prijavljen" class="w3-bar-item w3-button">Rezervacije</router-link>
  <a href="#" class="w3-bar-item w3-button">Odobrenje</a>
  <a href="#" class="w3-bar-item w3-button">Prošlo</a>
  <a href="#" class="w3-bar-item w3-button">Stanje vozila</a>
  <router-link to="/rezervacija" class="w3-bar-item w3-button">Dodaj rezervaciju</router-link>
  </div>

<br><br>
  <div id="reza" class="w3-container w3-teal w3-light-grey ">
    <h1>Dodaj rezervaciju</h1>
  </div>
  	<div class="f">
  <form>
    <label for="fname">Ime</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." v-model="ime">

    <label for="lname">Prezime</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." v-model="prezime">

    <label for="kategorija">Kategorija vozila</label>
    <select id="kategorija" name="kategorija" v-model="kat">
        <option selected value="EDMR">EDMR</option>
        <option value="CDMR">CDMR</option>
        <option value="SFMR">SFMR</option>
        <option value="IFAR">IFAR</option>
        <option value="SDMR">SDMR</option>
        <option value="LVAR">LVAR</option>
    </select>
  

  </form>
      <input type="submit"  @click="popup()" value="Submit">
</div>
  </div>       

</template>
  <style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.f{
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
  </style>
<script>
import {db, setDoc,doc,collection,addDoc} from "@/firebase";

export default {
  name: 'vozilo',
  data(){
    return{
      ime:"",
      prezime:"",
      kat:"",
    }
  },
  methods:{
    popup(){
      const docRef = addDoc(collection(db, "podaci"), {
          ime: this.ime,
        prezime: this.prezime,
        kat: this.kat,
        }).then((result)=>{
        this.$router.go(this.$router.currentRoute)
        console.log(result);
      })
    }
  },
};
</script>
