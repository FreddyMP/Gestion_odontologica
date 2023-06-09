<template>
    <div class="doctors">
        <Gestion></Gestion>
        <Doctors></Doctors>
    </div>
</template>
<script>
import Gestion from '@/components/Gestion.vue'
import Doctors from '@/components/Doctors.vue'

export default {
  name: 'doctors',
  components: {
    Doctors,
    Gestion
  }
}
</script>