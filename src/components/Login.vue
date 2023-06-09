<template>
    <div class="login">
            <form>
                <h3 class="pb-3 pt-5">Iniciar seccion</h3> 
                <div class="box-login pt-5 row">
                    <div class="col-md-12 pb-3">
                        <input class="form-control" type="text" name="" id="" placeholder="Usuario">
                    </div>
                    <div class="col-md-12 pb-3">
                        <input class="form-control" type="text" name="" id="" placeholder="Contraseña">
                    </div>
                    <div class="col-md-12">
                        <router-link to="/Top" class="btn btn-info mb-5">Acceder</router-link>
                    </div>
                </div>
            </form>
        
    </div>
</template>
  
  <script>
  export default {
    name: 'login',
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
  