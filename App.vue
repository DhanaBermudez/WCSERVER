/
<template>
  <div id="app">
    
 
  <my-profile></my-profile>
  <my-education></my-education>
  <my-skills></my-skills>
  
  
  
  </div>
</template>

<script>
//Import the newly created components
import MyEducation from './components/myEducation.vue'
import myProfile from './components/myProfile.vue'
import MySkills from './components/mySkills.vue'



export default {
  components: { myProfile, MyEducation, MySkills },
  name: 'app',
  data () {
    return {
      msg: 'My Resume'
    }
  }
}
</script>

<style>

h1{
  text-align: center;
  color: saddlebrown;
  font-family:'Courier New';
}


</style>
