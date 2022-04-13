<template>
<header>
       <div class="welcome-text">
          <h1>WELCOME TO SnapShot</h1>
        </div>
</header>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}

</script>

<style scoped>

*{
  text-align: center;
  margin: 0px;
  padding: 0px;
}
header {
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("../assets/1.jpg");
  height: 100vh;
  -webkit-background-size:cover;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.nav-area {
  float: right;
  list-style: none;
  margin-top: 30px;
}
.nav-area li {
  display: inline-block;
}
.nav-area li a {
  color: #fff;
  text-decoration: none;
  padding: 5px 20px;
  font-family: poppins;

}

.nav-area li a:hover {
  background:#fff;
  color:#333;
}

.welcome-text {
  position: absolute;
  width: 600px;
  height: 300px;
  margin: 20% 30%;
  text-align:center;
}
.welcome-text h1{
  text-align: center;
  color:#fff;
  text-transform: uppercase;
  font-size: 60px;
}


</style>