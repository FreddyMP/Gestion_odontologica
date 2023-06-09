<template>
    <div class="doctors">
      <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
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
  