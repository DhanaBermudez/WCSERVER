<template>
<body>
  
  <section class="contact">
    <div class="content">
      <h1>Contact us</h1>
    </div>
    <div class="container">
      <div class="contactInfo">
        <div class="box">
          <div class="icon"></div>
          <div class="text">
          <h3>Address</h3>
          <p>Angeles, City</p>
          </div>
        </div>
        <div class="box">
          <div class="icon"></div>
          <div class="text">
          <h3>Email</h3>
          <p>dgbermudez@gmail.com</p>
          </div>
        </div>
        <div class="box">
          <div class="icon"></div>
          <div class="text">
          <h3>Phone</h3>
          <p>+639053458934</p>
          </div>
        </div>
      </div>
      <div class="contactForm">
        <form>
          <h2>Send Message</h2>
          <div class="inputBox">
            <input type="text" name="" required="required">
            <span>Full Name</span>
          </div>
          <div class="inputBox">
            <input type="text" name="" required="required">
            <span>Email</span>
          </div>
          <div class="inputBox">
            <textarea required="required"></textarea>
            <span>Type your Message...</span>
          </div>
          <div class="inputBox">
            <input type="submit" name="" value="Send">
            
          </div>
        </form>
      </div>
    </div>
  </section>
</body>

</template>
<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;1,100&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.contact
{
  position: relative;
  min-height: 100vh;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url("../assets/final3.jpg");
  background-size: cover;

}
.contact .content
{
  max-width: 800px;
  text-align: center;
}
.contact .content h1{
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  font-size: 25px;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.container .contactInfo {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.container .contactInfo .box{
  position: relative;
padding: 20px 0;
display: flex;
}
.container .contactInfo .box .icon
{
  min-width:60px;
  height: 60px;
  background: tan;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 22px;
}
.container .contactInfo .box .text {
  display: flex;
  margin-left: 20px;
  font-size: 16px;
  color: #fff;
  flex-direction: column;
  font-weight: 300;
}
.container .contactInfo .box .text h3{
  font-weight: 500;
  color:  white;
}
.contactForm {
  width: 40%;
  padding: 40px;
  background: #fff;

}
.contactForm h2{
  font-size: 30px;
  color: #333;
  font-weight: 500;
}
.contactForm .inputBox
{
  position:relative;
  width: 100%;
  margin-top: 10px;
}
.contactForm .inputBox input,
.contactForm .inputBox  textarea{
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none
}
.contactForm .inputBox span{
position: absolute;
left: 0;
padding: 5px 0;
font-size: 16px;
margin: 10px 0;
pointer-events: none;
color:#666;
}
.contactForm .inputBox input:focus~span,
.contactForm .inputBox input:valid~span,
.contactForm .inputBox textarea:focus~span,
.contactForm .inputBox textarea:valid~span {
  color:#e91e63 ;
  font-size: 12px;
transform: translateY(-20px);
}
.contactForm .inputBox input[type="submit"] {
  width: 100px;
  background: #00bcd4;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;

}
@media (max-width:991px)
{
  .contact{
    padding: 50px;
  }
  .container {
    flex-direction: column;
  }
  .container .contactInfo{
    margin-bottom: 40px;
  }
  .container .contactInfo{
    width: 100%;
  } 
}
</style>
