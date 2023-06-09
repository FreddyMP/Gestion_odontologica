<template>
    <div class="gestion">
      <Top></Top>
        <Gestion></Gestion>
        
    </div>
</template>
<script>

import Gestion from '@/components/Gestion.vue'
import Top from '@/components/Top.vue'

export default {
  name: 'gestion',
  components: {
    Gestion,
    Top
  }
}
</script>