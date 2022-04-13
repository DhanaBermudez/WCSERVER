<template>

    <section class="about">
      <div class="main">
        <img src="../assets/2.jpeg">
        <div class="about-text">
          <h2><em>ABOUT US</em></h2>
          <h5><span>Photography Service</span></h5>
          <p>SnapShot will capture your memories. We will tell tales using the photographs you provide. It will give superior service to our customers since repeat business and great word-of-mouth are critical components of success, and we will not overlook any details because we will continually provide only the finest quality photographs. Finally, we will ensure that our clients' contentment is our first concern.</p>      
         </div>
         <br>
         <div>
          <img src="../assets/3.jpeg">
         </div>
      </div>
    </section>

</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      title: 'About'
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.about {
  width: 100%;
  padding: 78px 0px;
  background-color:white;
}

.about img{
  height: auto;
  width: 250px;
}

.about-text {
  width: 550px;
}
.main {
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.about-text h1{
  color: black;
  font-size: 80px;
  text-transform: capitalize;
  margin-bottom: 20px;
  font-family: sans-serif;
}
.about-text h5{
  color: white;
  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 2px;
}
span {
  color:red;

}

.about-text p{
  color: green;
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 45px;
}

</style>
