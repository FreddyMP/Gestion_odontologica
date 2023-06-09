<template>
    <div class="pacientes">
        <Gestion></Gestion>
        <div class="form-paciente">
            <div class="row">
                <div class="col-md-12">
                    <input type="text" name="" id="">
                </div>
                <div class="col-md-12">
                    <input type="text" name="" id="">
                </div>
                <div class="col-md-12">
                    <input type="text" name="" id="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Gestion from '@/components/Gestion.vue'

export default {
  name: 'pacientes',
  components: {
    Gestion
  }
}
</script>
<style scoped>
  .form-paciente{
    margin-left: 800px;
  }
 
  
  </style>
