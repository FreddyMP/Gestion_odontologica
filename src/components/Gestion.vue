<template>
  <div class="gestion">
    <div class="nav-left text-light">
      <div>
        <div id="titulo">
          <p>Gestión D <small id="version">v.1.0</small></p>
        </div>
        <div>
          <small id="menu">Menu</small> <br>
          <hr>
        </div>
      </div>
      <div class="option-nav">
        <div class="opctions">
          <router-link class="opcion" to="/Doctors">Doctores</router-link> <br>
        </div>
        <div class="opctions">
          <router-link class="opcion" to="/Doctors">Pacientes</router-link> <br>
        </div>
        <div class="opctions">
          <router-link class="opcion" to="/Doctors">Control de citas</router-link> <br>
        </div>
        <div class="opctions">
          <router-link class="opcion" to="/Doctors">Administración</router-link> <br>
        </div>
        <div class="opctions">
          <router-link class="opcion" to="/Doctors">Ingresos</router-link> <br>
        </div>
        <div class="opctions">
          <router-link class="opcion" to="/Doctors">Gastos</router-link> <br>
        </div>
        <div class="opctions">
          <router-link class="opcion" to="/Doctors">Farmacia</router-link> <br>
        </div>
      </div>
    </div>
   </div>
  </template>
  
  <script>
  export default {
    name: 'gestion',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .nav-left{
      box-shadow: lightgrey 2px 4px 5px;
      width: 230px;
      min-height: 100%;
      position: absolute;
      float: left;
     background-color: #405189;
    }
    #menu{
      float: left;
      margin-left:35px;
      color: rgb(164, 164, 164);
    }
    .gestion{
      min-height: 100%;
    }
    #version{
      padding-left: 10px;
      padding-right: 10px;
      background-color: brown;
      font-size: 15px;
      opacity: 0.7;
      border-radius: 5px;
    }
 
  
  #titulo{
    font-family: 'Pacifico', cursive;
    padding-top:20px ;
    font-size: 25px;
   
  }
  .opctions{
    padding:15px !important;
  }
  .opcion{
    color: lightgray;
    font-size: 15px;
    float: left;
    margin-left: 20px;
    font-family: 'Rajdhani', sans-serif;
  }
  </style>
  