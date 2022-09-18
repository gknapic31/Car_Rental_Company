<template>
  <div class="hello">
    <section class="image">
      <div class="image__bg" style="background-image: url('https://img3.goodfon.com/wallpaper/nbig/0/56/art-avtomobil-mercedes-benz.jpg');"></div>
    </section><br><br><br>
    <h1>PONUDA VOZILA</h1><br><br><br>
    <div class="container ">

      <div class="row">
        <div class="col-sm">
         <h4>VW Polo or similar</h4> 
          <li><b> Car Group :</b> Economy</li><br>
          <li><b> Category :</b> EDMR</li><br><br>
          <img src="https://novarentacar.hr/image/car/12/264/184/98b0e954d4cefff68c1d422cac15400c.png" alt="Polo" style="width:50%">
        </div>
        <div class="col-sm">
         <h4>VW Golf or similar</h4> 
          <li><b> Car Group :</b> Compact</li><br>
          <li><b> Category :</b> CDMR</li><br><br>
          <img src="https://novarentacar.hr/image/car/17/264/184/7835f593fb4e00cd51ee31126a7e8ea0.png" alt="Polo" style="width:50%">
      </div>
      </div>
<br><br><br>
        <div class="row">
        <div class="col-sm">
         <h4>Nissan Qashqai or similar</h4> 
          <li><b> Car Group :</b> SUV</li><br>
          <li><b> Category :</b> SFMR</li><br><br>
          <img src="https://novarentacar.hr/image/car/34/264/184/744afe48b1df0beea555e5fd6bc22863.png" alt="Polo" style="width:50%">
        </div>
        <div class="col-sm">
         <h4>Seat Arona A/T or similar</h4> 
          <li><b> Car Group :</b> SUV</li><br>
          <li><b> Category :</b> IFAR</li><br><br>
          <img src="https://novarentacar.hr/image/car/40/264/184/37bd802cb230c1fd2a9c87d1dcdcb063.png" alt="Polo" style="width:50%">
      </div>
      </div>
      <br><br><br>
        <div class="row">
        <div class="col-sm">
         <h4>Skoda Octavia or similar</h4> 
          <li><b> Car Group :</b> Standard</li><br>
          <li><b> Category :</b> SDMR</li><br><br>
          <img src="https://novarentacar.hr/image/car/30/264/184/4fa32d55897ff5b29108c2e617dfe982.png" alt="Polo" style="width:60%">
        </div>
        <div class="col-sm">
         <h4>Mercedes Vito 8+1 A/T or similar</h4> 
          <li><b> Car Group :</b> 8+1 Seater Minivan</li><br>
          <li><b> Category :</b> LVAR</li><br><br>
          <img src="https://novarentacar.hr/image/car/27/264/184/7642dd61c78697cce38b865140f070e8.png" alt="Polo" style="width:60%">
      </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #213850;
}

.image {
  position: relative;
  
  height: 100vh;
  width: 100%;
  
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    height: 100%;
    width: 100%;

    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }
}

</style>
