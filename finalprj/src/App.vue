<template>
<div id="app">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
     <a class="nav-link active" aria-current="page" href="#">SnapShot</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
     
         <ul class="navbar-nav mb-2 mb-lg-0">

                        <li class="nav-item mx-2">
                            <a class="nav-link active" aria-current="page" href="">Home</a>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                        <li class="nav-item mx-2">
                          <router-link class="nav-link" to="/gallery">Gallery</router-link>
                        </li>
                        <li class="nav-item mx-2">
                          <router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                    </ul>
     
    </div>
  </div>
</nav>
  <router-view/>
  </div>
  </template>

  <script>
    export default {
      name:'App'
    }

  </script>
  

      