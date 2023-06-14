<template>
  <div class="container">
    <div class="form">
      <div class="row">
        <div class="col-md-4">
            <input type="text" name="" id="" placeholder="Código">
        </div>
        <div class="col-md-4">
            <input type="text" name="" id="" placeholder="Nombres">
        </div>
        <div class="col-md-4">
            <input type="text" name="" id="" placeholder="Apellidos">
        </div>
        <div class="col-md-4">
            <input type="text" name="" id="" placeholder="Especialidad">
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'doctors',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .box-login{
        margin-left: 20%;
        width: 60%;
        border-radius: 5px;
        box-shadow: lightgray 5px 5px 5px;
    }
 
  
  </style>
  