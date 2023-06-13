<template>
    <div class="container mt-5 ">
        <h1>Doctores</h1> 
        <table class="table table-bordered mt-5  list_box ">
            <thead>
                <tr>
                <th scope="col">Code</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Especialidad</th>
                <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">001</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Higiene bocal</td>
                <td>
                    <button class="btn btn-warning ">Edit</button>
                    <button class="btn btn-danger ml-2">Borrar</button>
                </td>
                </tr>
                <tr>
                <th scope="row">002</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Maxilo facial</td>
                <td>
                    <button class="btn btn-warning ">Edit</button>
                    <button class="btn btn-danger ml-2">Borrar</button>
                </td>
                </tr>
            </tbody>
        </table>        
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
    .list_box{
        box-shadow:1px 2px 10px ;
        
    }
 
  
  </style>
  