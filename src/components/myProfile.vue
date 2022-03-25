<template>

  <div id="myProfile">
    <div class="alert alert-success" role="alert">
    <section class="about" id="aboutMe">
        <div class="center">
          <div class="alert alert-danger" role="alert">
          <h1>{{ msg2}}</h1>
          </div>
            <br><br>

            <div class="profile" id="profile">
               

                <img src="src\assets\myProfile.JPG" alt="profilePic">
                    <div>
                        
                       <h2><strong> Dhana Grace F. Bermudez</strong></h2>
                        <h3><em><strong>Web Developer</strong></em></h3>

                        <p>Hello, Everyone! I am Dhana Grace Bermudez, a 2nd year college taking up a Bachelor of Science with Areas of Specialization in Web Development at Holy Angel University.
                        I am interested in designing and developing user interfaces, testing, debugging, data retrieval and workflow efficiencies. I am also interested in making applications that can be a big help to everyone. I am looking for a position as a Web Developer where I can exercise my skills, while making a significant contribution to the success of the company.</p>

                    </div>

                    
                        <div>
                           <p><strong>Full Name:</strong> Dhana Grace F. Bermudez</p>
                           <p><strong>Address:</strong> Dau Mabalacat, Pampanga </p>
                           <p><strong>Age:</strong> 20 years old </p>
                           <p><strong>Birth Date:</strong> November 20, 2001 </p>
                           <p><strong>Contact No:</strong> 09616380914 </p>
                           <p><strong>Nationality:</strong> Filipino </p>
                           <p><strong> Religion: </strong> Roman Catholic </p>
                           <p><strong>Email:</strong> dhanabermudez1488@gmail.com </p>

          
                </div>
            </div>
        </div>
    </section>
    <br><br><br>

  </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      msg2: 'PROFILE'
    }
  }
}
</script>

<style>

h2{
  font-family: Courier New;
  color:black;
  
}
h3 {
  font-family: Courier New;
  color:black;
}
  .profile{
    text-align: center;
    margin-left: auto;
    margin-right: auto; 
    font-size: 17px;
    
}
.profile img{
    width: 250px;
    margin-top: 10px;
    height: 250px;
}
p{
  color:black;
  font-size: 17px;
}


</style>
