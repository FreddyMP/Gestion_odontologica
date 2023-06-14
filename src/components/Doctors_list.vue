<template>
    <div class="container mt-5 ">
        <div class="row">
            <div class="col-md-6 NameObject">
                <h1>Doctores</h1> 
            </div>
            <div class="col-md-6">
                <input class="form-control" type="text" name="" id="" placeholder="Filtrar">
            </div>
        </div>
        
        <table class="table table-striped mt-5  ">
            <thead>
                <tr >
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
                        <button class="btn btn-warning "><i class="bi bi-pencil-fill"></i></button>
                        <button class="btn btn-danger ml-2"><i class="bi bi-trash"></i></button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">002</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Maxilo facial</td>
                    <td>
                        <button class="btn btn-warning "><i class="bi bi-pencil-fill"></i></button>
                        <button class="btn btn-danger ml-2"><i class="bi bi-trash"></i></button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">002</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Maxilo facial</td>
                    <td>
                        <button class="btn btn-warning "><i class="bi bi-pencil-fill"></i></button>
                        <button class="btn btn-danger ml-2"><i class="bi bi-trash"></i></button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">002</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Maxilo facial</td>
                    <td>
                        <button class="btn btn-warning "><i class="bi bi-pencil-fill"></i></button>
                        <button class="btn btn-danger ml-2"><i class="bi bi-trash"></i></button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">002</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Maxilo facial</td>
                    <td>
                        <button class="btn btn-warning "><i class="bi bi-pencil-fill"></i></button>
                        <button class="btn btn-danger ml-2"><i class="bi bi-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>   
        <nav aria-label="...">
  <ul class="pagination pagination">
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" >2</a></li>
    <li class="page-item"><a class="page-link" >3</a></li>
  </ul>
</nav>     
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
        box-shadow: #40897a 1px 2px 10px  ;
    }

  </style>
  