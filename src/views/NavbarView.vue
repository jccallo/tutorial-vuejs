<template>
   <div id="navbar-view">
      <div class="container-fluid mb-4">
         <nav class="container navbar navbar-expand-lg navbar-dark">
            <!-- Brand -->
            <router-link class="navbar-brand" to="/home">Tutorial<span class="text-warning">Vuejs</span></router-link>

            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
               <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                     <router-link class="nav-link" to="/home">Home</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link class="nav-link" to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link class="nav-link" to="/components-indepth">VueComponents</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link class="nav-link" to="/bootstrap-components">bootstrapComponents</router-link>
                  </li>

                  <!-- Dropdown -->
                  <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                     More
                  </a>
                  <div class="dropdown-menu">
                     <router-link class="dropdown-item" to="/home">Home</router-link>
                     <router-link class="dropdown-item" to="/about">About</router-link>
                     <router-link class="dropdown-item" to="/components-indepth">VueComponents</router-link>
                     <router-link class="dropdown-item" to="/bootstrap-components">bootstrapComponents</router-link>
                     <router-link class="dropdown-item" to="/bootstrap-four">bootstrapFour</router-link>
                     <router-link class="dropdown-item" to="/event-handling">EventHandling</router-link>
                     <router-link class="dropdown-item" to="/forminput-binding">ForminputBinding</router-link>
                  </div>
                  </li>
               </ul>
               <form class="form-inline">
                  <div class="input-group input-group-sm">
                  <input type="text" class="form-control" placeholder="Search">
                  <div class="input-group-append">
                     <button class="btn btn-success" type="submit">Go</button>
                  </div>
                  </div>
               </form>
               <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                     Armando Morales
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                     <router-link class="dropdown-item" to="/home">Home</router-link>
                     <router-link class="dropdown-item" to="/about">About</router-link>
                     <router-link class="dropdown-item" to="/components-indepth">VueComponents</router-link>
                     <router-link class="dropdown-item" to="/bootstrap-components">bootstrapComponents</router-link>
                     <router-link class="dropdown-item" to="/bootstrap-four">bootstrapFour</router-link>
                  </div>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   </div>
</template>

<style scoped>
  .container-fluid, navbar {
    background-color: #242939;
  }
</style>