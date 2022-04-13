<template>

  <div class="gallery">
    <br>
    <div class="title">
     <h4 class="text-uppercase">Our Sample Shots</h4>
    </div>
   <div class="container mt-2">
  <div class="row">
    <div class="col-md-4 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/4.jpg">
        <h5 class="card-title mt-3 mb-3">Quezon City Memorial Circle</h5>
  </div>
    </div>
    <div class="col-md-4 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/5.jpg" >
        <h5 class="card-title  mt-3 mb-3">Philippine Arena</h5>
  </div>
    </div>
    <div class="col-md-4 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/6.jpeg">
        <h5 class="card-title  mt-3 mb-3">Batangas</h5>
  </div>
    </div>
    <div class="col-md-4 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/7.jpeg">
        <h5 class="card-title  mt-3 mb-3">NAIA</h5>
      </div>
        </div>    
        <div class="col-md-4 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/8.jpeg">
        <h5 class="card-title  mt-3 mb-3">National Museum</h5>
  </div>
    </div>
    <div class="col-md-4 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/9.jpeg">
        <h5 class="card-title  mt-3 mb-3">Dingalan</h5>
  </div>
    </div>
    <div class="col-md-4 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/10.jpeg">
        <h5 class="card-title  mt-3 mb-3">National Museum</h5>
  </div>
    </div>
    <div class="col-md-4 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/11.jpeg">
        <h5 class="card-title  mt-3 mb-3">Tarlac</h5>
  </div>
    </div>
    <div class="col-md-4 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/12.jpeg">
        <h5 class="card-title  mt-3 mb-3">Restaurant</h5>
  </div>
    </div>
      </div>
   </div>
    
  </div>
 
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title: 'Gallery',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height:15vw;
  width:100%;
  object-fit: cover;
}
.item{
  padding-left:5px;
  padding-right:5px;
  padding-bottom: 5px;
}
.item-card{
  transition:0.5s;
  cursor:pointer;
}
.item-card-title{  
  font-size:15px;
  transition:1s;
  cursor:pointer;

  
}
.item-card-title i{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
  
}
.card-title i:hover{
  transform: scale(1.25) rotate(100deg); 
  
  
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
  outline: 10px solid lightpink;
}
.card-text{
  height:80px;  
}
.card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
  padding: 5px;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  transform: scale3d(1, 1, 1);
}
h5, p {
  text-align: center;
  color:blueviolet;
}
.title{
  text-align: center;
    background-color: rgb(125, 186, 240);
    color: white;
    font-size: 1.7em;
}

</style>
