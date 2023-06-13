<template>
    <div class="doctors">
        <Top></Top>
        <Doctors_list></Doctors_list>
    </div>
</template>
<script>
import Top from '@/components/Top.vue'
import Doctors_list from '@/components/Doctors_list.vue'

export default {
  name: 'doctors',
  components: {
    Doctors_list,
    Top
  }
}
</script>