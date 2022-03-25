<template>
  <div id="myEducation">
    <div class="alert alert-success" role="alert">
    <section class="education" id="educ">
        <div class="center">
           <div class="alert alert-danger" role="alert">
          <h1>{{ msg3}}</h1>
          </div>
           
            <div class="education" id="education">
                <ul>
                    <li> 
                        <h3>COLLEGE</h3>
                        <h4><span style=color:maroon;>HOLY ANGEL UNIVERSITY</span></h4>
                        <p>Angeles, Pampanga</p>
                        <p>Bachelor of Science in Information Technology with Areas of Specialization in Web Development</p>
                        <p>2020-Present</p>
                    </li>
                </ul>
                <ul>
                    <li>
                         <h3>SENIOR HIGH SCHOOL</h3>
                         <h4><span style=color:maroon;>FIRST CITY PROVIDENTIAL COLLEGE</span></h4>
                         <p>San Jose Del Monte, Bulacan</p>
                         <p>2018-2020</p>
                    </li>
                </ul>
                  <ul>
                    <li>
                        <h3>JUNIOR HIGH SCHOOL</h3>
                        <h4><span style=color:maroon;>UNIVERSITY OF THE ASSUMPTION</span></h4>
                        <p> San Fernando, Pampanga</p>
                        <p>  2016-2018</p>
                       
                        <br>

                        <h4><span style=color:maroon;>OUR LADY OF LOURDES ACADEMY</span></h4>
                        <p>San Jose Del Monte, Bulacan</p>
                        <p> 2014-2016</p>

                    </li>
                </ul>
                 
            </div>
        </div>
    </section>
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'education',
  data () {
    return {
      msg3: 'EDUCATION'
    }
  }
}
</script>
<style>
h3{
  color:red;
  font-family: Courier New;

}
h4{
  color:black;
}

p {
  font-size: 17px;
}

</style>
