<template>
    <div class="doctors">
        <Gestion></Gestion>
        <Doctors_list></Doctors_list>
    </div>
</template>
<script>
import Gestion from '@/components/Gestion.vue'
import Doctors_list from '@/components/Doctors.vue'

export default {
  name: 'doctors',
  components: {
    Doctors_list,
    Gestion
  }
}
</script>