<template>
  <div id="mySkills">
     <div class="alert alert-success" role="alert">
    <section class="skills" id="skill">
       <div class="center">
          <div class="alert alert-danger" role="alert">
          <h1>{{ msg4}}</h1>
          </div>
         
            <br>

            <div class="s1" id="s1">
                <ul>
                    <li><h3><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Creative</h3> </li>
                     <li><h3><i class="fa fa-arrows" aria-hidden="true"></i>Flexible</h3>
                     <li><h3><i class="fa fa-eye" aria-hidden="true"></i>Focus</h3></li>
                     <li><h3><i class="fa fa-clock-o" aria-hidden="true"></i>Time Management</h3></li>
                     <li><h3><i class="fa fa-desktop" aria-hidden="true"></i>Computer Proficiency</h3></li>
                        
                    
                 
                </ul>
            </div>
               
       </div>
       
    </section>
    <br><br><br>
  </div>
     <div class="alert alert-success" role="alert">
        <section class="language" id="language">
       <div class="center">
          <div class="alert alert-danger" role="alert">
          <h1>{{ msg5}}</h1>
          </div>
           <br>
             <div class="contactinfo lang">
                <ul>
                    <li><strong>
                        <span class="text">PYTHON</span>
                        <span class="percent1">
                            <div style="width: 70%;"></div>
                        </span>
                    </strong>
                    </li>
                    <li><strong>

                        <span class="text">CSS</span>
                        <span class="percent2">
                            <div style="width: 60%;"></div>
                        </span>
                        </strong>
                    </li>

                    <li><strong>
                        <span class="text">HTML</span>
                        <span class="percent3">
                            <div style="width: 50%;"></div>
                        </span>
                      </strong>
                    </li>
                    <li><strong>
                        <span class="text">PHP</span>
                        <span class="percent4">
                            <div style="width: 60%;"></div>
                        </span>
                        </strong>
                    </li>
                    <li><strong>
                    
                        <span class="text">JAVA</span>
                        <span class="percent5">
                            <div style="width: 40%;"></div>
                        </span>
                        </strong>
                    </li>
 
                </ul>
            </div>
        </div>
        </section>
     </div>
  </div>
  
</template>

<script>
import App from '../App.vue'
export default {
  components: { App },
  name: 'skills',
  data () {
    return {
      msg4: 'SKILLS',
      msg5:'PROGRAMMING LANGUAGE'
    }
  }
}
</script>
<style>


.s1 {
  
    width:200px;
    margin:0 auto;
    text-align:left;
    
}
.lang .percent1{
  position: relative;
  width: 100%;
  height: 20px;
  background: gray;
  display: block;
  margin-top: 5px;
}
.lang .percent1 div{
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background: red;
}
.lang .percent2{
  position: relative;
  width: 100%;
  height: 20px;
  background: gray;
  display: block;
  margin-top: 5px;
}
.lang .percent2 div{
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background: red;
}
.lang .percent3{
  position: relative;
  width: 100%;
  height: 20px;
  background: gray;
  display: block;
  margin-top: 5px;
}
.lang .percent3 div{
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background: red;
}
.lang .percent4{
  position: relative;
  width: 100%;
  height: 20px;
  background: gray;
  display: block;
  margin-top: 5px;
}
.lang .percent4 div{
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background: red;
}
.lang .percent5{
  position: relative;
  width: 100%;
  height: 20px;
  background: gray;
  display: block;
  margin-top: 5px;
}
.lang .percent5 div{
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background: red;
}
.skills ul li .fa{
  color: black;
  font-size: 18px;
  width: 20px;
}

</style>
